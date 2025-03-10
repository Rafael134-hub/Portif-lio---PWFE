import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'
import { use } from 'react';

export default function Exercise_7() {
    
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");


    function imc(){

        const height = document.getElementById("height");
        const height_value = parseFloat(height.value.replace(",", "."));

        const weight = document.getElementById("weight");
        const weight_value = parseFloat(weight.value.replace(",", "."));

        imc = ((weight_value) / (height_value ** 2)).toFixed(2); 
        setResult(`Your current BMI is = ${imc}`)

        const peso_ideal_inicio = ((height_value ** 2) * (18.5)).toFixed(2);
        const peso_ideal_fim = ((height_value ** 2) * (24.9)).toFixed(2);
        setResult2(`Your ideal weight is between ${peso_ideal_inicio}kg and ${peso_ideal_fim}kg.`)

        if(imc < 18.5){
            result += `<p>Você está abaixo do peso ideal.</p>`;
            setResult3("You're below your ideal weight.")

        } else if(imc <= 24.9){
            setResult3("You're in your ideal weight.")

        } else if(imc <= 29.9){
            setResult3("You're above your ideal weight.")

        } else if(imc <= 34.9){
            setResult3("You have grade 1 obesity.")

        }  else if(imc <= 39.9){
            setResult3("You have grade 2 obesity.")

        } else {
            setResult3("You have grade 3 obesity.")
        } 

    };

    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>Example 7!</h1>
                        
                        <section>
                            <div>

                                <div>
                                    <p>Inform your weight:</p>
                                    <input id="weight" type="number"></input>
                                </div>

                                <div>
                                    <p>Inform your height:</p>
                                    <input id="height" type="number"></input>
                                </div>

                            </div>

                            <button id="btn" onClick={imc}>send</button>
                            
                            <div>
                                {result && <p>{result}</p>}
                            </div>

                            <div>
                                {result2 && <p>{result2}</p>}
                            </div>

                            <div>
                                {result3 && <p>{result3}</p>}
                            </div>
                        </section>

                    </div>
                </div>
   
                <Footer/>
            </div>
            
        </>
    );
}

