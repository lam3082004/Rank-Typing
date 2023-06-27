import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";


function AddMember(props) {
  return (props.trigger) ? (

    <div className='absolute top-10 left-[35%] w-[30%] h-[600px] bg-white border rounded-lg shadow-lg '>
        <button 
            onClick={() => props.setTrigger(false)} 
            className='text-red-500 absolute right-3 top-3'>
                <IoIosCloseCircle/>
        </button>
        <div className="py-8  w-full text-center">
          <p className='font-medium'>Add members</p>
          <div className="w-[200px] h-[200px] mt-10 bg-gray-100 rounded-lg  mx-auto"></div>
        </div>
        {props.children}
    </div>
  ) : "";
}

export default AddMember