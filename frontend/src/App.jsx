import {Routes, Route, Navigate} from "react-router";
import MainPage from "./pages/MainPage.jsx";

function App() {

  return (
    <div className='h-screen' data-theme="dracula">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  )
}

export default App
