import { BsImages } from "react-icons/bs"; 
import React from 'react'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from "react-router-dom";


const DestinationCard = ({item}) => {
   
    const navigate = useNavigate()


    function setDetailDest() {
        navigate(`${item.slug}-${item.id}`)
        console.log(item.slug)
        
    }
    
   

    if(!item){
        return (
            <div className='rounded-md overflow-hidden shadow-md relative group cursor-pointer flex-1'>
                    <div className='object-cover w-full h-[400px] group-hover:scale-125 duration-200 animate-pulse flex justify-center items-center text-[30px] text-gray-500'>
                        <BsImages />
                    </div>
                    <div className='p-[10px] absolute bottom-[-110px] left-0 right-0 bg-black bg-opacity-45 text-white hover:bottom-0 duration-200'>
                        <h2 className="text-[22px] font-semibold mb-[10px] animate-pulse ">Loading...</h2>
                        <div className='flex justify-between items-center gap-1'>
                            <div className="flex justify-center items-center gap-1 text-[#FFA03F]">
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsStar />
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <MdLocationOn />
                                <span className="font-semibold animate-pulse">country...</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[12px] max-h-[100px] min-h-[100px] overflow-x-auto  mt-[10px]">
                                loading...
                            </p>
                        </div>
                    </div>

                </div>

        )
    }
    
  return (
    <div onClick={setDetailDest} className='rounded-md overflow-hidden shadow-md relative group cursor-pointer flex-1'>
                    <img className='object-cover w-full h-[400px] group-hover:scale-125 duration-200' src={item?.image} alt="" />
                    <div className='p-[10px] absolute bottom-[-110px] left-0 right-0 bg-black bg-opacity-45 text-white hover:bottom-0 duration-200'>
                        <h2 className="text-[22px] font-semibold mb-[10px]">{item?.name}</h2>
                        <div className='flex justify-between items-center gap-1'>
                            <div className="flex justify-center items-center gap-1 text-[#FFA03F]">
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsStar />
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <MdLocationOn />
                                <span className="font-semibold">{item?.country}</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[12px] max-h-[100px] min-h-[100px] overflow-x-auto  mt-[10px]">
                                {item?.description}
                            </p>
                        </div>
                    </div>

                </div>
  )
}

export default DestinationCard