import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"
import "../styles/Home.css"

//import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from "../components/Carrousel";
import Menu from "../components/Menu";
import Apropos from "../components/Apropos"
import { useState, useEffect } from "react";
import Slideshow from "../components/Slide";
import Navbar from "../components/Navbar";





const Home = () =>{

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/offreEmplois")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        console.log()
      }, [])
    

    return(
        
        <div>
            <Navbar/>
            <Slideshow/>
            <Menu/>
        
         {/*container*
        <div name="home" className="w-full h-screen bg-white">
            

            
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Agence d'agent de sécurité</p>
                <Menu />
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        Missions
                        <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3"/>
                        </span>
                    </button>
                </div>
            </div>
            
            

        </div>
    */}
        </div>


        )
}

export default Home