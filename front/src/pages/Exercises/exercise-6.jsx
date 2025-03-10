import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_6() {

        const [result, setResult] = useState("");
        const [result2, setResult2] = useState("");
        const [result3, setResult3] = useState("");

        function media(){
            const nota_1 = document.getElementById("nota_1");
            const nota_1_value = parseFloat(nota_1.value.replace(",", "."));

            const nota_2 = document.getElementById("nota_2");
            const nota_2_value = parseFloat(nota_2.value.replace(",", "."));
            
            const media = ((nota_1_value + nota_2_value) / (2)).toFixed(2);

            if (media >= 6){
                console.log("Aluna(o) aprovada(o).");
                setResult(`With the grades ${nota_1_value} and ${nota_2_value}, your average is = ${media} and you're: APPROVED!`)

            } else{
                console.log("Aluna(o) não aprovada(o).");
                setResult(`With the grades ${nota_1_value} and ${nota_2_value}, your average is = ${media} and you're: NOT APPROVED!`)
            }

            if((nota_1_value % 2 == 0) || (nota_1_value == 0)){
                setResult2(`The first informed grade: ${nota_1_value} is even.`)

            } else if (nota_1_value % 2 == 1){
                setResult2(`The first informed grade: ${nota_1_value} is odd.`)

            } else{
                console.log("A primeira nota não é par e nem ímpar.");
                setResult2(`A primeira nota informada: ${nota_1_value} isn't odd or even.`)
            }


            if((nota_2_value % 2 == 0) || (nota_2_value == 0)){
                setResult3(`The second informed: ${nota_2_value} is even.`)

            } else if (nota_2_value % 2 == 1){
                setResult3(`The second informed: ${nota_2_value} is odd.`)

            } else{
                setResult3(`The second informed: ${nota_2_value} isn't odd or even.`)
            }

        };

    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>Example 6!</h1>
                        
                        <section>
                            <div>

                                <div>
                                    <h1>MINIMUM AVERAGE VALUE: 6</h1>
                                </div>

                                <div>
                                    <p>Inform the first grade</p>
                                    <input id="nota_1" type="number"></input>
                                </div>
                            
                                <div>
                                    <p>Inform the second grade:</p>
                                    <input id="nota_2" type="number"></input>
                                </div>
                            
                            </div>

                            <button id="btn" onClick={media}>send</button>
                        
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

