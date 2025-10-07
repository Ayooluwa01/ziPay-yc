import { Navbar } from "@/components/Reusables/Navbar";
import Image from "next/image";
import React from "react";
import { Footer, Herosection, OurSolution, ProductAccess, Theproblem, Timeline, WhyNow } from "@/components/Reusables/Animations";

export default function Homepage() {
  return (
    <div className="bg-cover bg-center relative" >
      {/* <Image src={'/Hero BG.png'} alt="Bg" width={1800} height={1800} className="absolute -z-10" /> */}

<div>
  <Navbar />
  <div className="grid lg:grid-col-2 grid-cols-1 mt-24"> 
 <Herosection />             

       {/* Right: Hero Image */}
     
        <div className="absolute z-30 right-0 hidden lg:block">
          <Image
            src="/iphone15.png"
            alt="iPhone"
            width={700}
            height={700}
       
            className="opacity-100 z-10  "
          />
        </div>
</div>
</div>
           <Image src={'/Left ring Vector.svg'} alt="Bg" width={90} height={120} className="absolute -z-10 left-0  opacity-8 lg:opacity-100"  />

           <Image src={'/Right ring Vector.svg'} alt="Bg" width={90} height={120} className="absolute z-40 lg:-z-10 right-0 opacity-8 lg:opacity-100"  />

    
       {/* The Problem Section */}
      <div className="px-4 lg:p-[100px]" id="problem"><Theproblem /></div>
      <div className="px-4  lg:px-20" id="solution">
        <OurSolution />
      </div>
         <div className="px-4  lg:px-20" id="why-now">
       <WhyNow />
      </div>

       <div className="py-12 md:py-20 " id="timeline">
       <Timeline/>
      </div>

          <div className="py-6 md:py-10 px-4  lg:px-20" id="contact">
   
   <ProductAccess />
      </div>


      <div>
        <Footer />
      </div>
    </div>
  );
}









