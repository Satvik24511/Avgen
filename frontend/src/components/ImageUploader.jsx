import {FileUp} from 'lucide-react';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';

const ImageUploader = () => {

    const inputRef = useRef(null);


    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if(response.status == 200){
                toast.success('Image uploaded successfully!');
                inputRef.current.value = null;
            }
            else{
                toast.error(response.error || 'Failed to upload image');
            }
            
            console.log(data);
        }
    }



  return (
    <div>
        <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-base-100 hover:bg-base-200">
            <FileUp className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-gray-600">Click to upload an image</span>
            <input id="image-upload" type="file" accept="image/*" className="hidden" ref={inputRef} onChange={handleFileChange}/>
        </label>
    </div>
  )
}

export default ImageUploader