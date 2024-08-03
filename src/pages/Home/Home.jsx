import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import {v4 as uuidv4} from 'uuid'
import { useTopicContext } from '../../reducer&context/TopicContext';
import Form from '../../component/Form/Form';


function Home() {
  const {state,dispatch} = useTopicContext();
  const [topicInfo,setTopicInfo] = useState({topic:"", description:""})

  function handleChange (e) {
    
    const {name, value} = e.target;
    setTopicInfo({...topicInfo, [name]:value})
  }
  
  function handleSubmit (e) {
    e.preventDefault();
    
    if(!topicInfo.topic.trim() || !topicInfo.description.trim()) {
      toast.warn("Required all field")
      return
    }
    dispatch({type: "set_running_topics", payload: {...topicInfo, id:uuidv4()}})
    setTopicInfo({topic:"", description:""})
    toast.success("Topic added successfully")
  } 
  return (
    <div className='w-full'>
        <div className='grid place-items-center mt-20 '>
          <div className='font-bold text-xl text-center mb-2'>Add Topic</div>
            <Form 
            handleInputChange={handleChange} 
            handleSubmit={handleSubmit}
            topicInfo={topicInfo}
            buttonCaption={"Add Topic"}/>
        </div>
    </div>
  )
}

export default Home