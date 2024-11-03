import React, { useReducer} from 'react'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Book from './pages/Book'
import { MainContext } from './context/context'
import { initialState, reducer } from './context/reducer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailDestination from './pages/DetailDestination'


const App = () => {
  const [state, dispatch]= useReducer(reducer, initialState)



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>
      <Route index element = {<Home/>}/>

      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/destinations/:slug' element={<DetailDestination/>} />
      

     </Route>
    )
  )
  return (
  <MainContext.Provider value={{state, dispatch}}>
     <RouterProvider router ={router}/>
  </MainContext.Provider>
  )
}

export default App