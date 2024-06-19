// components/CampaignLaunch.js

import React from 'react';

const CampaignLaunch = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <div className="text-sm text-gray-500 mb-4">
          <p>Written by:</p>
          <p>Ohene Gyan Katahyie</p>
        </div>
        <h1 className="text-4xl font-bold mb-4">School Clean-Up Campaign Launch</h1>
        <p className="text-sm text-gray-500 mb-4">January 08, 2024</p>
        <a href="/all-news" className="text-red-500 underline mb-4 block">Back To All News</a>
        <p className="mb-4">
          We are launching our School Clean-Up Campaign in the Eastern Region. Students and teachers will join forces to clean their school premises, fostering a sense of responsibility and pride in maintaining a healthy learning environment!
        </p>
        <div className="mb-4">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-2xl font-bold mb-2">Objective:</h2>
        <p className="mb-4">
          The primary objective of the campaign is to promote environmental consciousness and create a healthier learning environment for students. By actively participating in cleaning their school premises, students will learn the importance of cleanliness and develop lifelong habits that contribute to a cleaner community.
        </p>
        <h2 className="text-2xl font-bold mb-2">Activities:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Cleaning Activities:</strong> Students and teachers will work together to clean classrooms, corridors, playgrounds, and surrounding areas.
          </li>
          <li>
            <strong>Education Sessions:</strong> Educational sessions will be conducted to raise awareness about the impact of cleanliness on health and well-being.
          </li>
          <li>
            <strong>Art and Awareness:</strong> Students will engage in creative activities such as drawing posters and slogans to promote cleanliness and environmental awareness.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CampaignLaunch;
