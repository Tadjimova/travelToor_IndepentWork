import React from 'react'

const ContactUseForm = () => {
    return (
        <div className='p-[15px] shadow-md rounded-md border-[1px] '>
            <h2 className='text-[18px] font-semibold text-orange-500 mb-[20px]'>
                Get in touch with us
            </h2>
            <form className='flex flex-col  gap-3 '>
                <div className='flex flex-col lg:flex-row justify-between  gap-3'>
                    <div className='flex-1'>
                        <label className='text-[16px] font-medium' htmlFor="username">Your name:</label>
                        <input className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300  rounded-md focus:border-orange-500 outline-none  ' type="text" placeholder='Enter your name' id='username' />
                    </div>
                    <div className='flex-1'>
                        <label className='text-[16px] font-medium' htmlFor="email">Email:</label>
                        <input className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300 rounded-md focus:border-orange-500 outline-none  ' type="text" placeholder='Enter your email' id='email' />
                    </div>

                </div>
                <div>
                    <label className='text-[16px] font-medium' htmlFor="message">Message:</label>
                    <textarea placeholder='Message' maxLength={300} id='message' className=' resize-none py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300 rounded-md focus:border-orange-500 outline-none  '>

                    </textarea>
                </div>
                <div className='flex justify-end'>
                    <button className='py-[7px] px-[20px] bg-orange-500 hover:bg-orange-600 active:scale-95 text-white shadow-sm rounded-full '>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUseForm