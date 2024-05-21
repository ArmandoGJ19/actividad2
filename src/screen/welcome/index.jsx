import React from 'react';
import ReactDOM from 'react-dom';
import './welcome.css';
import App from "../../App.jsx";

function Welcome() {
    return (
        <div className="app">
            <h1>App con React y Vite</h1>
            <p>Bienvenido a mi app donde podras consultar temas interesantes</p>
            <div className="buttons">
                <button className="btn">Ir al listado de temas</button>
                <button className="btn">Más sobre mi</button>
                <button className="btn">Contactame</button>
            </div>
        </div>
    );
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
export default Welcome;