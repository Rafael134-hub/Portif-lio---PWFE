import React from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import figma from "../../assets/images/figma_gelo.png"
import js from "../../assets/images/js_gelo.png"

import '../../index.css'

export default function Home() {
    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Front End</h1>
                        <p className='text-xl'>Front-end is an area of IT responsible for creating interfaces that connect people with computer algorithms, 
                            aiming to improve the interaction between users and technology.</p>
                    </div>
                </div>


                <div className='flex justify-center mt-15'>
                    <div className='bg-gray-200  h-170 mr-15 mb-20 w-[25%] transition-all duration-250 hover:scale-105'>
                        <img src={figma} className='w-[100%] h-[100%]'></img>
                    </div>

                    <div className='bg-gray-200  h-170 mb-20 w-[25%] transition-all duration-250 hover:scale-105'>
                        <img src={js} className='w-[100%] h-[100%]'></img>
                    </div>
                </div>
                
                <Footer/>
            </div>
            
        </>
    );
}







