import React from 'react'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";


function Header() {
  return (
    <div className="">
      <div className='flex justify-between pt-5'>
        <div className='h-[40px] w-1/3 bg-gray-100 text-slate-400  rounded-lg flex items-center px-4'>
          <BiSearch/>
          <input class="placeholder:text-gray-400 w-full mx-2 bg-gray-100 rounded-md py-2 focus:outline-none focus:no-underline text-sm " placeholder="Search member..." type="text" width="48" name="search"/>

        </div>

        <div className="flex items-center">
          <span className="p-2 ml-2 bg-gray-100 text-gray-500 rounded-full cursor-pointer"><AiOutlineBell/></span>
          <span className="p-2 ml-2 bg-black text-white rounded-full cursor-pointer"><IoMdAdd/></span>
        </div>
      </div>

      <hr className='my-5' />
    </div>
    

    
  )
}

export default Header