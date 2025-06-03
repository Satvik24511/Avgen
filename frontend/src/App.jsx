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
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <div>
          <p>Made with ❤️ by <a href="https://github.com/Satvik24511">Satvik Mittal</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
