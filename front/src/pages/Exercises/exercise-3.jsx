import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_3() {
    
    const [result, setResult] = useState("");

    function is_multiple(){
    
        const number_1 = document.getElementById("number_1");
        let number_1_value = parseFloat(number_1.value.replace(",", "."));
    
        const number_2 = document.getElementById("number_2")
        let number_2_value =parseFloat(number_2.value.replace(",", "."));
    
        if((number_1_value % number_2_value == 0) || (number_2_value % number_1_value == 0)){
            setResult(`The numbers ${number_1_value} and ${number_2_value} are multiples.`);

        } else {
            setResult(`The numbers ${number_1_value} and ${number_2_value} aren't multiples.`);
        }
    } 
    

    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>Example 3!</h1>
                        
                        <section>
                            <div>
                                <input id="number_1" type="number" />
                                <input id="number_2" type="number" />
                            </div>    

                            <button id="btn" type="button" onClick={is_multiple}>send</button>

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

