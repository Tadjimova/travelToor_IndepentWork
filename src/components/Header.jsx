import { BsFillTelephoneFill } from "react-icons/bs"; 
import { MdLocationOn } from "react-icons/md"; 
import { BiPackage } from "react-icons/bi"; 
import { AiFillHome } from "react-icons/ai"; 
import { BiHome } from "react-icons/bi"; 
import { CgClose } from "react-icons/cg"; 

import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [showMenu, setshowMenu]= useState(false)
    return (
        <header className='h-[70px] flex items-center'>
            <div className='container'>
                <div className='flex justify-between items-center gap-1'>
                    <div>
                        <Link>
                             <span className='text-[23px] font-[700]'>Travel<span className='primary-color'>Toor</span></span>
                        </Link>
                    </div>
                    <nav>
                        <ul className=' justify-center items-center gap-[20px] hidden md:flex'>
                            <li className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={'/destinations'}>
                                    Destinations
                                </Link>
                            </li>
                            <li className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={'/packages'}>
                                    Packages
                                </Link>
                            </li>
                            <li className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex justify-end items-center gap-2">
                        <Link to={'/book'}>
                            <button className='btn btn-primary text-nowrap' >
                                Book Now
                            </button>
                        </Link>
                        <div onClick={() => setshowMenu(prev =>prev?!prev:!prev)} className="cursor-pointer p-[5px] hover:bg-slate-200 rounded-sm block md:hidden">
                            {showMenu? <CgClose /> :<AiOutlineMenu />}
                        </div>
                    </div>
                    <div className={`fixed top-0 bottom-0 ${showMenu? "left-0":"left-[-100%]"} left-0 w-[250px] duration-200 bg-white shadow-md z-10 flex justify-center pt-[40px]`}>
                    <ul className=' flex   gap-[20px] flex-col '>
                            <li onClick={()=>setshowMenu(false)} className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={"/"}>
                                    <div className="flex justify-start items-center gap-2">
                                        <span><AiFillHome /></span>
                                        <span>Home</span>
                                    </div>
                                </Link>
                            </li>
                            <li onClick={()=>setshowMenu(false)} className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={'/destinations'}>
                                   <div className="flex justify-start items-center gap-2">
                                   <span><MdLocationOn /></span>
                                   <span>Destinations</span>
                                   </div>
                                </Link>
                            </li>
                            <li onClick={()=>setshowMenu(false)} className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={'/packages'}>
                                    <div className="flex justify-start items-center gap-2">
                                        <span><BiPackage /></span>
                                        <span>Packages</span>
                                    </div>
                                </Link>
                            </li>
                            <li onClick={()=>setshowMenu(false)} className='font-[500] text-[16px] xl:text-[18px] hover:text-[#FFA03F]'>
                                <Link to={'/contact'}>
                                    <div className="flex justify-start items-center gap-2">
                                        <span><BsFillTelephoneFill /></span>
                                        <span>Contact</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header