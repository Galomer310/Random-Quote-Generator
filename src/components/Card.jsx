import React, { useState } from 'react';
import quotes from './QuotesData';
import './Card.css';

const Card = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    // Define the initial color states for each part
    const [colors, setColors] = useState({
        bodyBackground: "rgb(0,0,0)",   // Page background color
        buttonColor: "rgb(24, 90, 149)",      // Button color
        containerBackground: "rgb(255,255,255)", // Quote container background color
        textColor: "rgb(0,0,0)"         // Text color
    });

    const colorChange = () => {
        // Generate random RGB values
        let randomNum1 = Math.floor(Math.random() * 255);
        let randomNum2 = Math.floor(Math.random() * 255);
        let randomNum3 = Math.floor(Math.random() * 255);

        // Create random colors
        let firstColor = `rgb(${randomNum1},${randomNum2},${randomNum3})`; // Random color
    
        // Generate a complementary color for the quote container background
        let containerColor = `rgb(${255 - randomNum1}, ${255 - randomNum2}, ${255 - randomNum3})`;

        // Apply colors to the page
        document.body.style.backgroundColor = firstColor; // Set page background color
        setColors({
            bodyBackground: firstColor,      // Set page background color
            buttonColor: firstColor,         // Set button color to match page
            containerBackground: containerColor, // Set quote container background to complementary color
            textColor: 'rgb(255,255,255)'   // Set text color to white (for contrast)
        });
    }

    const newQuote = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomNumber]); // Set new quote
        colorChange(); // Change colors when a new quote is displayed
    }

    return (
        <div className="quoteContainer" style={{ backgroundColor: colors.containerBackground, color: colors.textColor }}>
            <h2>{currentQuote.quote}</h2>
            <p><strong>-{currentQuote.author}-</strong></p>
            <button onClick={newQuote} style={{ backgroundColor: colors.buttonColor, color: colors.textColor }}>
                New quote
            </button>
        </div>
    );
};

export default Card;
