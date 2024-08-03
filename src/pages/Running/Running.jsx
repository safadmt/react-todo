import React, { useState } from "react";
import TopicCard from "../../component/TopicCard/TopicCard";
import RunningCard from "./RunningCard";
import { IoClose } from "react-icons/io5";
import "./running.css";

import { useTopicContext } from "../../reducer&context/TopicContext";
import Form from "../../component/Form/Form";
import { toast } from "react-toastify";
function Running() {
  const { state, dispatch } = useTopicContext();
  const [editTopic, setEditTopicInfo] = useState({
    topic: "topic",
    description: "",
    id: "",
  });

  const [showEditForm, setShowEditForm] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setEditTopicInfo({ ...editTopic, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "edit_running_topic", payload: editTopic });
    toast.success("Updated successfully")
  }
  function handleEdit(topic) {
   
    setEditTopicInfo(topic);
    setShowEditForm(true);
  }
  function handleClose() {
    setEditTopicInfo({ topic: "topic", description: "", id: "" });
    setShowEditForm(false);
  }
  return (
    <div className="px-4 overflow-auto h-[90vh]">
      <div className="mt-4 py-3">
        {state.running_topics.length > 0 ? (
          <div className="running-topics">
            {state.running_topics?.map((topic) => {
              return (
                <RunningCard
                  key={topic.id}
                  WrappedCard={TopicCard}
                  topic={topic}
                  handleEditTopic={handleEdit}
                />
              );
            })}
          </div>
        ) : (
          <div>No topics created</div>
        )}

        { showEditForm &&
          <div className="fixed z-1 top-40 translate-x-1/4 bg-white">
            <div className="my-2 flex px-6 justify-between">
              <div className="font-bold text-xl text-center flex-1">
                Edit Topic
              </div>
              <div>
                <IoClose
                  size={28}
                  color="black"
                  className="hover:cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </div>
            <Form
              handleInputChange={handleChange}
              handleSubmit={handleSubmit}
              topicInfo={editTopic}
              buttonCaption={"Update Topic"}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default Running;
