import React from 'react';
import ".././globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const images = [
    { src: '../bb5.svg', size: 'small' },
    { src: '../bb5.svg', size: 'small' },
    { src: '../bb5.svg', size: 'small' },
    { src: '../bb5.svg', size: 'small' },
    { src: '../bb5.svg', size: 'large' },
    { src: '../bb5.svg', size: 'small' },

  ];

  const videos = [
    { src: "https://www.youtube.com/embed/your-video-id", size: 'large' ,title:"YouTube video" },
    { src: "https://www.youtube.com/embed/your-video-id", size: 'small',title:"YouTube video" },
    { src: "https://www.youtube.com/embed/your-video-id", size: 'small',title:"YouTube video" },
    { src: "https://www.youtube.com/embed/your-video-id", size: 'small' ,title:"YouTube video"},
    { src: "https://www.youtube.com/embed/your-video-id", size: 'small' ,title:"YouTube video"},
    { src: "https://www.youtube.com/embed/your-video-id", size: 'small',title:"YouTube video" },

  ];

  return (
    <>
  <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: "url('../bb5.svg')" }}
      >
        <div className="bg-transparent text-white  md:p-10 lg:p-20 absolute -bottom-6 left-0 w-full md:w-3/4 lg:w-3/4 ">
          <h1 className="font-bold  md:text-4xl lg:text-3xl leading-tight mb-4  lg:-mt-16">
          Gallery
          </h1>
          <p className="text-base md:text-lg lg:text-sm mb-3">
          Welcome to the BuzStopBoys Gallery, where you can explore visual stories of our impactful 
          <br className="hidden md:block" />
          initiatives and community engagements. Discover the transformation of unclean spaces into
          <br className="hidden md:block" />
          clean, vibrant environments through our before-and-after images. Get inspired by the 
          <br className="hidden md:block" />
          dedication of our volunteers and the positive impact we are making in communities across 
          <br className="hidden md:block" />
          Ghana. Scroll through our gallery to witness the power of collective action and join us in our
          <br className="hidden md:block" />
          </p>   mission to create cleaner, healthier environments for all.
          


        </div>
      </div>
     




      <section className="w-full bg-white flex justify-center">
        <div className="text-center bg-white mx-4">
       
        <div className="flex justify-center"> {/* Wrapping the button in a flex container */}
      <Link href="/contact" passHref>
        <button className="bg-black gap-9 text-green-500 px-4 py-3 rounded-full border border-white hover:bg-green-700 text-lg flex items-center justify-center mt-4">
        Videos 
          <Image src="/dropdown.png" alt='' width={20} height={20} className='ml-2' />
        </button>     
      </Link>
    </div>
        </div>
      </section>

      <section className="py-12 bg-white">
      <div className="container mx-auto">
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } ${image.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''} ${
                image.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''
              }`}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg ${
                video.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } ${video.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''} ${
                video.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''
              }`}
            >
              <iframe
                src={video.src}
                title={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full bg-white flex justify-center ">
        <div className="text-center bg-white mx-4">
       
          <Link href="/contact" passHref>
            <button className="bg-black text-green-500 px-6 py-2 rounded-full border border-white hover:bg-green-700 mt-8 text-lg">
Load More
            </button>
          </Link>
        </div>
      </section>
      
      <section className="w-full bg-white flex justify-center py-8">
        <div className="text-center bg-white mx-4">
      
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black mt-4">
          Join us in the mission to create a cleaner and<br className="hidden md:block" /> healthier environment!
          </h1>
          <p className="mt-4">
 
          Your support can make a significant impact. Together, let’s take meaningful steps towards<br className="hidden md:block" />
          sustainability, reducing waste, and preserving our planet for future generations. Support us today<br className="hidden md:block" />
          and be a part of the positive change our world needs.




          </p>
          <Link href="/contact" passHref>
            <button className="bg-black text-green-500 px-6 py-2 rounded-full border border-white hover:bg-green-700 mt-8 text-lg">
            Make A Donation
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
