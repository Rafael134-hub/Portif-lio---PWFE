import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_5() {
    
    const [result, setResult] = useState("");

    function area(){
        const width = document.getElementById("width");
        const width_value = parseFloat(width.value.replace(",", "."))
    
        const height = document.getElementById("height");
        const height_value = parseFloat(height.value.replace(",", "."))

        if (height_value ==  NaN){
            height_value = 0
        }

        if (width_value ==  NaN){
            width_value = 0
        }
    
        area = (height_value * width_value).toFixed(2);

        setResult(`A área de ${width_value} e ${height_value} é = ${area}.`)
        
    };

    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 5</h1>
                        
                        <section>
                            <div>
                                <input id="height" type="number"></input>
                                <input id="width" type="number"></input>
                            </div>

                                <button id="btn" onClick={area}>send</button>

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

