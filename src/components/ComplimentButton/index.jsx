import React from "react";
import { AppContext } from "../../context/AppContext.jsx";

const ComplimentButton = () => {
    const { compliments, setCurrentMood, setCompliments } = useContext(AppContext);

    const handleComplimentClick = () => {
        setCompliments(compliments + 1);
        if (compliments < 5) {
            setCurrentMood("Happy");
        } else if (compliments >= 5 && compliments <= 9) {
            setCurrentMood("Fine");
        
        } else if (compliments >= 10 && compliments <= 15) {
            setCurrentMood("Sad");
        }

    return (
        <>
        <button onClick={handleComplimentClick}>Add Compliment</button>
        </>
    );
};

export default ComplimentButton;