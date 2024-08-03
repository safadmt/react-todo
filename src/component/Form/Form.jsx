import React from 'react'

function Form(props) {
    const {
        handleSubmit,
        topicInfo,
        handleInputChange,
        buttonCaption
    } = props
  return (
    <div>
        <form action="" className='md:w-[500px] bg-white rounded p-6 text-start' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="" className=''>Topic</label>
              <input 
              type="text" 
              name="topic" id="" 
              value={topicInfo.topic}
              placeholder='Enter topic'
              onChange={handleInputChange}
              className='outline-none text-gray-500 border-2 mt-1 w-full border-[#9a8c98] px-4 py-2 rounded font-medium text-lg'/>
            </div>
            <div className='mb-3'>
              <label htmlFor="" className=''>Description</label>
              <textarea 
              type="text" 
              name="description" id="" 
              value={topicInfo.description}
              onChange={handleInputChange}
              placeholder='Enter Description'
              className='outline-none border-2 text-gray-500 mt-1 w-full border-[#9a8c98] px-4 py-2 rounded font-medium text-lg'/>
            </div>
            <button type='submit' className='bg-[#4a4e69] w-full hover:bg-[#9a8c98] text-white py-3 rounded'>{buttonCaption}</button>
          </form>
    </div>
  )
}

export default Form