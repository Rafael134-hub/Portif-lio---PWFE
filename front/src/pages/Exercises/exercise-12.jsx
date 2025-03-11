import React, { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_12() {
    
    const [result, setResult] = useState("");
    
    function factorial(){

        let conta_text = "";
        let fatorial = 1;

        const number = document.getElementById("number");
        const number_value = parseInt(number.value.replace(",", "."));

        for (let i = number_value; i >= 1; i--){
            if (i == 1){
                conta_text += `${i} = `

            } else {
                conta_text += `${i} x `
            }
            
            fatorial *= i;
        }

        setResult(`${conta_text}${fatorial}`)

    };
        
    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 12!</h1>
                        
                        <section>
                            <div>

                                <div>
                                    <p>Enter the integer to calculate the factorial:</p>
                                    <input id="number" type="number"></input>
                                </div>

                            </div>

                            <button id="btn" onClick={factorial}>send</button>

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

