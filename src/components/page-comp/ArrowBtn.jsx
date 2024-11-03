import { IoIosArrowBack } from "react-icons/io"; 
import { IoIosArrowForward } from "react-icons/io"; 
import React from 'react'

const ArrowBtn = (props) => {
    const { onClick, className}=props
    const checkBtn= className.includes("slick-prev")
  return (
    <div className={`absolute top-[50%] active:scale-95 duration-150 ${checkBtn? "left-[-5%]":"right-[-5%] "} z-[5] translate-y-[-50%] h-[40px] min-w-[40px] text-[18px] flex justify-center items-center cursor-pointer text-white bg-orange-400 rounded-full shadow-md`} onClick={onClick}>
        {checkBtn? <IoIosArrowBack />:<IoIosArrowForward />}

    </div>
  )
}

export default ArrowBtn