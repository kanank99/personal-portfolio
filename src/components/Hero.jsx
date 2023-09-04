import React from "react";

function Hero() {
  return (
    <div className="gradient-wrapper">
      <div className="bg-grid h-[100svh] w-full flex items-center justify-center">
        <div className="hero-container text-left w-[824px]">
          <div className="hero-text flex flex-col gap-2 lg:gap-4 p-8">
            <h1 className="text-base tracking-tight text-[#38bcf8]">
              Hi, my name is
            </h1>
            <h1 className="text-[2rem] md:text-6xl leading-10 lg:text-7xl font-extrabold text-white tracking-wide mt-2 whitespace-nowrap">
              Kanan Kontorovsky.
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white/60 whitespace-nowrap">
              I build for everyone
            </h2>
            <p className="text-lg lg:w-[90%] text-[#f7f7f7] mt-6 font-light leading-6">
              I specialize in
              <span className="text-3"> React Front-End Development</span>,
              where I bring web interfaces to life with creativity and
              precision. My focus is on creating immersive, user-centric
              experiences that showcase the full potential of React.
            </p>
            <div class="frame mt-5">
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
