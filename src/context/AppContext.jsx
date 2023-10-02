//define your context and its intial state for 'currentMood' and 'compliments'
import React, { createContext, useState } from "react";

export const AppContext = createContext();

//create a provider component
const AppProvider = ({ props }) => {
    const [currentMood, setCurrentMood] = useState("Happy");
    const  [compliments, setCompliments] = useState([]);

    return (
        <AppContext.Provider value={{ currentMood, setCurrentMood, compliments, setCompliments }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;





