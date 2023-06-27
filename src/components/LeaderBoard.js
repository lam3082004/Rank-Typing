import React, {useRef, useEffect, useState} from 'react'
import RakingProfile from './RakingProfile'
import { BsChevronDown } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import AddMember from './AddMember';
import JoinedMember from './JoinedMember';
import { client } from '../sanity';

var rank = [], stand = [], save = []
var count = 0

function LeaderBoard() {

  const ref = useRef(null);
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let name = month[d.getMonth()];
  let year = d.getFullYear();
  let currentMonth = '2023-0'+(d.getMonth()+1);
  let condition = 'June 2023';


  const [btnCloseAddMember, setBtnCloseAddMember] = useState(false);
  const [MemberRank, setMemberRank] = React.useState([]);
  
  const fetchMemberRank = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/'); 
      
      const data = await response.json();
      setMemberRank(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchMemberRank();


  useEffect(() => {
    document.getElementById("month")
    .addEventListener("input", () => 
    {
      let chMonth = String(document.getElementById("month").value); 
      let numMonth = parseInt(chMonth[5] + chMonth[6]);
      condition = String(month[numMonth-1] + " " + d.getFullYear())
      console.log(condition)
    }
  , [])});

  return (
    <div className="mb-10">
      <div className='text-[24px] font-medium'>
        LeaderBoard
      </div>
      
      <div className="flex justify-between mt-2">
        <div className="select-none">
        
          <label>
            <input className='outline-none border px-4 py-2 rounded-lg text-sm font-medium  text-gray-500 capitalize'
             type="month" ref={ref} id="month" name="bdaymonth"></input>
          
          
          </label>
          
     
        </div>

        <div className="flex items-center">
          <div className="sm:flex hidden">

            <JoinedMember
              memberUrl={''}
              imgUrl={'https://conteudo.imguol.com.br/c/noticias/74/2022/06/06/bored-ape-nft-que-integra-a-colecao-do-bored-ape-yacht-club-1654521934017_v2_1x1.jpg'}
            />
            <JoinedMember
              memberUrl={''}
              imgUrl={'https://media.tatler.com/photos/627258d0bc4f55bd13591609/1:1/w_1280,h_1280,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg'}
            />

      
            <span className="w-[30px] h-[30px] -ml-1 outline outline-2 outline-white bg-gray-200 flex justify-center items-center text-xs font-semibold rounded-full">+2</span>
          </div>
          <button onClick={() => setBtnCloseAddMember(true)}
            className="py-3 px-4 ml-4 flex bg-black text-white rounded-lg text-sm font-medium items-center cursor-pointer">
            Add members<IoMdAdd className='ml-2'/> 
          </button>
        </div>
      </div>

      <hr className='my-5 text-gray-100' />

      <div className="w-full flex items-center py-4 sm:pl-6 pl-4 bg-gray-100 text-gray-500 rounded font-medium sm:text-sm text-xs">
        <div className="sm:w-[10%] w-[12%]">Rank</div>
        <div className="sm:w-[40%]">Name</div>

        <div className="sm:w-full w-[30%] ml-auto sm:ml-0 grid sm:grid-cols-5">
          <div className="sm:block hidden">Average</div>
          <div className="sm:block hidden">Best</div>
          <div className="sm:block hidden">Races</div>
          <div className="sm:block hidden">Wins</div>
          <div className="sm:w-auto w-[30%] ">Winrate</div>
        </div>
      
      </div>

      {MemberRank.sort((a, b)=> 
      b[2] - a[2]
      ).map((data, index) => {
        
          if (rank[data[0]] !=  -1)
          {
            count = count + 1
            rank[data[0]] = -1
            stand[rank[data[0]]] = count
            save[data[0]] = stand[rank[data[0]]]
            console.log(stand[rank[data[0]]])
            
          }
          return (<RakingProfile
            id = {save[data[0]]}
            month ={'June 2023'} 
            name = {data[0]}
            average = {data[2]}
            best = {data[3]}
            races = {data[4]}
            wins = {data[5]}
            winrate = {(data[5]/data[4]*100).toFixed()+'%'}
            />
            )
        

        // 👇️ render nothing
        return null;
      })}

        <AddMember trigger={btnCloseAddMember} setTrigger={setBtnCloseAddMember}>
        </AddMember>

    </div>

    
  )
}

export default LeaderBoard