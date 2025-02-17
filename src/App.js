// ! CRUD operations
import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './crudcomponents/Home'
import Create from './crudcomponents/Create'
import Edit from './crudcomponents/Edit'
import { ToastContainer } from 'react-toastify'
export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:userid' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App