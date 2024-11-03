import React from 'react'

const SubScribe = () => {
  return (
    <div className='mt-[70px] mb-[50px] flex flex-col gap-4 text-center items-center'>
        <h2 className='text-[35px] font-bold w-full md:w-[400px]'>
        Subscribe To Get The Latest News About Us
        </h2>
        <p className=' text-gray-800 text-[16px] w-full md:w-[500px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='p-[13px] bg-[#FFB64980] rounded-[15px] w-full md:w-[600px]'>
            <form className='flex justify-between items-center' > 
                <input className='pl-[20px] outline-none w-full bg-transparent placeholder:text-white text-white text-[18px] font-medium' type="text" placeholder='Enter you email' />
                <button className='bg-[#FFA03F] text-white py-[10px] px-[20px] rounded-md '>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default SubScribe