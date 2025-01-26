import { createContext, useEffect, useState } from "react";
import { fakeFoodFetch } from "./fakeFoodFetch";

// step - 1 create context
export const FoodContext = createContext();

// step - 2 create Provider

export const FoodProvider = ({children}) =>{
    const [allMenu, setAllMenu] = useState([]);
    useEffect(()=>{
        const fetchFoods = async () =>{
            try {
                const response = await fakeFoodFetch('https://example.com/api/menu');
                if(response.status === 200){
                    setAllMenu(response.data.menu);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchFoods();
    }, [])
    return (
        <FoodContext.Provider value={{allMenu}}>
            {children}
        </FoodContext.Provider>
    )
}