import React from "react";
import Logo from './picture/Logo.png'
import './Header.css'

export default function Header() {
      
    return (
        <div className="cabecalho">
            <header className="cabecalho-nav">
                <div id="logo"> 
                    <h2 className="cabecalho-nav-logo">
                        <a href="#" className="link-logo" rel="sobre mim">
                            <img src={Logo}  className="logo" alt="Logo"/>
                        </a>
                    </h2>
                </div>
                <div className="cabecalho-nav-menu">
                    <nav>
                        <ul className="cabelho-nav-menu-itens">
                            <li>
                                <a href="#">Sobre mim</a>
                            </li>
                            <li>
                                <a href="#">Habilidades</a>
                            </li>
                            <li>
                                <a href="#">Projetos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}