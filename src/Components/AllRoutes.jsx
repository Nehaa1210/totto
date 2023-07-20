

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Books from './Books'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<Logout/>}/>
            <Route path = "/books" element = {<Books/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes