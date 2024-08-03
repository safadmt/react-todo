import React from 'react'

function TopicCard({topic ,style,padding}) {
  return (
    <div className={style}>
        <div className={padding}>
            <p className='font-bold text-lg text-gray-900 text-start'>{topic?.topic}</p>
            <p className='font-light text-[15px] text-gray-700 text-start'>{topic?.description}</p>
        </div>
    </div>
  )
}

export default TopicCard