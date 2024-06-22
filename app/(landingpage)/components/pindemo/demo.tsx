"use client";
import { PinContainer } from "@/app/components/ui/3d-pin";
import React from "react";


export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Fancentral"
        href="https://twitter.com/fancentral"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
                       
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
