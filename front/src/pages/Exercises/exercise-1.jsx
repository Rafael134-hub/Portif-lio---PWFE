import React from 'react';
import { useState } from "react";

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_1() {

    const [result, setResult] = useState("");

    function diferenca(){
        
        const number_1 = document.getElementById("number_1");
        let number_1_value = parseFloat(number_1.value.replace(",", "."));
    
        const number_2 = document.getElementById("number_2");
        let number_2_value = parseFloat(number_2.value.replace(",", "."));
    
        let diferenca_numeros = number_1_value - number_2_value;

        setResult(`The diference between ${number_1_value} and ${number_2_value} is = ${diferenca_numeros}`);
    }
    

    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 1!</h1>
                        
                        <section>
                            <div>
                                <input id="number_1" type="number" />
                                <input id="number_2" type="number" />
                            </div>

                            <button id="btn" onClick={diferenca}>send</button>

                            <div>
                                {result && <p>{result}</p>}
                            </div>

                        </section>

                    </div>
                </div>
                
                <Footer/>

            </div>
            
        </>
    );
}

