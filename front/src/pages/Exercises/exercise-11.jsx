import React from 'react';
import { useState } from 'react';

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import '../../index.css'

export default function Exercise_11() {
    
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");
    
    function game(choice) {

        const bot_choices = ["rock", "paper", "scissors"];
        const bot_choice = bot_choices[Math.floor(Math.random() * bot_choices.length)];

        const user_choice = choice;

        setResult(`I chose ${bot_choice} and you chose ${user_choice}.`);

        if (bot_choice == "scissors" && user_choice == "paper") {
            setResult2("I won!");

        } else if (bot_choice == "scissors" && user_choice == "rock") {
            setResult2("You won!");

        } else if (bot_choice == "scissors" && user_choice == "scissors") {
            setResult2("It's a tie!");
            
        } else if (bot_choice == "paper" && user_choice == "rock") {
            setResult2("I won!");

        } else if (bot_choice == "paper" && user_choice == "scissors") {
            setResult2("You won!");

        } else if (bot_choice == "paper" && user_choice == "paper") {
            setResult2("It's a tie!");

        } else if (bot_choice == "rock" && user_choice == "rock") {
            setResult2("It's a tie!");

        } else if (bot_choice == "rock" && user_choice == "paper") {
            setResult2("You won!");

        } else if (bot_choice == "rock" && user_choice == "scissors") {
            setResult2("I won!");
        }

    };
    
    return (
        <>
            <div className='bg-blue-elsa'>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5 font-bold text-sky-900'>Example 11!</h1>

                        <section>
                            <div>

                                <div>
                                    <p>Rock, paper or scissors! Which one will you chose?:</p>

                                    <div>
                                        <button id = "rock" onClick={() => {game("rock")}}>Rock 💎</button>
                                        <button id = "paper" onClick={() => {game("paper")}}>Paper 📜</button>
                                        <button id= "scissors" onClick={() => {game("scissors")}}>Scissors ✂️</button>
                                    </div>
                                     
                                </div>

                            </div>

                            <button id="btn">send</button>
                    
                            <div>
                                {result && <p>{result}</p>}
                            </div>

                            <div>
                                {result2 && <p>{result2}</p>}
                            </div>
                            
                        </section>

                    </div>
                </div>
         
                <Footer/>
            </div>
            
        </>
    );
}

