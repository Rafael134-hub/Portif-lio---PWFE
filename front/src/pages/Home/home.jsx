import React from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Home() {
    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>Front End</h1>
                        <p className='text-xl'>Front-end is an area of IT responsible for creating interfaces that connect people with computer algorithms, 
                            aiming to improve the interaction between users and technology.</p>
                    </div>
                </div>


                <div className='flex justify-center mt-15'>
                    <div className='bg-gray-200  h-170 mr-15 mb-20 w-[25%] transition-all duration-250 hover:scale-105'>
                        
                    </div>

                    <div className='bg-gray-200  h-170 mb-20 w-[25%] transition-all duration-250 hover:scale-105'>

                    </div>
                </div>
                
                <Footer/>
            </div>
            
        </>
    );
}







