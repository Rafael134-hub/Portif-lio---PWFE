import React from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_4() {
    
    function converter(type){

        let celsius = document.getElementById("celsius");
        let fahrenheits = document.getElementById("fahrenheits");

        let celsius_value = parseFloat(celsius.value.replace(",", "."));
        let fahrenheits_value = parseFloat(fahrenheits.value.replace(",", "."));

        if (type == 'celsius'){
            fahrenheits.value = ((celsius_value * 9/5) + (32)).toFixed(2);

        } else if(type == 'fahrenheits'){
            celsius.value = ((fahrenheits_value -32) * (5/9)).toFixed(2);
        }
    }

    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>Example 4!</h1>
                        
                        <section>
                            <div>
                                <input id="celsius" type="number" placeholder="celsius" onKeyUp={() => {converter('celsius')}}></input>
                                <input id="fahrenheits" type="number" placeholder="fahrenheits" onKeyUp={() => {converter('fahrenheits')}}></input>
                            </div>
                        </section>
                        
                    </div>
                </div>
    
                <Footer/>

            </div>
            
        </>
    );
}

