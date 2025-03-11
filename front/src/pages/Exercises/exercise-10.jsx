import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_10() {

    const [result, setResult] = useState("");

    function multiplication_table() {
    
        const number = document.getElementById("number")
        const number_value = parseFloat(number.value.replace(",", "."))
    
        let result_text = "";
    
        for (let i = 1; i <= 10; i++){
            result_text += `${number_value} x ${i} = ${number_value * i}\n`;
        }
    
       setResult(result_text);

    };
    
    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 10!</h1>
                        
                        <section>    

                            <div>
                                <p>Inform the number to display it's multiplication table:</p>
                                <input id="number" type="number"></input>
                            </div>
                          
                            <button id="btn" onClick={multiplication_table}>send</button>
                            
                            <div>
                                {result && <pre>{result}</pre>}
                            </div>
                            
                        </section>

                    </div>
                </div>


          
                
                <Footer/>

            </div>
            
        </>
    );
}

