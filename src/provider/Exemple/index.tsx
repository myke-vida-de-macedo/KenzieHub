import { createContext, ReactNode, useContext } from "react"

interface IPropsAuth {
    children:ReactNode
}

const authContext = createContext({})

export const AuthProvider = ( { children }:IPropsAuth ) => {

    return(
        <authContext.Provider value={{

        }}>

        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)