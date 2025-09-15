import React from 'react';
import './CTAButton.css';

const CTAButton = ({ text, quandoClicar }) => {
    return (
        <button className="cta-button" onClick={quandoClicar}>
            {text}
        </button>
    );
};

export default CTAButton;