import { FileUp } from 'lucide-react';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const ImageUploader = ({ setIsLoading, setResponseImage }) => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.error('Please select an image first');
      return;
    }
    setIsLoading?.(true);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.status === 200) {
        toast.success('Image uploaded successfully!');
        setResponseImage?.(data.image);
        setSelectedFile(null);
        if (inputRef.current) {
          inputRef.current.value = null;
        }
      } else {
        toast.error(data.error || 'Failed to upload image');
      }
      console.log(data);
    } catch (err) {
      toast.error('An error occurred during upload', err.message);
      console.error('Upload error:', err);
    } finally {
      setIsLoading?.(false);
    }
  };

  return (
    <div>
      {selectedFile ? (
        <div className="flex flex-col items-center">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              onClick={() => {
                setSelectedFile(null);
                inputRef.current.value = null;
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-base-100 hover:bg-base-200"
        >
          <FileUp className="w-12 h-12 text-gray-400 mb-2" />
          <span className="text-gray-600">
            Click to upload an image
          </span>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange}
          />
        </label>
      )}
    </div>
  );
};

export default ImageUploader;