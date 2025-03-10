import React from 'react';
import { Link } from "react-router-dom";

import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import elsa from "../../assets/images/elsa.jpg"

import '../../index.css'

export default function JavaScript() {
    return (
        <>
            <div>

                <Header/>

                <div className='flex justify-center mt-10'>
                    <div className='w-[70%]'>
                        <h1 className='text-5xl mb-5'>JavaScript</h1>
                        <p className='text-xl'>Front-end is an area of IT responsible for creating interfaces that connect people with computer algorithms, aiming to improve the interaction between users and technology.</p>

                        <div className='mt-15 grid gap-10 grid-cols-4'>
                    
                            <div>
                                <Link to="/javascript/example_1">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 1</h2>
                                    </div>
                                </Link>
                            </div>
                           
                            <div>
                                <Link to="/javascript/example_2">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 2</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_3">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 3</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_4">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 4</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_5">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 5</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_6">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 6</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_7">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 7</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_8">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 8</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_9">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 9</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_10">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 10</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_11">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 11</h2>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to="/javascript/example_12">
                                    <div className='w-full bg-gray-100 h-40 flex justify-center items-center transition-all duration-150 hover:scale-106'>
                                        <h2 className="text-2xl transition-all duration-250 hover:text-blue-500">Example 12</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                  

                   <div className='flex justify-center'> 
                        <div>
                            <img src = {elsa} className='mt-30'></img>
                        </div>
                   </div>
                            
                    </div>
                </div>

                
                <Footer/>

            </div>
            
        </>
    );
}

