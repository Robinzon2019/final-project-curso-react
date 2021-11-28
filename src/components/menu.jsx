import { useState } from "react";

const Menu = ( {text, onChangeText, clearText} ) => {

    const [showInput, setShowInput] = useState(false);

    //Cambia el estado de la variable 'showInput' para verificar si se debe mostrar o no el campo de busqueda
    const handleClick = () => {
        setShowInput(!showInput);
        //clearText();
    };

    //Verifica si el campo de busqueda esta vacio antes de cambiar el estado de la variable 'showInput'
    const conditionalClick = () => {
        if(text === "")
            handleClick();
    };

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand text-danger" href="#"  >MOVIEAPP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My list</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Advanced Search</a>
                        </li>
                    </ul>                                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;