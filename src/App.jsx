import React, { useState } from 'react';
import './App.css';
import Welcome from './screen/welcome/index.jsx'; // Asegúrate de que esta ruta sea correcta

function App() {
    const [showWelcome, setShowWelcome] = useState(false);

    const handleButtonClick = () => {
        setShowWelcome(true);
    }

    return (
        <>
            <div>
                <h1>Bienvenido</h1>
                <button onClick={handleButtonClick}>Mostrar Welcome</button>
                {showWelcome && <Welcome />}
            </div>
        </>
    );
}

export default App;
