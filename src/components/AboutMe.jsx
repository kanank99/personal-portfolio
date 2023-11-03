import React from 'react'
// import { useEffect } from 'react'
// import Kanan1 from '../assets/images/kanan1.png'
import Me from '../assets/images/me.JPG'
import CurvedText from '../assets/images/curved-text.png'

function AboutMe() {
    // useEffect(() => {
    //     const cursor = document.getElementById("cursor");
    //     document.documentElement.addEventListener("mousemove", (evt) => {
    //         const mouseX = evt.clientX + "px";
    //         const mouseY = evt.clientY + "px";
    //         const root = document.documentElement;
    //         cursor.style.setProperty("display", "inline-block");
    //         setTimeout(() => {
    //             root.style.setProperty("--cursorX", mouseX);
    //             root.style.setProperty("--cursorY", mouseY);
    //         }, 160);
    //     });

    //     document.documentElement.addEventListener("mouseleave", (evt) => {
    //         cursor.style.setProperty("display", "none");
    //     });
    // }, []);
    return (
        <div className='aboutme-container'>
            {/* <hr className='border-[#38bcf8] border-opacity-70 w-full mx-auto' /> */}
            <hr className='w-full' />
            <div className='h-[1000px] md:h-[650px] w-full flex items-center justify-center text-center md:text-start font-sans'>
                {/* <span id="cursor">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" stroke-width="0" fill="#f7f8fa" />
                </svg>
            </span> */}
                <div className='flex flex-col md:flex-row gap-10 justify-center items-center w-[1000px]'>
                    <h1 className='md:hidden text-3 uppercase text-lg font-semibold'>About Me</h1>
                    <div className='flex-1 relative'>
                        <img className='box-shadow-gray h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out rounded-3xl' src={Me} alt='Kanan Kontorovsky' />
                        <span className='hidden lg:block animate-rotate absolute -bottom-20 right-0 w-[15rem] h-[15rem] bg-white rounded-full'>
                            <img className='box-shadow-gray grayscale w-full h-full rounded-full absolute bottom-0 right-0 scale-[1.11]' src={CurvedText} alt='get-to-know-me' />
                            {/* <svg className='w-full h-full absolute bottom-0 right-0' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="M40.3,-54.5C52.1,-46.3,61.5,-34.1,67.8,-20.1C74.1,-6.1,77.3,10.7,72.9,23.9C68.5,37.1,56.5,46.6,43.1,54.6C29.7,62.6,14.8,69.1,-0.3,69.7C-15.4,70.3,-30.8,64.9,-43.8,55.3C-56.8,45.7,-67.4,31.9,-72.9,16.1C-78.4,0.3,-78.8,-17.5,-72.9,-31.9C-67,-46.3,-54.8,-57.1,-41.4,-65.3C-28,-73.5,-13.9,-79.1,0.8,-79.1C15.5,-79.1,31,-73.5,40.3,-64.1Z" transform="translate(100 100)" />
                            </svg> */}
                        </span>
                        <span className='hidden lg:block absolute top-[340px] left-[340px] text-3xl scale-[2]'>💻</span>
                    </div>
                    <div className='flex-1 h-full p-4 md:p-0'>
                        <h1 className='hidden md:block text-3 uppercase text-lg font-semibold mb-[1rem]'>About Me</h1>
                        <h2 className='text-[#f7f7f7] text-2xl font-bold mb-[1rem]'>A dedicated Front-end Developer
                            based in Columbia, South Carolina 📍</h2>
                        <p className='text-base font-medium text-2'>I specialize in creating immersive, user-centric experiences that showcase the full potential of React. I'm currently working as a Front-End Developer at <a href="https://www.vinera.agency/" target="_blank" rel="noreferrer" className='text-3 hover:text-[#f7f7f7]'>Vinera AI</a>, a startup that's bringing the power of automation to the masses. I'm proud to have earned my degree in Web Development from <a href="https://www.midlandstech.edu/" target="_blank" rel="noreferrer" className='text-3 hover:text-[#f7f7f7]'>Midlands Technical College</a>, which equipped me with the foundational knowledge and skills to tackle complex web challenges. My education, combined with my hands-on experience, allows me to deliver innovative solutions tailored to each project's unique needs. Whether it's crafting responsive layouts or optimizing performance, <span className='text-3 hover:text-[#f7f7f7]'>my goal is to always exceed client expectations</span> and create engaging digital experiences.</p>
                    </div>
                </div>
            </div>
            <hr className='w-full' />
        </div>
    )
}

export default AboutMe