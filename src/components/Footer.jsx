import { MdEmail } from "react-icons/md"; 
import { AiFillPhone } from "react-icons/ai"; 
import { MdLocationPin } from "react-icons/md"; 
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='mt-[50px] py-[30px] bg-orange-500 text-white'>
            <div className='flex justify-between gap-1 container'>
                <div className="flex flex-col gap-3 flex-1">
                    <h2 className="font-bold text-[24px] mb-[20px]">
                        TravelToor
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure libero repellendus possimus, praesentium, expedita commodi adipisci nisi asperiores, veniam eveniet enim.</p>
                    <div className="flex justify-start items-center gap-2 text-[24px]">
                        <CgFacebook />
                        <FaLinkedinIn />
                        <FaTwitter />
                    </div>
                </div>
                <div className="flex-1  flex-col items-center hidden md:block">
                    <h2 className="font-bold text-[24px] mb-[20px]">
                        Services
                    </h2>
                    <ul>
                        <li className='text-[16px] font-medium'>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className='text-[16px] font-medium'>
                            <Link to={'/destinations'}>
                                Destinations
                            </Link>
                        </li>
                        <li className='text-[16px] font-medium'>
                            <Link to={'/packages'}>
                                Packages
                            </Link>
                        </li>
                        <li className='text-[16px] font-medium'>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="flex-1 hidden md:block">
                    <h2 className="font-bold text-[24px] mb-[20px]">
                        Contact
                    </h2>
                    <ul className=''>
                        <li className='text-[16px] font-medium flex justify-start items-center gap-3'>
                            <MdLocationPin />
                            <span>Any Ware, Any Rod, Xyz (142 234)</span>
                            
                        </li>
                        <li className='text-[16px] font-medium flex justify-start items-center gap-3'>
                            <AiFillPhone />
                            <span>+91 9876543210 </span>
                            
                        </li>
                        <li className='text-[16px] font-medium flex justify-start items-center gap-3'>
                            <MdEmail />
                            <span>axy@mail.com</span>
                            
                        </li>
                        
                    </ul>

                </div>

            </div>
            <div className="text-center mb-[10px]">
            traveltoor©2024 all right reserve 
            </div>

        </div>
    )
}

export default Footer