import { AxiosResponse } from "axios"
import { createContext, ReactNode, useContext } from "react"
import { api } from "../../services/api.services"

interface IPropsRequest {
    children:ReactNode
}

interface IPropsContextRequest {
    profile:() => Promise<AxiosResponse<any, any>>,
    createUser:( user:ICreateUser ) => Promise<AxiosResponse<any, any>>,
    searchUser:( idUser:string ) => Promise<AxiosResponse<any, any>>,
    listUserPage:( page:number ) => Promise<AxiosResponse<any, any>>,
    listingUsers:() => Promise<AxiosResponse<any, any>>,
    loginUser:( user:ILoginUser ) => Promise<AxiosResponse<any, any>>,
    createTech:( tech:ITech ) => Promise<AxiosResponse<any, any>>,
    updateTech:( upadateObj:IUpdateTech, idTech:string ) => Promise<AxiosResponse<any, any>>,
    deleteTech:( idTech:string ) => Promise<AxiosResponse<any, any>>,
    createWork:( work:IWork ) => Promise<AxiosResponse<any, any>>,
    updateWork:( upadateObj:IUpdateWork, idWork:string ) => Promise<AxiosResponse<any, any>>,
    deleteWork:( idWork:string ) => Promise<AxiosResponse<any, any>>,
}

export interface ICreateUser {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string,
}

export interface ILoginUser {
    email: string,
    password: string,
}

interface ITech {
    title: string,
	status: "Iniciante" | "Intermediario" | "Avançado"
}

interface IUpdateTech {
	title?: string,
	status?: "Iniciante" | "Intermediario" | "Avançado"
}

interface IWork {
    title: string,
	description: string,
	deploy_url: string
}

interface IUpdateWork {
	title?: string,
    description?: string
}

const requestContext = createContext<IPropsContextRequest>({} as IPropsContextRequest )

export const RequestProvider = ( { children }:IPropsRequest ) => {

    const Token = () => localStorage.getItem("@KenzieHub:token") as string
    
    const profile = () => {

        return api.get("/profile", {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        })
    }

    const createUser = ( user:ICreateUser ) => {

        return api.post("/users", user,{
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        })
    }

    const searchUser = ( idUser:string ) => {

        return api.get(`/users/${idUser}`)
    }

    const listUserPage = ( page:number ) => {

        return api.get(`/users`, {
            params:{
                perPage:15,
                page:page,
                tech:"React"
            }
        })
    }

    const listingUsers = () => {

        return api.get("/users")
    }

    const loginUser = ( user:ILoginUser ) => {

        return api.post("sessions", user )
    }

    const createTech = ( tech:ITech ) => {

        return api.post("users/techs", tech, {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        })
    }

    const updateTech = ( upadateObj:IUpdateTech, idTech:string ) => {

        return api.put( `users/techs/${idTech}`, upadateObj, {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        } )
    }

    const deleteTech = ( idTech:string ) => {

        return api.delete(`/users/techs/${idTech}`, {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        })
    }

    const createWork = ( work:IWork ) => {

        return api.post("users/works", work, {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        })
    }

    const updateWork = ( upadateObj:IUpdateWork, idWork:string ) => {

        return api.put( `users/works/${idWork}`, upadateObj, {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        } )
    }

    const deleteWork = ( idWork:string ) => {

        return api.delete(`/users/works/${idWork}`, {
            headers:{
                "Authorization":`Bearer ${Token()}`
            }
        })
    }

    return(
        <requestContext.Provider value={{
            profile,
            createUser,
            searchUser,
            listUserPage,
            listingUsers,
            loginUser,
            createTech,
            updateTech,
            deleteTech,
            createWork,
            updateWork,
            deleteWork
        }}>
            { children }
        </requestContext.Provider>
    )
}

export const useRequest = () => useContext(requestContext)