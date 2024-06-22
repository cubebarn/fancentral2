import React from 'react'

import { ThreeDCardDemo } from '../threedcard'
import  VideoComponent  from '@/app/components/ui/video-component'


const GridOver = () => {
  return (
    
<div className="grid gap-4 grid-cols-2">
  <div><ThreeDCardDemo/></div>
  <div><VideoComponent/> </div>
 
</div>


  )
}

export default GridOver