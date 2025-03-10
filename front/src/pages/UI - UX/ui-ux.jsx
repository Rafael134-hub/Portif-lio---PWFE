import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function UI_UX() {
    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>UI UX</h1>
                        <p className='text-xl'>Front-end is an area of IT responsible for creating interfaces that connect people with computer algorithms, 
                            aiming to improve the interaction between users and technology.</p>

                        <h2 className='mt-5'>Figma's link</h2>
                        <p>Here's the figma link of one of our best creations:</p>

                        <Link to="https://www.figma.com/design/PyStvJpKQUjN2xJnXEiP57/JetReady?t=ecPt8hYxcEF5buod-1" target="_blank" className='hover:text-blue-500'>Figmah</Link>

                    </div>
                </div>


          
                
                <Footer/>

            </div>
            
        </>
    );
}

