import { AnimatedPinDemo } from '@/app/(landingpage)/components/pindemo/demo'
import  SignupFormDemo  from '@/app/(landingpage)/components/signup/page'
import { PinContainer } from '@/app/components/ui/3d-pin'
import React from 'react'

const Signup = () => {
  return (
    <section className="h-screen">
  <div className="h-full">
   
    <div
      className="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
      <AnimatedPinDemo />
      </div>

  
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        
        <SignupFormDemo />
          
      </div>
    </div>
  </div>
</section>
  )
}

export default Signup