"use client"

import { useState, useRef } from "react";


export default function YoutubeVideo() {
  const [isPause , setIsPasused] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
    return (
<div className=" grid grid-flow-col-1  grid-flow-row-4 gap-y-20  justify-center items-center">
  

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
<div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Meet jasmine</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur🔥🔥🔥🔥 adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <p className="text-sm text-whiteflex items-center">
        <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>


      <video className="w-full" ref={vidRef} controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
              </video>
      
    </div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
<div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Hola Da Hottes</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur 🔥🔥🔥🔥adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <p className="text-sm text-white flex items-center">
        <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>


      <video className="w-full" ref={vidRef} controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
              </video>
      
    </div>
  
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
<div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur 🔥🔥🔥🔥adipisicing elit.@gdick Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <p className="text-sm text-white flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>


      <video className="w-full" ref={vidRef} controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
              </video>
      
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
<div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <video className="w-full" ref={vidRef} controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
              </video>
      
    </div>
</div>

    );
  }


  