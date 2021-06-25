import { createContext,useState } from "react";

export const DoneContext = createContext(null)

function DoneTodo ({children}){
    const [doneTodos, setDoneTodos] = useState([])
    return(
        <DoneContext.Provider value={{doneTodos, setDoneTodos}}>
            {children}
        </DoneContext.Provider>
    )
}

export default DoneTodo