import React, { createContext, useState } from 'react'

export const Booksvalue = createContext()
function Bookval({children}) {
    const [books, setbooks] = useState([])
    const [userlogin, setuserlogin] = useState({
      user: null,
      mail: null,
      pass: null
  })
    const [watch, setWatch] = useState({
        name: "",
        instructor: "",
        video_id: "",
        price: "",
        img: ""
    })
  return (
    <Booksvalue.Provider value={{books , setbooks ,watch, setWatch,userlogin,setuserlogin}}>
        {children}
    </Booksvalue.Provider>
  )
}

export default Bookval