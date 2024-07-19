import React from 'react';
import ".././globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

const newsItems = [
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  {
    id: 1,
    title: "Community Clean-Up at Jamestown",
    date: "April 26, 2024",
    image: "../news.svg",
    description: "BuzStopBoys organized a successful community clean-up at Jamestown...",
  },
  
  // Add more news items as needed
];
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: "url('../bb4.svg')" }}
      >
        <div className="bg-transparent text-white  md:p-10 lg:p-20 absolute  left-0 w-full md:w-3/4 lg:w-3/4 ">
        <h1 className="font-bold  md:text-4xl lg:text-6xl leading-tight mb-4  lg:-mt-16">
          News & Announcements
          </h1>
          <p className="text-base md:text-lg lg:text-sm mb-3">
          Stay up-to-date with the latest news and announcements from BuzStopBoys. Here, you will
          <br className="hidden md:block" />
          find information on our recent projects, upcoming events, partnerships, and community
          <br className="hidden md:block" />
          initiatives. Join us as we share stories of impact, progress, and our ongoing efforts to create
          <br className="hidden md:block" />
          cleaner, healthier environments for all.
          
          </p>
          


        </div>
      </div>
     
      <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl md:text-4xl font-semibold mb-6">Latest News</h2>
        <Link href="/Announcements/Sub" passHref>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={news.image} alt={news.title} width={400} height={250} className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                <p className="text-gray-500 text-xs">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
        </Link>
      </div>
    </section>
    <section className="bg-black text-white py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl md:text-7xl font-bold mb-5">Latest on Social Media</h2>
    <div className="bg-white h-px w-full mb-16" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="space-y-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-48 h-48 relative overflow-hidden">
              <img 
                src={`/sm${index}.svg`} 
                alt={`Social Media Image ${index}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">BustStopBoys organized a successful community cleanup in Jamestown, Accra. Volunteers gathered to clean the streets, educate residents on environmental ...</p>
              <div className="flex items-center justify-between mt-4">
                <button className="bg-transparent text-white text-lg flex items-center gap-2">
                  <img src={index === 3 ? "/igicon.png" : "/xicon.png"} alt="" width={20} height={20} className="ml-2" /> more
                </button>
                <p className="text-gray-400">June 3, 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start space-y-4">
      <div className="relative w-full aspect-video overflow-hidden rounded-md shadow-lg group">
  <img 
    src="/youthumb.webp" 
    alt="Video thumbnail" 
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <button className="bg-black bg-opacity-50 text-white rounded-full p-4 transition-transform transform group-hover:scale-110">
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4l12 6-12 6z" />
      </svg>
    </button>
  </div>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/your-video-id"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
        <p className="text-lg font-semibold">We are excited to announce that Roads Minister Asenso-Boakye has donated GHS100,000 to support the BustStopBoys initiative. This generous contribution will help us expand our cleaning efforts and reach more communities in need. We are grateful for the support and look forward to continuing our mission with strengthened resources.</p>
        <div className="flex items-center justify-between w-full">
          <button className="bg-transparent text-white text-lg flex items-center gap-2">
            <img src="/igicon.png" alt="" width={20} height={20} className="ml-2" /> Buzstopboys on Youtube
          </button>
          <p className="text-gray-400">November 12, 2022</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
<div className="bg-white py-8 md:py-16">
  <div>
  <div className="container mx-auto">
    
    
    <p className='text-black font-bold text-7xl  text-center md: mb-8'>Upcoming Events</p>

  </div>
</div>
<div className="w-full bg-cover bg-center relative civil-responsibility-bg">
        <img src='../upcoming.svg' className='w-full' /> 
        
      </div>
<div className="w-11/12 m-7 bg-white px-4 md:px-0 flex flex-col md:flex-row justify-between items-center text-black">
  <div className="mb-8 md:mb-0 md:w-2/3">
    <div className="font-bold lg:text-6xl md:text-4xl mb-4">Launch of the School     <br className="hidden md:block" />Clean-Up Campaign</div>
    <div className='lg:text-lg'>
      Join <span className="font-bold">BuzStopBoys</span> for a community clean-up at Mallam Junction.<br/> Volunteers will work together to clean the area and raise awareness <br/>about the importance of environmental health. Cleaning supplies and <br/>refreshments will be provided.
    </div>
  </div>
  <div className="md:w-1/3 lg:text-right">
    <div className="font-bold lg:text-5xl md:text-3xl mb-4">Location: Mallam <br/>Junction, Accra</div>
    <div className='lg:text-lg'>Date: April 26, 2024</div>
    
  <div className="flex items-center justify-end mt-7 font-bold">
    Next
    <img src="/rightblackicon.png" alt='' width={10} height={10} className='ml-2' />
  </div>
  </div>

</div>


</div>
    </>
  )
}
