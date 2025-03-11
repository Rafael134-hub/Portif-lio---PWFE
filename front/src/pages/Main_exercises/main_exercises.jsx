import React from 'react';
import { Link } from "react-router-dom";

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import elsa from "../../assets/images/elsa.jpg"

import '../../index.css'

export default function JavaScript() {
    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>JavaScript</h1>
                        <p className='text-xl'>Front-end is an area of IT responsible for creating interfaces that connect people with computer algorithms, aiming to improve the interaction between users and technology.</p>

                        <div>
                            <div>
                                <Link to={f}></Link>
                            </div>
                        </div>

                   <div className='flex justify-center'> 
                        <div>
                            <img src = {elsa} className='mt-30'></img>
                        </div>
                   </div>
                            
                    </div>
                </div>

                
                <Footer/>

            </div>
            
        </>
    );
}

