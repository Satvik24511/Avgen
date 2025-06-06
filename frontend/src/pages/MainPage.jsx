import ImageUploader from '../components/ImageUploader.jsx'

const GITHUB_REPO_URL = 'https://github.com/your-username/your-repo';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-base-200 relative overflow-x-hidden overflow-y-hidden">
      <div className="relative" style={{ paddingTop: '96px' }}>
        <header className="w-full bg-base-100/70 backdrop-blur-md shadow-none fixed top-0 left-0 right-0 z-30 transition-all">
          <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg select-none">
              Avgen
            </span>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black"
              aria-label="GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
          </div>
        </header>
        <div className="fixed top-0 left-0 w-full bg-base-100 z-20" style={{ height: '9px' }} />
        <img
          src="/avatar_27.png"
          alt="Avatar"
          className="absolute right-0 z-0 w-[600px] h-[600px] max-w-none max-h-none rounded-full object-cover pointer-events-none select-none opacity-30 blur-sm"
          style={{
            top: '96px',
            transform: 'translateY(-20%) translateX(20%)',
          }}
        />
        <img
          src="/avatar_15.png"
          alt="Avatar"
          className="absolute left-0 bottom-0 z-0 w-[600px] h-[600px] max-w-none max-h-none rounded-full object-cover pointer-events-none select-none opacity-30 blur-sm"
          style={{
            top: '96px',
            transform: 'translateY(30%) translateX(-25%)',
          }}
        />
      </div>
      <main className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Transform Your Photo into a Unique Avatar!
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-semibold drop-shadow-sm">
            Upload your photo, get a personalized avatar in seconds.
          </p>
        </div>
        <div className="rounded-xl shadow-lg p-6 bg-base-50 w-full max-w-md mt-8">
          <ImageUploader />
        </div>
      </main>
    </div>
  )
}

export default MainPage