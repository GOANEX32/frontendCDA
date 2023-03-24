import logo from "../assets/img/Logo_CSG.jpg"
import React, { PureComponent } from 'react'
import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"


const Login = () => {



    return (
        <section className="flex flex-col md:flex-row h-screen items-center">

            <div className='h-screen hidden bg-green-600 lg:block md:w-1/2 xl:w-2/3 h-screen'>
                <img src={logo} className="w-full h-full object-cover" alt=""></img>
            </div>

            <div className="bg-white items-center justify-center flex md:mx-auto md:mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:mr-40">
                <div className="w-full h-100">
                    <h1 className="text-xl font-bold"></h1>
                    <h1 className="text-lg md:text-2xl font-bold leading-tight mt-12">Authentifer vous !</h1>

                    <form className="mt-6" action="#" method="POST">
                        <div>
                            <label className="block text-gray">email </label>
                            
                            <input type="email" placeholder="Entré L'Email" className="w-full bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none  rounded-lg px-4 py-3" autoComplete autoFocus required></input>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray">mot de passe</label>

                            <input type="password" minLength="6" placeholder="Entré mot de pass" name="" className="w-full bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none  rounded-lg px-4 py-3" autoComplete autoFocus required/>
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray hover:text-green-700 focus:text-green-700 focus:outline-none">mot de passe oublié</a>
                        </div>

                        <button className="w-full block bg-green-500 hover:bg-green-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-green-400 focus:outline-none" type="submit">Connexion</button>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button className="    block content-center content-between w-full  bg-white border-gray-300 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border">
                           
                                    <LoginSocialGoogle
                                        client_id={"client-id"}
                                        scope="openid profile email"
                                        
                                        discoveryDocs="claims_supported"
                                        access_type="offline"
                                        onResolve={({ provider, data }) => {
                                            console.log(provider, data);
                                        }}
                                        onReject={(err) => {
                                            console.log(err);
                                        }}
                                    >
                                        <GoogleLoginButton text =""  />
                                    </LoginSocialGoogle>
                             
                        </button>
                    </form>

                </div>
            </div>
        </section>

    )






}

export default Login