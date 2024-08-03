import React, { useEffect } from "react";
import "../Running/running.css";
import { useTopicContext } from "../../reducer&context/TopicContext";
import TopicCard from "../../component/TopicCard/TopicCard";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
function Completed() {
  const { state, dispatch } = useTopicContext();
  function handleDelete (id) {
    dispatch({type: "set_trashed_topics_from_complete",payload: id})
    toast.success("Deleted! . You can view in trashed page")
  }
  return (
    <div>
      <div className=" py-6 px-4 overflow-auto">
        {state.completed_topics.length > 0 ? (
          <div className="completed-topics">
            {state.completed_topics.map((topic, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border-2 box-box border-[#9a8c98] rounded-md w-full p-6"
                >
                  <div className="relative">
                    <div className="h-36 overflow-auto">
                      <TopicCard style={""} padding={""} topic={topic} />
                    </div>
                    
                    <div className="float-right mb-2">
                      <div className="group">
                        <FaTrashCan
                          className="hover:cursor-pointer peer"
                          size={20}
                          color="red"
                          onClick={()=> handleDelete(topic.id)}
                        />
                        <span
                          id="tooltip"
                          className="z-10 invisible  group-hover:visible absolute text-[11px] p-2 bg-black text-white rounded-lg bottom-0  right-6"
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Complted Topics</div>
        )}
      </div>
    </div>
  );
}

export default Completed;
