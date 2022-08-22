import { createContext, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ILoginUser, useRequest } from "../Request"

import toast from 'react-hot-toast';

interface IPropsAuth {
    children:ReactNode,
}

interface IValueAuth {
    auth:boolean,
    login:( user:ILoginUser ) => void,
    logout:() => void,
    checkAuthorization:( way: string ) => void,
}

const authContext = createContext<IValueAuth>({} as IValueAuth)

export const AuthProvider = ( { children }:IPropsAuth ) => {

    const navigate = useNavigate()
    const { loginUser, profile } = useRequest()
    const [ auth, setAuth ] = useState<boolean>(false)

    const login = ( user:ILoginUser ) => {

        const toastId = toast.loading("Carregando",{
            style: {
                font: 'Inter',
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
        })

        loginUser( user )
            .then( ({ data:{ token, user }, status }) => {
                
                if( token && user && status === 200 ){

                    localStorage.setItem("@KenzieHub:token", token )
                    localStorage.setItem("@KenzieHub:user", JSON.stringify( user ))
                    
                    setAuth(true)
                    toast.success("usuario logado", {
                        id:toastId,
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                    })
                    navigate("/home")
                }
            } )
            .catch( _ =>{
                toast.error("Usuario invalido", {
                    id:toastId,
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                })
            })
    }

    const logout = () => {
        setAuth(false)

        localStorage.removeItem("@KenzieHub:token")
        localStorage.removeItem("@KenzieHub:user")

        toast.success("Usuario desconectado", {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
        })
    }

    const checkAuthorization = ( way: string ) => {

        const user = JSON.parse( localStorage.getItem("@KenzieHub:user") as string )
        
        profile()
            .then( ( {data:{ email, name, id }, status} ) => {

                const checkEmail = email === user.email
                const checkName = name === user.name
                const checkId = id === user.id
                const checkStatus = status === 200

                if( checkEmail && checkName && checkId && checkStatus ){

                    setAuth(true)
                    navigate(way)
                }else{
                    toast.error("Ops, isso não devia acontecer",{
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                    } )
                }
            } )
            .catch( _ => navigate("/login") )
    }

    return(
        <authContext.Provider value={{
            auth,
            login,
            logout,
            checkAuthorization
        }}>
            { children }
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)