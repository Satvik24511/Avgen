import React from 'react';

const ResponseImage = ({ image, onBack }) => {
  if (!image) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'avatar.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <img
        src={image}
        alt="Generated Avatar"
        className="w-64 h-64 object-cover rounded-xl shadow-lg"
      />
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold shadow hover:bg-green-700 transition"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ResponseImage;