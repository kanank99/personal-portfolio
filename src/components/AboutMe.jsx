import React from 'react'
// import { useEffect } from 'react'
import Kanan1 from '../assets/images/kanan1.png'

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
        <>
            <hr className='border-[#38bcf8] border-opacity-70 w-full mx-auto' />
            <div className='bg-[#0f172a] h-[1000px] md:h-[650px] w-full flex items-center justify-center text-center md:text-start font-sans'>
                {/* <span id="cursor">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" stroke-width="0" fill="#f7f8fa" />
                </svg>
            </span> */}
                <div className='flex flex-col md:flex-row gap-10 justify-center items-center w-[1000px]'>
                    <h1 className='md:hidden text-[#38bcf8] uppercase text-lg font-semibold'>About Me</h1>
                    <div className='flex-1 relative'>

                        <img className='h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out rounded-3xl' src={Kanan1} alt='Kanan Kontorovsky' />
                    </div>
                    <div className='flex-1 h-full p-4 md:p-0'>
                        <h1 className='hidden md:block text-[#38bcf8] uppercase text-lg font-semibold mb-[1rem]'>About Me</h1>
                        <h2 className='text-[#f7f7f7] text-2xl font-bold mb-[1rem]'>A dedicated Front-end Developer
                            based in Columbia, South Carolina 📍</h2>
                        <p className='text-base font-medium text-2'>I specialize in creating immersive, user-centric experiences that showcase the full potential of React. I'm currently working as a Front-End Developer at <a href="https://www.vinera.agency/" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>Vinera AI</a>, a startup that's bringing the power of automation to the masses. I'm proud to have earned my degree in Web Development from <a href="https://www.midlandstech.edu/" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>Midlands Technical College</a>, which equipped me with the foundational knowledge and skills to tackle complex web challenges. My education, combined with my hands-on experience, allows me to deliver innovative solutions tailored to each project's unique needs. Whether it's crafting responsive layouts or optimizing performance, <span className='text-[#38bcf8] hover:text-[#f7f7f7]'>my goal is to always exceed client expectations</span> and create engaging digital experiences.</p>
                    </div>
                </div>
            </div>
            <hr className='border-[#38bcf8] border-opacity-70 w-full mx-auto' />
        </>
    )
}

export default AboutMe