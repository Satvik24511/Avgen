import {Routes, Route, Navigate} from "react-router";
import MainPage from "./pages/MainPage.jsx";
import ImagePage from "./pages/ImagePage.jsx";

import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='h-screen' data-theme="dracula">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/image/:id" element={<ImagePage/>}/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App
