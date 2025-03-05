import React from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function JavaScript() {
    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>JavaScript</h1>
                        <p className='text-xl'>Front-end is an area of IT responsible for creating interfaces that connect people with computer algorithms, 
                            aiming to improve the interaction between users and technology.</p>
                    </div>
                </div>

                
                <Footer/>

            </div>
            
        </>
    );
}

