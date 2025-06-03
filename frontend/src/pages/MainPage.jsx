import React from 'react'
import ImageUploader from '../components/ImageUploader.jsx'

const MainPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl shadow-lg p-6 bg-base-50 w-full max-w-md">
        <ImageUploader />
      </div>
    </div>
  )
}

export default MainPage