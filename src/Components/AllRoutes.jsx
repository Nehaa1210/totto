

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Books from './Books'
import Mycourse from './Mycourse'
import PlayVideo from './PlayVideo'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<Logout/>}/>
            <Route path = "/books" element = {<Books/>}/>
            <Route path = "/courses" element = {<Mycourse/>}/>
            <Route path = "/watch" element = {<PlayVideo/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes