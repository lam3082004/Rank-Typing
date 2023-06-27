import React from 'react'
import { BsFillCaretUpFill } from "react-icons/bs";
import data from './data.json';



function RakingProfile(data) {

  return (
    
    <a href={data.link} target="_blank">
        <div className="w-full flex py-4 sm:pl-6 pl-4 text-sm font-medium border-b-[1px] hover:border-[1px] hover:rounded-lg hover:bg-gray-50 items-center hover:transition duration-500 hover:scale-[102%] ease-in-out">
            <div className="sm:w-[10%] w-[12%] flex justify-start pl-4">{data.id}</div>
            <div className="sm:w-[40%] w-[60%] flex items-center">
                <div className=''>
                    {data.name}
                </div>
            </div>

            <div className="sm:w-full w-[30%] grid sm:grid-cols-5 items-center">
                <div className="sm:block hidden">{data.average}</div>
                <div className="sm:block hidden">{data.best}</div>
                <div className="sm:block hidden">{data.races}</div>
                <div className="sm:block hidden">{data.wins}</div>
                <div className="">
                    <div className='flex w-fit px-2 py-1 items-center text-green-500 bg-gray-100 font-semibold rounded'>
                        <BsFillCaretUpFill className='mr-1'/>
                        {data.winrate}
                    </div>
                </div>
            </div>

        
        </div>
    </a>
   
  )
}

export default RakingProfile