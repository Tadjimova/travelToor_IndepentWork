import React, { useContext, useEffect } from 'react'
import BookingForm from '../components/page-comp/BookingForm'
import { MainContext } from '../context/context'
import { getDestinationData, getTourData } from '../resource/requestAxios'

const Book = () => {

  const { state, dispatch } = useContext(MainContext)
 

  useEffect(() => {
      getDestinationData("https://travel-data2-base.onrender.com/destinations", dispatch)
      getTourData("https://travel-data2-base.onrender.com/offers", dispatch)
  }, [])
  return (
    <div className='container mt-[20px]'>
      <div className='flex-1 flex flex-col gap-4 '>
        <h2 className="md:text-[30px] lg:text-[35px] font-bold  text-orange-500">
          Book your favourite trip
        </h2>
      </div>

      <hr className='my-[10px] border-gray-300' />

      {
        state.isDestLoading && state.isOfferLoading?
        <div>
          Loading...
        </div>
        :
        <BookingForm dest={state.destinations} tour={state.offers} />
      }

    </div>
  )
}

export default Book