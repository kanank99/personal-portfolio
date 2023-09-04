import React from "react";

function Hero() {
  return (
    <div className="gradient-wrapper">
      <div className="bg-grid h-[100svh] w-full flex items-center justify-center">
        <div className="hero-container text-left w-[824px]">
          <div className="hero-text flex flex-col gap-4">
            <h1 className="text-base tracking-tight text-[#38bcf8]">
              Hi, my name is,
            </h1>
            <h1 className="text-7xl font-extrabold text-white tracking-wide mt-2">
              Kanan Kontorovsky.
            </h1>
            <h2 className="text-7xl font-extrabold text-white/60">
              I build for everyone
            </h2>
            <p className="text-lg font-medium w-[90%] text-[#f7f7f7] mt-6">
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products at{" "}
            </p>
            <div class="frame">
              <a className="anchor" href="https://www.flowchef.co/">
                <div class="button font-bold text-[#38bcf8]">Get In Touch</div>
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
