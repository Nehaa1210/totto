

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<Logout/>}/>
            
        </Routes>
    </div>
  )
}

export default AllRoutes