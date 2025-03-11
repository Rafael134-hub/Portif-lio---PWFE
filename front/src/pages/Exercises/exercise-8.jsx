import React, { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_8() {

    const [result, setResult] = useState("")
    
    function is_leap(){

        const ano = document.getElementById("ano");
        const ano_value = parseInt(ano.value.replace(",", "."));

        if ((ano_value % 4 == 0 && ano_value % 100 != 0) || (ano_value % 400 == 0)){
            setResult(`The year ${ano_value} is leap.`)

        } else{
            setResult(`The year ${ano_value} isn't leap.`)
        }

    };

    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 8!</h1>
                        
                        <section>
            
                            <div>
                                <p>Inform the year:</p>
                                <input id="ano" type="number"></input>
                            </div>

                            <button id="btn" onClick={is_leap}>send</button>
                            
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

