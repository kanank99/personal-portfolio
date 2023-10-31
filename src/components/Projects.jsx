import React from 'react'
import Project from './Project'
import VineraScreen from '../assets/images/vineraScreen.png'
import CodeconvertScreen from '../assets/images/codeconvertScreen.png'
import CartifyScreen from '../assets/images/cartifyScreen.png'
import CoinviewScreen from '../assets/images/coinviewScreen.png'

function Projects() {
    return (
        <div className='projects-container py-20 px-10 bg-[#0f172a] w-full flex items-center justify-center font-display'>
            <div className='w-[1000px] flex flex-col justify-center'>
                <div className='mb-10'>
                    <h1 className='text-3 uppercase text-lg font-semibold mb-[1rem]'>Portfolio</h1>
                    <h2 className='text-[#f7f7f7] text-2xl font-bold mb-[1rem]'>Each project is a unique piece of development 🧩</h2>
                </div>
                <div className='flex flex-col gap-10'>
                    <Project
                        title='Vinera AI 🤖'
                        description='Built a fully-responsive website for Vinera AI, a company specializing in AI automation. The site features an intuitive interface, detailed service descriptions, and a dynamic insights section for sharing the latest in AI technologies.'
                        tech={['ReactJs', 'Tailwind CSS', 'Framer Motion']}
                        github='https://github.com/kanank99/Vinera'
                        live='https://vinera.vercel.app/'
                        image={VineraScreen}
                        imageAlt='Vinera AI'
                        flexDirection='lg:flex-row'
                    />
                    <Project
                        title='Code Convert ✨'
                        description='A program that leverages the OpenAI API to translate code between different programming languages. The application features an easy-to-use interface that allows users to input code, select the source and target languages, and receive the translated code within seconds.'
                        tech={['ReactJs', 'Tailwind CSS', 'Framer Motion']}
                        github='https://github.com/kanank99/code-convert'
                        live='https://code-convert.vercel.app/'
                        image={CodeconvertScreen}
                        imageAlt='Code Convert'
                        flexDirection='lg:flex-row-reverse'
                    />
                    <Project
                        title='Cartify 🛒'
                        description="Cartify is an ecommerce store. It offers a wide range of products including electronics, jewelry, men\' s clothing, and women\'s clothing. With Cartify, users can conveniently browse and filter products by categories, add multiple items to their cart, and proceed to checkout seamlessly."
                        tech={['NextJs', 'Tailwind CSS', 'Stripe']}
                        github='https://github.com/kanank99/Cartify'
                        live='https://cartify-nine.vercel.app/'
                        image={CartifyScreen}
                        imageAlt='Cartify'
                        flexDirection='lg:flex-row'
                    />
                    <Project
                        title='Coinview 📈'
                        description='Coinview allows users to view the real-time price of cryptocurrencies. It displays the top 100 coins on the main page and has a search component that allows users to search for any specific token. The search results include a graph displaying the price history of the selected token.'
                        tech={['NextJs', 'Vanilla CSS', 'CoinGecko API']}
                        github='https://github.com/kanank99/Coinview'
                        live='https://coinview-theta.vercel.app/'
                        image={CoinviewScreen}
                        imageAlt='Coinview'
                        flexDirection='lg:flex-row-reverse'
                    />

                </div>
            </div>
        </div>
    )
}

export default Projects