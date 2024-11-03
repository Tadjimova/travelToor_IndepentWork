import React, { useContext, useEffect } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import travelVideo from "../images/travel.mp4"
import { MainContext } from '../context/context'
import { getTourData } from '../resource/requestAxios'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import TourCard from '../components/page-comp/TourCard'

const Packages = () => {
  const { state, dispatch } = useContext(MainContext)
  

  useEffect(() => {
    getTourData("https://travel-data2-base.onrender.com/offers", dispatch)
  }, [])
  return (
    <div className='container mt-[20px]'>
      <div className=' p-[20px] rounded-md border-[1px]  shadow-md flex justify-between gap-3 flex-col md:flex-row'>
        <div className='flex-1 flex flex-col gap-4 '>
          <h2 className="md:text-[35px] lg:text-[45px] font-bold mb-[10px] text-orange-500">Tour Packages</h2>
          <p className="text-[14px] lg:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum tempora labore sunt tempore? Unde quam quisquam commodi similique repudiandae, error asperiores pariatur! Quasi qui voluptas commodi voluptate quos veritatis. </p>
          <div>
            <Link to={"/book"}>
              <button className=" flex justify-center items-center gap-2 font-semibold py-[7px] px-[20px] border-[1px] border-orange-500 rounded-full text-orange-500 hover:bg-orange-200  active:scale-95 ">
                <span>Book Now</span>
                <HiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className='flex-1'>
          <video className="rounded-md" autoPlay muted loop >
            <source src={travelVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className='mt-[50px]'>
        <h2 className="text-gray-900 text-center text-[35px] font-bold">All Tour Packages</h2>

        <div className='mt-[20px]'>
          {state.isOfferLoading?
          [1,2,3].map((item,index) =>( 
            <TourCard  key={item} index={index}/>
          ))
          :
        state.offers?.map((item, index) =>(
           <TourCard item={item} key={item.id} index={index}/>
         ))
        }
        </div>

      </div>


    </div>
  )
}

export default Packages