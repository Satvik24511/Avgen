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
      <footer className="footer footer-center p-2 bg-base-100/30 backdrop-blur-sm text-base-content text-sm font-light border-t border-base-200/40" style={{
        background: "linear-gradient(to top, rgba(40,40,50,0.12), rgba(40,40,50,0))"
      }}>
        <div>
          <p>Made with ❤️ by <a href="https://github.com/Satvik24511">Satvik Mittal</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
