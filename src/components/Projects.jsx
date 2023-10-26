import React from 'react'
import VineraScreen from '../assets/images/vineraScreen.png'

function Projects() {
    return (
        <div className='py-20 px-10 bg-[#0f172a] w-full flex items-center justify-center font-display'>
            <div className='w-[1000px] flex flex-col justify-center'>
                <div className='mb-10'>
                    <h1 className='text-[#38bcf8] uppercase text-lg font-semibold mb-[1rem]'>Portfolio</h1>
                    <h2 className='text-[#f7f7f7] text-2xl font-bold mb-[1rem]'>Each project is a unique piece of development 🧩</h2>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col lg:flex-row bg-[#1e293b] box-shadow-gray p-5 rounded-2xl gap-5'>
                        <div className='box-shadow-gray rounded-2xl p-[1px]'>
                            <img className='w-[50rem] rounded-2xl' src={VineraScreen} alt='Vinera AI' />
                        </div>
                        <div className='flex flex-col gap-5 justify-center items-center text-center bg-[#293548] rounded-2xl box-shadow-gray lg:max-w-[25rem] py-5 lg:py-0'>
                            <h3 className='text-[#38bcf8] uppercase text-lg font-semibold'>Vinera AI 🤖</h3>
                            <p className='text-[#f7f7f7] text-base font-medium w-[90%]'>Built a fully-responsive website for Vinera AI, a company specializing in AI automation. The site features an intuitive interface, detailed service descriptions, and a dynamic insights section for sharing the latest in AI technologies.</p>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">ReactJs</span>
                                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">Tailwind CSS</span>
                                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">Framer Motion</span>
                            </div>
                            <div className='flex gap-10'>
                                <a href="https://github.com/kanank99/Vinera" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>Code</a>
                                <a href="https://vinera.vercel.app/" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>View Live</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center bg-[#1e293b]'>
                        <h3 className='text-[#38bcf8] text-xl font-semibold mb-[1rem]'>Vinera AI</h3>
                        <p className='text-[#f7f7f7] text-base font-medium mb-[1rem]'>A full-stack application that allows users to track their COVID-19 vaccination progress.</p>
                        <a href="https://vinera.vercel.app/" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>View Live</a>
                    </div>
                    <div className='flex flex-col justify-center bg-[#1e293b]'>
                        <h3 className='text-[#38bcf8] text-xl font-semibold mb-[1rem]'>Vinera AI</h3>
                        <p className='text-[#f7f7f7] text-base font-medium mb-[1rem]'>A full-stack application that allows users to track their COVID-19 vaccination progress.</p>
                        <a href="https://vinera.vercel.app/" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>View Live</a>
                    </div>
                    <div className='flex flex-col justify-center bg-[#1e293b]'>
                        <h3 className='text-[#38bcf8] text-xl font-semibold mb-[1rem]'>Vinera AI</h3>
                        <p className='text-[#f7f7f7] text-base font-medium mb-[1rem]'>A full-stack application that allows users to track their COVID-19 vaccination progress.</p>
                        <a href="https://vinera.vercel.app/" target="_blank" rel="noreferrer" className='text-[#38bcf8] hover:text-[#f7f7f7]'>View Live</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects