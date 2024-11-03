
import React from 'react'
import FilterInputs from "../components/page-comp/FilterInputs";
import homeImage from "../images/home.svg";
import PopularDest from '../components/sectionComp/PopularDest';
import SubScribe from '../components/sectionComp/SubScribe';


const Home = () => {
  return (
    <div className='container'>
        <div className='flex justify-between gap-3 mt-[60px] items-center flex-col md:flex-row'>
            <div className="flex-[1.2] flex flex-col gap-[20px]">
                <h2 className='text-[40px] sm:text-[45px] md:text-[50px] lg:text-[65px] font-[700]'>
                <span className='underline underline-offset-8 decoration-orange-400'>Let’s</span> Create Memorable 
                Journey
                </h2>
                <p className='text-[14px] sm:text-[16px] lg:text-[18px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                    <FilterInputs/>
                </div>

            </div>
            <div className="flex-1">
              <img src={homeImage} alt="" />
            </div>
        </div>

        <PopularDest/>
        <SubScribe/>

    </div>
  )
}

export default Home