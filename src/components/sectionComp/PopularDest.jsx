import { MdLocationOn } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import React, { useContext, useEffect } from 'react'
import { getDestinationData } from "../../resource/requestAxios";
import { MainContext } from "../../context/context";
import DestinationCard from "../DestinationCard";
import Slider from "react-slick";
import ArrowBtn from "../page-comp/ArrowBtn";

const PopularDest = () => {
    const { state, dispatch } = useContext(MainContext)
    console.log(state)

    useEffect(() => {
        getDestinationData("https://travel-data2-base.onrender.com/destinations", dispatch)
    }, [])

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowBtn/>,
        prevArrow: <ArrowBtn/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        
    }
    return (
        <div className='my-[60px]'>
            <div className='mb-[30px]'>
                <p className='text-[18px] font-semibold text-[#FFA03F]'>
                    Famous Dictation!
                </p>
                <h3 className='text-[30px] md:text-[40px] font-bold '>Our Popular <span className='text-[#FFA03F]'>Dictation's</span></h3>
            </div>

            <div>
                <Slider {...settings}>
                   {state.isDestLoading?
                   [1,2,3].map(item => (
                    <DestinationCard key={item}/>
                   )) 
                  :
                  state.destinations.map(item => (
                    <DestinationCard key={item.id} item={item} />
                ))}
                </Slider>

            </div>

        </div>
    )
}

export default PopularDest