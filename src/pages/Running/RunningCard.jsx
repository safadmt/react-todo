import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { useTopicContext } from "../../reducer&context/TopicContext";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

function RunningCard({ WrappedCard, topic, handleEditTopic }) {
  const { state, dispatch } = useTopicContext();

  function handleCompleted(id) {
    dispatch({ type: "set_completed_topics", payload: id });
    toast.success("Topic completed successfully");
  }

  function handleDelete(id) {
    dispatch({ type: "set_trashed_topics_from_running", payload: id });
    toast.warning("Topic deleted, You can view trashed page");
  }

  function handleEdit(topic) {
    handleEditTopic(topic);
  }
  return (
    <div className="bg-white border-2 border-[#9a8c98] rounded-md p-6 w-full">
      <div className="relative">
        <div className="h-36 overflow-auto">
          <WrappedCard style={""} padding={""} topic={topic} />
        </div>

        <div className="flex justify-end gap-6 mt-4">
          <div className="group">
            <FaEdit
              className="hover:cursor-pointer peer"
              onClick={() => handleEdit(topic)}
              size={20}
              color="blue"
            />
            <span
              id="tooltip"
              className="z-10 invisible group-hover:visible absolute text-[11px] p-2 bg-black text-white rounded-lg  bottom-5 right-28"
            >
              Edit
            </span>
          </div>
          <div className="group">
            <FaCircleCheck
              className="hover:cursor-pointer peer"
              onClick={() => handleCompleted(topic.id)}
              size={20}
              color="green"
            />
            <span
              id="tooltip"
              className="z-10 invisible group-hover:visible absolute text-[11px] p-2 bg-black text-white rounded-lg  bottom-5 right-16"
            >
              Set as completed
            </span>
          </div>
          <div className="group">
            <FaTrashCan
              className="hover:cursor-pointer peer"
              size={20}
              color="red"
              onClick={() => handleDelete(topic.id)}
            />
            <span
              id="tooltip"
              className="z-10 invisible group-hover:visible absolute text-[11px] p-2 bg-black text-white rounded-lg bottom-5 right-5"
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RunningCard;
