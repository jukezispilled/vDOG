export default function App() {
  return (
    <div className="bg-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8 w-[95%] bg-zinc-200">
        <header className="grid">
          <div className="w-full flex justify-center">
            <img src="h.png" className="mb-6 rounded-xl w-[100%]"></img>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-36 md:size-40 relative overflow-hidden rounded-full">
              <img src="pov.png" alt="User" className="w-full h-full" />
            </div>
            <div className="md:space-y-0 md:-mt-1">
              <h1 className="text-xl font-extrabold md:text-5xl">POV Cat</h1>
              <p className="text-sm md:text-base text-gray-600">@POVCat • 599K subscribers</p>
              <p className="text-xs md:text-base text-gray-600">28 years old. Entreprenuer. Sharing my POV on things.</p>
              <p className="text-xs md:text-base text-gray-600 pb-1">CA: updating...</p>
              <button className="bg-red-600 py-2 px-3 text-base md:text-lg rounded-full text-white font-semibold">Subscribe</button>
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
            image="/i8.png" 
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
            likes="300" 
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
            likes="1.5K" 
            dislikes="50"
            image="/i5.png" 
          />
          <VideoCard 
            title="All White Recap" 
            views="1.1M" 
            time="1 month ago" 
            likes="1.5K" 
            dislikes="50"
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