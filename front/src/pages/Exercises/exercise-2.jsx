import React from 'react';
import { useState } from "react";

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_2() {

    const [result, setResult] = useState("");
    
    function teste() {
        const number = document.getElementById("number_test");

        const number_value = parseInt(number.value); 
    
        if (number_value % 2 == 0) {
            setResult("It's even!");
            console.log("It's even!");
    
        } else if (number_value % 2 == 1){
            setResult("It's odd!");
            console.log("It's odd!");

        } else {
           
            console.log('Unvalid value.');
        }
    };


    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 2!</h1>
                        
                        <section class="input_area">
                            <div class="test_container">
                                <div class="test_input">
                                    <p>Inform the number:</p>
                                    <input id="number_test" type="number" onKeyUp={teste}></input>

                                    <div class="result_container">
                                        {result && <p>{result}</p>}
                                    </div>  

                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            
                <Footer/>

            </div>         
        </>
    );
}

