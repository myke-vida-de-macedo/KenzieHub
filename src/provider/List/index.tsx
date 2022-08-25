import { createContext, ReactNode, useContext, useState } from "react"
import { useRequest } from "../Request"

interface IPropsList {
    children:ReactNode
}

interface IValueList {
    type:"Tech" | "Work",
    tech:ITech[],
    work:IWork[],
    upadateTechToWork:()=> void,
    changeTech:()=>void,
    changeWork:()=>void,
}

interface ITech {
    id: string,
    title: string,
    status: string,
    created_at: string,
    updated_at: string
}

interface IWork {
    id: string,
    title: string,
	description: string,
	deploy_url: string,
	created_at: string,
	updated_at: string
}


const listContext = createContext<IValueList>({} as IValueList)

export const ListProvider = ( { children }:IPropsList ) => {

    const { searchUser } = useRequest()

    const [ tech, setTech ] = useState<ITech[]>([])
    const [ work, setWork ] = useState<IWork[]>([])

    const [ type, setType ] = useState<"Tech" | "Work">("Tech")

    const upadateTechToWork = () => {

        const user = JSON.parse( localStorage.getItem("@KenzieHub:user") as string )

        if( user?.id  ){
            searchUser( user.id )
            .then( ( { data:{ techs, works }, status } ) => {
                if( status === 200 ){

                    setTech(techs)
                    setWork(works)
                }
            })
        }
        
    }
    
    const changeTech = () => {
        setType("Tech")
    }
    
    const changeWork = () => {
        setType("Work")
    }

    return(
        <listContext.Provider value={{
            type,
            tech,
            work,
            upadateTechToWork,
            changeTech,
            changeWork,
        }}>
            { children }
        </listContext.Provider>
    )
}

export const useList = () => useContext(listContext)