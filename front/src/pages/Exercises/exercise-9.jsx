import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_8() {

    const [result, setResult] = useState("")

    function convert() {

        const cambio = document.getElementById("cambio");
        const cambio_value = parseFloat(cambio.value.replace(",", "."));

        const valor_desejado = document.getElementById("valor_desejado");
        const valor_desejado_value = parseFloat(valor_desejado.value.replace(",", "."));

        const valor_convertido = cambio_value * valor_desejado_value;

        setResult(`The converted value is = ${valor_convertido}.`)

    };
    
    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>Example 9!</h1>
                        
                        <section>
                
                            <div>
                                <p>Inform the exchange value:</p>
                                <input id="cambio" type="number"></input>
                            </div>

                            <div>
                                <p>Inform the desired value:</p>
                                <input id="valor_desejado" type="number"></input>
                            </div>

                            <button id="btn" onClick={convert}>send</button>
                            
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

