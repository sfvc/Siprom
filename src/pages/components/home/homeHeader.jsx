import { useState } from "react";

const HomeMainHeader = ({ onSelectSection, toggleTheme }) => {
    return (
        <header className="main-header">
            <img className="main-header__logo" src="logo" alt="logo" />
            <div className="main-header__buttons">
                <button 
                    className="main-header__button"
                    onClick={() => onSelectSection("informacionGeneral")}>
                    Informacion General
                </button>
                <button 
                    className="main-header__button"
                    onClick={() => onSelectSection("proveedores")}>
                    Proveedores
                </button>
                <button 
                    className="main-header__button"
                    onClick={() => onSelectSection("consultasPublicas")}>
                    Consultas Publicas
                </button>
                <button 
                    className="main-header__button main-header__button--toggle"
                    onClick={toggleTheme}>
                    Toggle Dark/Light Mode
                </button>
            </div>
        </header>
    );
};

export default HomeMainHeader;
