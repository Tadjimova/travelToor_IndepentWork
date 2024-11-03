import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import React from 'react'
import ContactUseForm from "../components/page-comp/ContactUseForm";

const Contact = () => {
  return (
    <div className='container mt-[20px]'>
      <div className='flex-1 flex flex-col gap-4 '>
        <h2 className="md:text-[30px] lg:text-[35px] font-bold  text-orange-500">Contact</h2>
      </div>

      <hr className='my-[10px] border-gray-300' />

      <div className='flex justify-between items-center gap-4 mt-[20px] flex-col md:flex-row'>
        <div className='flex-1 flex justify-center flex-col gap-2'>

          <div className='flex justify-start items-center gap-2'>
            <div className="min-w-[40px] text-white min-h-[40px] text-[20px] rounded-full bg-orange-600 flex justify-center items-center shadow-sm ">
              <MdLocationOn />
            </div>
            <div className="text-[16px] md:text-[18px] font-semibold text-gray-800 ">
              Any Ware, Any Rod, Xyz (142 234)
            </div>
          </div>

          <div className='flex justify-start items-center gap-2'>
            <div className="min-w-[40px] text-white min-h-[40px] text-[20px] rounded-full bg-orange-600 flex justify-center items-center shadow-sm ">
              <BsFillTelephoneFill />
            </div>
            <div className="text-[16px] md:text-[18px] font-semibold text-gray-800 ">
              +91 9876543210
            </div>
          </div>

          <div className='flex justify-start items-center gap-2'>
            <div className="min-w-[40px] text-white min-h-[40px] text-[20px] rounded-full bg-orange-600 flex justify-center items-center shadow-sm ">
              <MdOutlineEmail />
            </div>
            <div className="text-[16px] md:text-[18px] font-semibold text-gray-800 ">
              axy@mail.com
            </div>
          </div>

        </div>

        <div className='flex-1'>
          <ContactUseForm/>

        </div>

      </div>



    </div>
  )
}

export default Contact