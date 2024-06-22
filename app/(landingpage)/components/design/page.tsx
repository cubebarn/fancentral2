'use client'


import { ThreeDCardExample } from '@/app/snippets/3d-card-snippet'
import { EvervaultCardSnippet } from '@/app/snippets/evervault-card'
import { motion } from 'framer-motion'
import React from 'react'

const Design = () => {
  return (
    <div className='text-white'>
       <div className='p-4 mx-auto relative z-10  w-full pt-20 md:pt-20 px-2'>
        <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent
        bg-gradient-to-b  from-purple-500 to bg-sky-200 bg-opacity-50'>
        Join Our platform <br /> That works!
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
        We create stunning visuals for your brand. From logos to social media
        posts, we&apos;ve got you covered.
      </p>
       </div>
    </div>
  )
}

export default Design