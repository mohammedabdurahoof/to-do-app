import { createContext,useState } from "react";

export const PendingContext = createContext(null)

function PendingTodo ({children}){
    const [pendingTodos, setPendingTodos] = useState([])
    return(
        <PendingContext.Provider value={{pendingTodos, setPendingTodos}}>
            {children}
        </PendingContext.Provider>
    )
}

export default PendingTodo