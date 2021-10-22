/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './cadastro.css'
import Imagem from './img/imagem.svg'



export default function Cadastro() {

    return(
        <>
            <div className="div-form">
                
                <form>

                    <h1>Cadastro</h1>
                    <p>Preencha os dados abaixo para começar.</p>

                    <input 
                    className="input"
                    type="text"
                    placeholder="Nome"
                    ></input>
                    <input 
                    className="input"
                    type="text"
                    placeholder="Sobrenome"
                    ></input>
                    <input 
                    className="input"
                    type="email"
                    placeholder="E-mail"
                    ></input>
                    <input 
                    className="input"
                    type="password"
                    placeholder="Senha"
                    ></input>
                    <input 
                    className="input"
                    type="password"
                    placeholder="Confirmar Senha"
                    ></input>

                    <button
                    className='button'
                    >Concluir cadastro</button>
                </form>

                <img className="img" src={Imagem}></img>
            </div>

           
        </>
    )
}