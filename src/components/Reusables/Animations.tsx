'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

// Variant for text elements to fade in and slide up
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
} as const;


const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

// Variant for the image to fade in and slide from the right
const fadeInRight = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    x:0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
} as const;



const problems=[
  {
 problem:  '62% of African freelancers lose income due to delayed or blocked international payments'
  },
    {
 problem:  '70% of payments into Nigeria takes between 2-7 days to settle, with fees as high as 10% of the amount sent'
  },
    {
 problem:  '55% of business in emerging markets struggle with multiple wallets and confusing currency conversions,limiting their ability to grow globally'
  }
]

// The problem 
export const Theproblem=()=>{
  return(
  <div className="py-12 md:py-20 px-4">
     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-6xl mx-auto"
      >
        {/* ====== Left Column: The Problem Text ====== */}
        <motion.div
        
          variants={containerVariants}
          className="order-2 lg:order-1 flex flex-col gap-6"
        >
          <motion.h2 variants={fadeInUp} className="font-inter font-bold text-3xl md:text-4xl text-gray-800">
            The Problem
          </motion.h2>
          
          <motion.div variants={fadeInUp}>
            <h4 className="font-inter font-bold text-xl md:text-2xl text-gray-900">
              The Pain of Cross-Border Payments in Africa
            </h4>
            <p className="mt-4 max-w-prose font-inter font-normal text-base leading-relaxed text-gray-600">
              Sending money and doing business across borders should be simple. But today, freelancers, businesses, and individuals in Africa face unnecessary roadblocks that drain time, money, and opportunities.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            {problems.map((item, index) => (
              <motion.h2
                key={index}
                custom={index}
                variants={fadeInUp}
                className="text-gray-700 font-medium hover:text-[#9E71C2] transition-colors duration-300 relative p-3 flex items-center gap-3 group rounded-lg hover:bg-purple-50/50"
              >
                <span>
                  <Image src="/x.svg" alt="x-icon" width={24} height={24} />
                </span>
                {item.problem}
              </motion.h2>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="font-inter font-normal text-base text-gray-600 leading-relaxed border-l-4 border-[#9E71C2] pl-4">
            <p>
              The result: Money moves slower than messages. Slow transactions. High costs. Missed opportunities. Money moves, but not fast enough for the digital economy—and this is a great burden.
            </p>
          </motion.div>
        </motion.div>

        {/* ====== Right Column: The Image ====== */}
        <motion.div variants={fadeInRight} className="order-1 lg:order-2">
          <Image
            src={'/9132.jpg'}
            alt="People frustrated with payments"
            width={800}
            height={800}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}



// 

const Solutions=[
  {
 problem:  'One wallet, your base currency always.'
  },
    {
 problem:  'Instant settlement with Ai-powered conversion.'
  },
    {
 problem:  'Fair, transparent pricing with 0% hidden Fx fees.'
  }
]


// Our Solution 
export const OurSolution=()=>{



  useEffect(()=>{
  setInterval(()=>{

  },3000)

    
  })
  return(
    <motion.div >
         <motion.div  variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} className="grid md:grid-cols-2 justify-center items-center  gap-12">
 {/* image */}
<motion.div           variants={fadeInUp}
>
           <Image src={'/Our Solutions.svg'} alt="Bg" width={800} height={800}  />
</motion.div>     
      {/* The problem */}
      <div>
        <h2 className="font-inter font-bold text-[48px]  text-center lg:text-right  lg:mx-16 text-[#523E95]">Our Solution</h2>
        <motion.div className="my-6" variants={fadeInUp}>
          <h4 className=" font-inter font-[600] text-[32px] text-[#523E95] text-center">ziPay: Move Money Without Borders </h4>       
                <p  className="mt-6  font-inter font-[400] text-base leading-[148%] text-[16px]">ziPay is built to make money truly borderless.Moving money should be instant,transparent and fair. With just one wallet ID, you can send receive and experience auto money conversion instanly without juggling multiple currency wallets or waiting days for settlements. </p>

           </motion.div>

 <motion.div variants={fadeInDown} className=" font-inter font-normal text-base  text-gray-800">
        <p>With our app hitting the market ,ziPay will eliminate the pain of cross-border money movement:</p>
      </motion.div>

           <div className="my-4">
    {Solutions.map((solution, index) => (
        <motion.h2
          key={index}
          variants={fadeInUp}
          className="text-md text-gray-800 hover:text-[#9E71C2] transition-colors duration-300  relative "
        >
          {solution.problem}
        </motion.h2>
      ))}
 
 
    </div>



    {/* Percentages */}
<div className="justify-center items-center text-center grid  grid-cols-1 lg:grid-cols-3 gap-12 py-6">

{/* 8.3 */}
  <div>
    <h4 className="font-inter font-[400] text-[48px]">8.3%</h4>
<p className="text-[16px]">Avg.Remittance Fee in Africa</p>
  </div>



  {/* 65 */}
  <div>
   <h4 className="font-inter font-[400] text-[48px]">65%</h4>
<p className="text-[16px]">Users Rank Speed as #1 Priority</p>
  </div>


  {/* 8.3 */}
  <div>
     <h4 className="font-inter font-[400] text-[48px]">0%</h4>
<p className="text-[16px]">Hidden FX Markups on ziPay</p>
  </div>
</div>
      </div>





      {/*  */}
    </motion.div>

     
    </motion.div>
 
  )
}



// 
export const Timeline = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <div
      className="w-full bg-cover bg-center py-16 bg-gradient-to-b from-[#7E3BB4] to-[#5A2E91] bg-black/60"
    
    >
      {/* Overlay */}
      <div className=" w-full h-full py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 lg:px-20 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Section */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Launch Timeline
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg max-w-md text-gray-200"
            >
              Our app is still currently in development, but here are our
              launch timelines.
            </motion.p>
          </motion.div>

          {/* Private Beta Card */}
          <motion.div
            variants={cardVariants}
            className="rounded-xl p-8 flex flex-col justify-center shadow-xl bg-cover bg-center hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: "url('/Rectangle 56.png')" }}
          >
            <p className="text-2xl font-semibold mb-3">Private Beta Launch</p>
            <p className="text-base text-gray-100">
              Private Beta Launch planned for{" "}
              <span className="font-medium text-white">
                31st October, 2025.
              </span>
            </p>
          </motion.div>

          {/* Public Launch Card */}
          <motion.div
            variants={cardVariants}
            className="rounded-xl p-8 flex flex-col justify-center shadow-xl bg-cover bg-center hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: "url('/Rectangle 57.png')" }}
          >
            <p className="text-2xl font-semibold mb-3">App Public Launch</p>
            <p className="text-base text-gray-100">
              App Public Launch planned for
              <span className="font-medium text-white">[Month, Year].</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};



export const ProductAccess = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (      <><p className="text-center font-bold text-[48px] text-[#523E95]">Product Access</p><div className="flex items-center py-6 bg-white px-4 lg:px-6">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Product 1 - App Design */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative flex flex-col items-center justify-end rounded-xl overflow-hidden shadow-md"
        style={{
          backgroundImage: "url(/App.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="bg-white/80 w-full py-4">
          <p className="text-lg font-semibold">App Design in Figma</p>
          <button className="mt-3 bg-[#9E71C2] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition">
            View Product Design
          </button>
        </div>
      </motion.div>

      {/* Product 2 - App Test */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/iphone 15 Pro.svg"
            alt="iPhone"
            width={300}
            height={300}
            priority
            className="opacity-100" />
        </motion.div>
        <div>
          <p className="text-lg font-semibold">Test Our App Directly</p>
          <button className="mt-3 bg-[#9E71C2] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition">
            Test Our App Apk
          </button>
        </div>
      </motion.div>

      {/* Product 3 - Website */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative flex flex-col items-center justify-end rounded-xl overflow-hidden shadow-md"
        style={{
          backgroundImage: "url(/Macbook.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
        }}
      >
        <div className="bg-white/80 w-full py-4">
          <p className="text-lg font-semibold">See Website</p>
          <button className="mt-3 bg-[#9E71C2] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition">
            See Website
          </button>
        </div>
      </motion.div>
    </motion.div>
  </div></>
  );
};






export const WhyNow=() =>{

  // Why Now
  
  const problems=[
    {
   problem:  'Global remittance flows hit $860 billion in 2023 and continue to grow, especially in emerging markets.'
    },
      {
   problem:  'Cutting fees to 3% (the UN’s SDG target) would save families and businesses over $20 billion annually.'
    },
      {
   problem:  'In Africa alone, remittances exceeded $50 billion in 2022, yet remain burdened with the world’s highest costs.'
    }
  ]

  const textVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  } as const,
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  } as const,
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  } as const,
}
  return (
    <section className="overflow-hidden mt-32">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-inter font-[700] text-[48px] text-center text-[#523E95]"
      >
        Why Now?
      </motion.h2>

      <div className="grid md:grid-cols-2 justify-center items-center gap-12 mt-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/why.png"
            alt="Why Now Illustration"
            width={800}
            height={800}
            className="p-3"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="my-6">
            <h4 className="font-inter font-semibold text-[32px] text-[#523E95]">
              The Stakes Are Enormous
            </h4>
            <p className="mt-6 max-w-[579px] font-inter text-base leading-[148%] text-gray-800 font-[400]">
              Cross-border payments aren’t just financial transactions — they are
              lifelines for families, businesses, and entire economies. Yet
              outdated systems keep them slow, costly, and exclusionary. By
              solving this, ziPay is addressing one of the world’s largest and
              most urgent financial inefficiencies.
            </p>
          </div>

          {/* Problems */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-4"
          >
            {problems.map((problem, index) => (
              <motion.h2
                key={index}
                variants={itemVariant}
                className="font-[400] hover:text-[#9E71C2] transition-colors duration-300 relative flex items-center gap-3 p-2 text-[16px] leading-[150%]"
              >
                <Image src="/Check.svg" alt="check-icon" width={24} height={24} />
                {problem.problem}
              </motion.h2>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



export const Footer=()=> {
  return (
    <footer className="mt-24">
      {/* Main footer section */}
      <div className="bg-[#523E95] text-white flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-6">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center font-semibold text-lg">
            Z
          </div>
          <span className="font-semibold text-lg">ziPay</span>
          <span className="text-sm md:text-base font-medium">
            Redefining borderless payment in Africa
          </span>
        </div>

        {/* Right section */}
        <div className="text-sm md:text-base font-medium mt-4 md:mt-0">
          Contact Us:{" "}
          <a
            href="mailto:founders@getzipay.com"
            className="underline hover:text-[#F36F2B] transition-colors duration-300"
          >
            founders@getzipay.com
          </a>
        </div>
      </div>

      {/* Bottom orange bar */}
      <div className="bg-[#F36F2B] py-2 text-center text-white text-sm font-medium">
        ziPay — YC Exclusive Preview
      </div>
    </footer>
  );
}


export const Herosection = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-[140px] py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Heading + Subtext + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
             <Image
                      src="/iphone 15 Pro.svg"
                      alt="iPhone"
                      width={900}
                      height={900}
                      priority
                      className="opacity-100 z-10  lg:hidden visible"
                    />
          <motion.h1
            className="font-inter font-bold text-[48px] leading-[110%] text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            We’re{" "}
            <span className="text-[#9E71C2]">Building</span> the Future of
            Instant{" "}
            <span className="text-[#9E71C2]">
              Cross-Border Payments in Africa
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[579px] font-inter font-normal text-base leading-[148%] text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            ziPay is a fast and simple way to send and receive money across
            borders. With one wallet, instant conversions, and fair rates, we
            make global payments seamless, affordable, and stress-free for
            individuals and businesses alike.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.6 },
              },
            }}
          >
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#9E71C2] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition"
            >
              View Product Design
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="border border-black px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition"
            >
              Test Our App apk
            </motion.button>
          </motion.div>
        </motion.div>
        
      </motion.div>

      {/* Gentle floating animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </section>
  );
};
