import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const Emojis = () => {
    const { currentMood, setCurrentMood } = useContext(AppContext);

    return (
        <div>
            <h2>Current Mood: {currentMood}</h2>
            <ul>
                {compliments.map((compliment, index) => {
                    return <li key={index}>{compliment}</li>;
                })}
            </ul>
        </div>
    );
};

export default Emojis;