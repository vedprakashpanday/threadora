import { useState } from 'react'
import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from './components/home'
import Shop from './components/shop';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Shop/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
