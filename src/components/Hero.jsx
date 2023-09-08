import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="gradient-wrapper">
      <motion.div className='blackBg absolute top-0 h-[100vh] w-[100vw] bg-[#060606] z-40'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        onAnimationComplete={() => // Remove blackBg from the DOM after the animation is complete
          document.querySelector(".blackBg").remove()
        }

      />
      <div className="bg-grid h-[100svh] w-full flex items-center justify-center">
        <div className="hero-container text-left w-[824px] lg:w-[1004px]">
          <div className="hero-text flex flex-col items-center justify-center md:justify-normal md:items-start  gap-2 lg:gap-4 sm:p-8">
            <h1 className="font-[500] tracking-tight text-[#38bcf8]">
              Hi, my name is
            </h1>
            <AnimatedTitle
              text="Kanan Kontorovsky."
              color="text-[#f7f7f7]"
              threshold={0.5}
              duration={0.8}
            />
            <AnimatedTitle
              text="I build for everyone"
              color="text-white/60"
              threshold={1}
              duration={3}
            />
            <p className=" text-sm text-center md:text-start sm:text-lg lg:text-xl lg:w-[90%] text-[#f7f7f7] mt-6 font-light leading-6">
              I specialize in
              <span className="text-3 font-[500]"> React Front-End Development</span>,
              where I bring web interfaces to life with creativity and
              precision. My focus is on creating immersive, user-centric
              experiences that showcase the full potential of React.
            </p>
            <div class="mt-5 relative block isolate self-center md:self-start">
              <a className="anchor cursor-none" href="https://www.flowchef.co/">
                <div class="button font-bold">Get In Touch</div>
                <div class="button_bg-grad"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
