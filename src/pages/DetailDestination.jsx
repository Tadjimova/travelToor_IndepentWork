import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from '../context/context'
import TourCard from '../components/page-comp/TourCard'
import { getDestinationData, getTourData } from '../resource/requestAxios'

const DetailDestination = () => {
    const params = useParams()

    const { state, dispatch } = useContext(MainContext)
    useEffect(() => {
        getDestinationData("https://travel-data2-base.onrender.com/destinations", dispatch)
        getTourData("https://travel-data2-base.onrender.com/offers", dispatch)
    }, [])

    const selectDest = state.destinations?.find(item => `${item.slug}-${item.id}` === params.slug)
    const selectTour = state.offers?.filter(item=> item.destinationId === selectDest.id )
    console.log(selectDest)


    return (
        <div className='container mt-[20px]'>
            <div className='relative p-[20px] mt-[10px] shadow-md rounded-md  border-[1px] overflow-hidden'>
                <img className='absolute top-0 left-0 bottom-0 right-0 max-h-full w-full object-cover z-0 ' src={selectDest?.image} alt="" />
                <div className='relative z-10 text-white p-[20px] bg-gray-800 bg-opacity-50 backdrop:blur-md'>
                    <div className=' text-center text-[30px] font-bold '>
                        {selectDest?.name}
                    </div>
                    <p className='text-center'>
                        {selectDest?.description}
                    </p>
                </div>
            </div>

            <div className='mt-[20px]'>
                {state.isOfferLoading ?
                    [1, 2, 3].map((item, index) => (
                        <TourCard key={item} index={index} />
                    ))
                    :
                    selectTour?.map((item, index) => (
                        <TourCard item={item} key={item.id} index={index} />
                    ))
                }


            </div>
        </div>
    )
}

export default DetailDestination