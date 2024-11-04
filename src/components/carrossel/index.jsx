import React, { useState } from 'react';
import './style.css';

const Carousel = ({ profiles, onSelect }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProfile = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    };

    const prevProfile = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevProfile} className="carousel-button">❮</button>
            <div 
                className={`circulo ${profiles[currentIndex].cor}`}
                onClick={() => onSelect(profiles[currentIndex].cor)}
            >
                <img src={profiles[currentIndex].imagem} alt="Perfil" className="imagem" />
            </div>
            <button onClick={nextProfile} className="carousel-button">❯</button>
        </div>
    );
};

export default Carousel;