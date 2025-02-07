import { createContext, useEffect, useState } from "react";
import { mails } from "./mailData.js"; 

// Step 1 - Create Context
export const MailContext = createContext();

// Step 2 - Create Provider
export const MailProvider = ({ children }) => {
    const [mailData, setMailData] = useState([]);

    useEffect(() => {
        setMailData(mails);
    }, []); 

    return (
        <MailContext.Provider value={{ mailData }}>
            {children} 
        </MailContext.Provider>
    );
};
