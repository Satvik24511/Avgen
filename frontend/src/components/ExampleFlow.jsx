import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExampleFlow = ({ animateIn = true }) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Animate in on mount or when animateIn becomes true
  useEffect(() => {
    if (animateIn) {
      setTimeout(() => setMounted(true), 100);
    } else {
      setMounted(false);
    }
  }, [animateIn]);

  const transformationPairs = [
    { original: '/transformation_show/pair1/000033.jpg', avatar: '/transformation_show/pair1/avatar_2.png' },
    { original: '/transformation_show/pair2/000318.jpg', avatar: '/transformation_show/pair2/avatar_44.png' },
    { original: '/transformation_show/pair3/000035.jpg', avatar: '/transformation_show/pair3/avatar_4.png' },
  ];

  const handleChange = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) =>
        dir === 'next'
          ? (prev + 1) % transformationPairs.length
          : (prev - 1 + transformationPairs.length) % transformationPairs.length
      );
      setAnimating(false);
    }, 250);
  };

  const { original, avatar } = transformationPairs[index];

  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <button
        aria-label="Previous example"
        onClick={() => handleChange('prev')}
        className="p-2 rounded-full hover:bg-base-200 transition"
        disabled={animating}
        tabIndex={0}
      >
        <ChevronLeft className="w-8 h-8 text-blue-400" />
      </button>
      <div
        className={`
          flex items-center gap-4 transition-all duration-700
          ${mounted && !animating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        `}
      >
        <img
          src={original}
          alt="Original"
          className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover rounded-full shadow transition-all duration-700"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-blue-400 drop-shadow"
          fill="none"
          viewBox="0 0 48 48"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 24h32m0 0l-8-8m8 8l-8 8" />
        </svg>
        <img
          src={avatar}
          alt="Avatar Example"
          className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover rounded-lg shadow transition-all duration-700"
        />
      </div>
      <button
        aria-label="Next example"
        onClick={() => handleChange('next')}
        className="p-2 rounded-full hover:bg-base-200 transition"
        disabled={animating}
        tabIndex={0}
      >
        <ChevronRight className="w-8 h-8 text-blue-400" />
      </button>
    </div>
  );
};

export default ExampleFlow;