import Image from "next/image";
import Hero from "./components/hero/page";
import { FloatingNav } from "../components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

import { ThreeDCardDemo } from "./components/threedcard";
import Grid from "./components/grid/page";
import { LayoutGrid } from "../components/ui/layout-grid";
import  WobbleCardDemo  from "./components/wobble/page";
import Footer from "./components/footer/page";
import { TypewriterEffectSmoothDemo } from "./components/typewritereffect";
import GridOver from "./components/gridmiddle/page";
import Design from "./components/design/page";
import MasonryGrid from "./components/masonrygrid/page";




export default function Landingpage() {
  return (
   <main className="relative bg-black-100 flex
   justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon:<FaHome/>}
      ]}/>
    <Hero />
    <WobbleCardDemo />
    <TypewriterEffectSmoothDemo />
    <MasonryGrid />
     <Design />
      
    <Grid />
    <Footer />
    </div>
   
   </main>
  );
}
