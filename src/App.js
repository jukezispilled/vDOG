import React, { useState } from 'react';

export default function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="bg-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8 w-[95%] bg-zinc-200">
        <header className="grid">
          <div className="w-full flex justify-center">
            <img src="he.png" className="mb-6 rounded-xl w-[100%]"></img>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-48 md:size-40 relative overflow-hidden rounded-full">
              <img src="pov.png" alt="User" className="w-full h-full" />
            </div>
            <div className="md:space-y-0 md:-mt-1">
              <div className="flex space-x-3">
                <h1 className="text-xl font-extrabold md:text-5xl">POV Cat</h1>
                <div className='flex justify-center items-center z-10'>
                  <a href="https://x.com/" className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-4 md:size-6 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
                      <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                    </svg>
                  </a>
                  <a href="https://t.me/" className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-4 md:size-6 md:hover:scale-105 transition ease-in-out duration-150' fill="#29A0DA" viewBox="0 0 50 50">
                      <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600">@POVCat • 599K subscribers</p>
              <p className="text-xs md:text-base text-gray-600">28 years old. Entreprenuer. Sharing my POV on things.</p>
              <p className="text-xs md:text-base text-gray-600 pb-1">CA: updating...</p>
              <button 
                className={`py-2 px-3 text-base md:text-lg rounded-full text-white font-semibold transition-colors duration-300 ${
                  isSubscribed ? 'bg-gray-500 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                }`}
                onClick={handleSubscribe}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <VideoCard 
            title="HISTORY AT UFC" 
            views="1.2M" 
            time="2 days ago" 
            likes="1.2K" 
            dislikes="100"
            image="/i1.png" 
          />
          <VideoCard 
            title="Lakers Game Courtside" 
            views="1.5M" 
            time="5 days ago" 
            likes="500" 
            dislikes="20"
            image="/i7.png" 
          />
          <VideoCard 
            title="Cigar Talk w/ Tates!" 
            views="12M" 
            time="10 days ago" 
            likes="979" 
            dislikes="10"
            image="/i.png" 
          />
          <VideoCard 
            title="Penthouse Tour" 
            views="7M" 
            time="1 week ago" 
            likes="1.5K" 
            dislikes="50"
            image="/i6.png" 
          />
          <VideoCard 
            title="10 Warren Buffet Investing Tips!" 
            views="1.8M" 
            time="2 weeks ago" 
            likes="2.5K" 
            dislikes="200"
            image="/i3.png" 
          />
          <VideoCard 
            title="First Time Flying Private" 
            views="3M" 
            time="2 weeks ago" 
            likes="1.5K" 
            dislikes="50"
            image="/i4.png" 
          />
          <VideoCard 
            title="Living 24hrs Like Jordan Belfort" 
            views="2M" 
            time="1 month ago" 
            likes="1.8K" 
            dislikes="30"
            image="/i5.png" 
          />
          <VideoCard 
            title="All White Recap" 
            views="1.1M" 
            time="1 month ago" 
            likes="1.6K" 
            dislikes="57"
            image="/i2.png" 
          />
        </div>
      </div>
    </div>
  );
}

function VideoCard({ title, views, time, likes, dislikes, image }) {
  return (
    <div className="relative overflow-hidden rounded-lg group border bg-white md:hover:scale-[103%] transition ease-in-out duration-150">
      <a href="#" className="absolute inset-0 z-10">
        <span className="sr-only">View video</span>
      </a>
      <img
        src={image}
        alt="Video Thumbnail"
        width={400}
        height={225}
        className="w-full h-[225px] md:h-[180px] object-cover"
      />
      <div className="p-3 bg-white">
        <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{views} views &middot; {time}</p>
        <div className="mt-2 flex items-center gap-2">
          <ThumbsUpIcon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">{likes}</span>
          <ThumbsDownIcon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">{dislikes}</span>
          <ShareIcon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">Share</span>
        </div>
      </div>
    </div>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}