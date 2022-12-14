import { createContext, ReactNode, useContext } from "react"
import { IPromise } from "../../components/types"

import { api } from "../../services/api.services"

interface IPropsRequest {
    children:ReactNode
}

interface IPropsContextRequest {
    profile:() => IPromise,
    createUser:( user:ICreateUser ) => IPromise,
    searchUser:( idUser:string ) => IPromise,
    listUserPage:( page:number ) => IPromise,
    listingUsers:() => IPromise,
    loginUser:( user:ILoginUser ) => IPromise,
    createTech:( tech:ITech ) => IPromise,
    updateTech:( upadateObj:IUpdateTech, idTech:string ) => IPromise,
    deleteTech:( idTech:string ) => IPromise,
    createWork:( work:IWork ) => IPromise,
    updateWork:( upadateObj:IUpdateWork, idWork:string ) => IPromise,
    deleteWork:( idWork:string ) => IPromise,
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

export interface ITech {
    title: string,
	status: "Iniciante" | "Intermediario" | "Avançado"
}

export interface IUpdateTech {
	title?: string,
	status?: "Iniciante" | "Intermediario" | "Avançado"
}

export interface IWork {
    title: string,
	description: string,
	deploy_url: string
}

export interface IUpdateWork {
	title?: string,
    description?: string
    deploy_url?:string
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