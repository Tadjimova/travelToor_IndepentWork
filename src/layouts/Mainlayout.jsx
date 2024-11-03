import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'


const Mainlayout = () => {
    return (
        <div className='font-Inter'>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer/>
            
        </div>

    )
}

export default Mainlayout