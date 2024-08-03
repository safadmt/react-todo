import React from 'react'
import './sidebar.css'
import { IoMdAddCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaSpinner } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
function Sidebar() {
  const items = [
    {route: '/',icon: <IoMdAddCircle size={30} className=''/>,value:"Add Topic"},
    {route: '/completed_topics',icon: <TiTick size={30}/>,value:"Completed"}, 
    {route:'/running_topics',icon: <FaSpinner size={28}/>,value: "Running"},
    {route: '/trashed_topics',icon: <MdDelete size={30}/>,value: "Trashed"}
  ]
  return (
    <div className='bg-[#4a4e69] sidebar ml-4 mr-2 my-6 rounded-xl'>
      <div className='div-sidebar-content'>
        <ul className='mt-4 '>
          {items.map((item,index)=> {
          return <li key={index} className={`text-white mb-4
            hover:cursor-pointer`}>
              <Link to={item.route}
              className='content-sidebar flex justify-start px-4 hover:text-black hover:bg-[#edf2f4] py-2 gap-4'>
                <span className=''>{item.icon}</span>
                <span className='content-active'>{item.value}</span>
                 </Link></li>
        })}
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar