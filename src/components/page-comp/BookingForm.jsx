import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const BookingForm = ({ dest, tour }) => {
  const [destId, setDestId] = useState(" ")
  console.log(destId)

  const selectTours = tour.filter(item => item.destinationId == destId)

  useEffect(() => {
    setDestId(dest[0]?.id)
  }, [dest])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const bookingData = {
      id: uuidv4(),
      ...Object.fromEntries(formData.entries())
    }

    async function postData() {
      try {
        const res = await axios.post("https://travel-data2-base.onrender.com/users", bookingData)
        console.log(res.data)
        toast.success('Your request has been processed successfuly!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          })

          e.target.reset()

      } catch (err) {
        console.log(err)
        toast.error('Error!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
      }
    }
    postData()
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='flex flex-col mt-[20px] gap-3'>
        <div className='flex flex-col lg:flex-row justify-between  gap-3'>
          <div className='flex-1'>
            <label className='text-[16px] font-medium' htmlFor="user-name">Your name:</label>
            <input required name='userName' className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300  rounded-md focus:border-orange-500 outline-none  ' type="text" placeholder='Enter your name' id='user-name' />
          </div>
          <div className='flex-1'>
            <label className='text-[16px] font-medium' htmlFor="email">Email:</label>
            <input required name='email' className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300 rounded-md focus:border-orange-500 outline-none  ' type="text" placeholder='Enter your email' id='email' />
          </div>

        </div>

        <div>
          <label className='text-[16px] font-medium' htmlFor="phone-number">Phone number:</label>
          <input required name='phoneNumber' className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300 rounded-md focus:border-orange-500 outline-none  ' type="text" placeholder='Enter your phone number' id='phone-number' />
        </div>

        <div>
          <label className='text-[16px] font-medium' htmlFor="destination">Destination:</label>
          <select required name='destinationId' value={destId} onChange={(e) => setDestId(e.target.value)} id='destination' className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300 rounded-md focus:border-orange-500 outline-none' >
            {dest?.map(item => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className='text-[16px] font-medium' htmlFor="tour">Tour:</label>
          <select required name='tourId' id='tour' className='py-[7px] w-full px-[15px] text-[16px] border-[2px] border-orange-300 rounded-md focus:border-orange-500 outline-none' >
            {selectTours?.map(item => (
              <option value={item.id} key={item.id}>{item.title}</option>
            ))}
          </select>
        </div>

        <div className='flex justify-end'>
          <button className='py-[7px] px-[20px] bg-orange-500 hover:bg-orange-600 active:scale-95 text-white shadow-sm rounded-full '>
            Booking Now
          </button>
        </div>

      </div>
      <ToastContainer />
    </form>
  )
}

export default BookingForm