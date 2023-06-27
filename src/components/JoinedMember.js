import React from 'react'

function JoinedMember(props) {
  return (
    <div>
        <a href={props.memberUrl}>
            <div style={{backgroundImage: `url(${props.imgUrl})`}}
                className="w-[30px] h-[30px] -ml-1 outline outline-2 outline-white bg-cover bg-no-repeat flex justify-center items-center text-xs font-semibold rounded-full">
            </div>
        </a>
        
        
    </div>
  )
}

export default JoinedMember