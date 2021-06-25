import { createContext,useState } from "react";

export const DeletedContext = createContext(null)

function DeletedTodo ({children}){
    const [deletedTodos, setDeletedTodos] = useState([])
    return(
        <DeletedContext.Provider value={{deletedTodos, setDeletedTodos}}>
            {children}
        </DeletedContext.Provider>
    )
}

export default DeletedTodo