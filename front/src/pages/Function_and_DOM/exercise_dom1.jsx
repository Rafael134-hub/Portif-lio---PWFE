import React from 'react';
import { useState } from "react";

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_dom_function1() {

    const [result, setResult] = useState("");
    

    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 1!</h1>
                        

                    </div>
                </div>
                
                <Footer/>

            </div>
            
        </>
    );
}

