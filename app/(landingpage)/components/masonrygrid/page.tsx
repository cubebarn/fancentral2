
import React from 'react'
import Image from 'next/image'


const MasonryGrid = () => {
  return (
   


<div className="grid grid-cols-4 gap-2">
        <div>
            <img className="h-auto max-w-300 rounded-lg" src="/images/adriana-lama.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-300 rounded-lg" src="/images/adriana-li.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/adriana-lama.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/content-creator3.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-300 rounded-lg" src="/images/adriana-lama.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-300 rounded-lg" src="/images/adriana-li.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/adriana-lama.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/content-creator3.jpg" alt="" />
        </div>
    </div>


  )
}

export default MasonryGrid