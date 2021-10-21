/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Login.css"
import imagem from "./img/imagem.svg"

export default function Login(){
    
    return(
        <div>          
            <form className="form">
                <img className="img-login" src={imagem}/>
                <div className="inner-form">
                    <h1>Login</h1>
                    <div className="user">
                        <input
                        className="inputs"
                        type="email" 
                        placeholder="Username"
                        ></input>
                    </div>
                    <div className="password">
                        <input
                        className="inputs"
                        type="password"
                        placeholder="Password"
                        ></input>
                    </div>
                    <button 
                    className="btn-enter"
                    >Entrar</button><br/>
                    <a href="/">Esqueceu sua senha?</a>
                    <div className='verify-div'></div>
               </div>
            </form>

        </div>
    )
}