import { IoIosArrowDown } from "react-icons/io";

import React, { useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const FilterInputs = () => {

    const selectCont1 = useRef()
    const selectCont2 = useRef()
    const selectCont3 = useRef()

    function setShowContent(id) {
        switch (id) {
            case 1:
                selectCont1.current.classList.toggle("hidden")
                selectCont2.current.classList.add("hidden")
                selectCont3.current.classList.add("hidden")
                break
            case 2:
                selectCont2.current.classList.toggle("hidden")
                selectCont1.current.classList.add("hidden")
                selectCont3.current.classList.add("hidden")
               
                break
            case 3:
                selectCont3.current.classList.toggle("hidden")
                selectCont1.current.classList.add("hidden")
                selectCont2.current.classList.add("hidden")
                break


        }
    }




    return (
        <div className='flex justify-between items-center gap-2 rounded-[15px] p-[30px] shadow-md'>
            <div className="flex justify-center items-center gap-6">
                <div  className="flex flex-col gap-1 relative">
                    <div onClick={()=> setShowContent(1)} className=" flex justify-start items-center gap-2 cursor-pointer">
                        <span className="text-[16px] font-semibold">Location</span>
                        <span><IoIosArrowDown /></span>
                    </div>
                    <p className="text-[12px] text-gray-500">LakShadWeep</p>
                    <div ref={selectCont1} className="absolute bottom-0 translate-y-[100%] left-0 bg-white rounded-md shadow-md p-[10px] hidden min-w-[200px] z-[10] ">
                        <div className="p-[7px] rounded-sm shadow-sm text-nowrap active:scale-95 cursor-pointer ">
                            Paris
                        </div>
                        <div className="p-[7px] rounded-sm shadow-sm text-nowrap active:scale-95 cursor-pointer ">
                            New york
                        </div>
                        <div className="p-[7px] rounded-sm shadow-sm text-nowrap active:scale-95 cursor-pointer ">
                            Rome
                        </div>
                    </div>
                </div>

                <div  className="flex flex-col gap-1 relative">
                    <div onClick={() => setShowContent(2)} className=" flex justify-start items-center gap-2 cursor-pointer">
                        <span className="text-[16px] font-semibold">Date</span>
                        <span><IoIosArrowDown /></span>
                    </div>
                    <p className="text-[12px] text-gray-500"> 2024-04-16 </p>
                    <div ref={selectCont2} className="absolute bottom-0 translate-y-[100%] left-0 bg-white rounded-md shadow-md p-[10px] hidden">
                        <input type="Date" />
                    </div>
                </div>

                <div  className="flex flex-col gap-1 relative">
                    <div onClick={()=>setShowContent(3)} className=" flex justify-start items-center gap-2 cursor-pointer">
                        <span className="text-[16px] font-semibold">Price</span>
                        <span><IoIosArrowDown /></span>
                    </div>
                    <p className="text-[12px] text-gray-500">40$</p>
                    <div ref={selectCont3} className="absolute bottom-0 translate-y-[100%] left-0 bg-white rounded-md shadow-md p-[10px] hidden">
                        <input type="number" />
                    </div>
                </div>




            </div>
            <div className="p-[7px] rounded-sm shadow-sm text-nowrap active:scale-95 cursor-pointer ">
                <button className="bg-[#FFA03F] text-white rounded-md flex justify-center items-center h-[50px] w-[50px]">
                    <BiSearch />
                </button>

            </div>
        </div>
    )
}

export default FilterInputs