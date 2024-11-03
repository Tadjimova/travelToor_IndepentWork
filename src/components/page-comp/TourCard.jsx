import { BsImages } from "react-icons/bs"; 
import { BsStarHalf } from "react-icons/bs"; 
import { BsStar } from "react-icons/bs";
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const TourCard = ({ item, index }) => {
    const checkIndex = index % 2 === 0

    function checkItemRate(count) {
        const rateArrow = []
        for (let i = 1; i <=5; i++) {
            if(i<= +count?.toFixed()){
                if(i-0.4 >= +count){
                    rateArrow.push(0.5)
                }else {
                    rateArrow.push(1)
                }
            } else {
                rateArrow.push(0)
            }
        }
        return rateArrow
    }
    const rateArrow = checkItemRate(item?.rating)
    console.log(rateArrow)

    if(!item){
        return (
            <div className={`flex justify-between bg-gray-100 mb-[10px] shadow-md  animate-pulse border-[1px] border-gray-200 flex-col ${!checkIndex ? "md:flex-row-reverse" : "md:flex-row"}  rounded-md gap-3 p-[10px] border-t-[1px] border-gray-200 `}>

            <div className='flex-1'>
                <div className='border-[1px] border-gray-300 rounded-md object-cover h-[300px] w-full flex justify-center items-center text-gray-500 text-[20px] animate-pulse ' >
                    <BsImages />
                </div>
            </div>

            <div className='flex-[2] flex justify-between flex-col'>
                <h2 className='text-[24px] font-bold text-gray-900'>Loading...</h2>
                <p> Description...</p>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-2'>
                        <span>0</span>
                        <div className=' text-[20px] text-orange-400 font-bold flex justify-start items-center gap-1'>

                            {[0,0,0,0,0].map((item, index) => {
                               switch(item){
                                case 1 :
                                    return (
                                        <BsFillStarFill key={index}/>
                                    )
                                    case 0.5 :
                                    return (
                                        <BsStarHalf key={index} />
                                    )
                                    case 0 :
                                    return (
                                        <BsStar key={index}/>
                                    )
                               }
                            })}
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-2'>
                        <span>Per Person /</span>
                        <span className='text-[20px] font-bold text-orange-400'>price...</span>
                    </div>
                </div>

                <div className={`flex ${checkIndex ? "justify-start" : "justify-end"} items-center mt-[20px]`}>
                    <button disabled className='flex justify-center items-center gap-2 font-semibold py-[7px] px-[20px] border-[1px] border-orange-500 rounded-full text-orange-500 hover:bg-orange-200  active:scale-95'>
                        View Detail
                    </button>
                </div>

            </div>

        </div>
            
        )
    }

    return (
        <div className={`flex justify-between flex-col ${!checkIndex ? "md:flex-row-reverse" : "md:flex-row"}  gap-3 p-[10px] border-t-[1px] border-gray-200 `}>

            <div className='flex-1'>
                <img className='rounded-md object-cover h-[300px] w-full' src={item.images} alt="" />
            </div>

            <div className='flex-[2] flex justify-between flex-col'>
                <h2 className='text-[24px] font-bold text-gray-900'>{item.title}</h2>
                <p>{item.details}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-2'>
                        <span>{item.rating}</span>
                        <div className=' text-[20px] text-orange-400 font-bold flex justify-start items-center gap-1'>

                            {rateArrow.map((item, index) => {
                               switch(item){
                                case 1 :
                                    return (
                                        <BsFillStarFill key={index}/>
                                    )
                                    case 0.5 :
                                    return (
                                        <BsStarHalf key={index} />
                                    )
                                    case 0 :
                                    return (
                                        <BsStar key={index}/>
                                    )
                               }
                            })}
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-2'>
                        <span>Per Person</span>
                        <span className='text-[20px] font-bold text-orange-400'>{item.price}$</span>
                    </div>
                </div>

                <div className={`flex ${checkIndex ? "justify-start" : "justify-end"} items-center mt-[20px]`}>
                    <button className='flex justify-center items-center gap-2 font-semibold py-[7px] px-[20px] border-[1px] border-orange-500 rounded-full text-orange-500 hover:bg-orange-200  active:scale-95'>
                        View Detail
                    </button>
                </div>

            </div>

        </div>
    )
}

export default TourCard