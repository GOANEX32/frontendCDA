import React from "react"
import photo6 from "../assets/img/portfolio/6.jpg"
import photo7 from "../assets/img/portfolio/7.jpg"
import photo8 from "../assets/img/portfolio/8.jpg"
import Logo_CSG from "../assets/img/Logo_CSG.jpg"


const Menu = () => {

    return (
        <div name="projets" className="w-full md:h-screen text-green-600 bg-transparent">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
                <div className="pb-8">
                    <div style={{backgroundImage: `url(${Logo_CSG})`}}></div>
                    <img className=" h-150" src={Logo_CSG} alt="Logo" height={50} />
                    <p className="py-6 ">//Agence d'agent de sécurité</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/*grid items*/}
                    <div
                        style={{ backgroundImage: `url(${photo6})` }}
                        className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">


                        {/* Hover Effects*/}
                        <div className="opacity-0  group-hover:opacity-100 bg-green-600 h-full w-full rounded-md flex  items-center justify-center flex-col mx-auto ">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Qui sommes-nous ?
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://goanex32.github.io/P7kasa/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >Lien</button>
                                </a>
                                <a href="https://github.com/GOANEX32/P7kasa">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">lien</button>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/*grid items*/}
                    <div style={{ backgroundImage: `url(${photo7})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div">


                        {/* Hover Effects*/}
                        <div className="opacity-0  group-hover:opacity-100 bg-green-600 h-full w-full rounded-md flex  items-center justify-center flex-col mx-auto ">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Nos prestations  

                            </span>
                            <div className="pt-8 text-center">
                              
                                <a href="https://github.com/GOANEX32/KanapP5">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">lien</button>
                                </a>
                            </div>
                        </div>

                    </div>



                    {/*grid items*/}
                    <div style={{ backgroundImage: `url(${photo8})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">


                        {/* Hover Effects*/}
                        <div className="opacity-0  group-hover:opacity-100 bg-green-600 h-full w-full rounded-md flex  items-center justify-center flex-col mx-auto ">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Missions

                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://goanex32.github.io/ohmyfood/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg" >lien</button>
                                </a>
                                <a href="https://github.com/GOANEX32/ohmyfood">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>

                    </div>





                   

                     





                </div>
            </div>
        </div>
    )
}


export default Menu