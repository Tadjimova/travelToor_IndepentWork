import { HiOutlineArrowRight } from "react-icons/hi";
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import travelVideo from "../images/travels.mp4"
import DestinationCard from "../components/DestinationCard";
import { MainContext } from "../context/context";
import { getDestinationData } from "../resource/requestAxios";

const Destinations = () => {
  const { state, dispatch } = useContext(MainContext)
  

  useEffect(() => {
      getDestinationData("https://travel-data2-base.onrender.com/destinations", dispatch)
  }, [])
  return (
    <div className='container mt-[20px]  '>
      <div className=' p-[20px] rounded-md border-[1px]  shadow-md flex justify-between gap-3
      flex-col md:flex-row'>
        <div className='flex-1 flex flex-col gap-4 '>
          <h2 className="md:text-[35px] lg:text-[45px] font-bold mb-[10px] text-orange-500">Destinations</h2>
          <p className="text-[14px] lg:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum tempora labore sunt tempore? Unde quam quisquam commodi similique repudiandae, error asperiores pariatur! Quasi qui voluptas commodi voluptate quos veritatis. </p>
          <div>
            <Link to={"/packages"}>
              <button className=" flex justify-center items-center gap-2 font-semibold py-[7px] px-[20px] border-[1px] border-orange-500 rounded-full text-orange-500 hover:bg-orange-200  active:scale-95 ">
                <span>View All Tour Pages</span>
                <HiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className='flex-1    '>
          <video className="rounded-md" autoPlay muted loop >
            <source src={travelVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="my-[50px]">
        <h2 className="text-gray-900 text-center text-[35px] font-bold">All Destinations</h2>
        <div className=" mt-[20px] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {state.isDestLoading ?
            [1, 2, 3, 4].map(item => (
              <DestinationCard key={item} />
            ))
            :
            state.destinations.map(item => (
              <DestinationCard key={item.id} item={item} />
            ))}

        </div>

      </div>
    </div>
  )
}

export default Destinations