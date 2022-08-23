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
    insertTech:( newTech:ITech )=> void,
    insertWork:( newWork:IWork )=> void,
    replaceTech:( newTech:ITech, id:string )=> void,
    replaceWork:( newWork:IWork, id:string )=> void,
    deleteListTech:(id:string)=> void,
    deleteListWork:(id:string)=> void,
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
            .catch( error => {

            })
        }
        
    }
    
    const changeTech = () => {
        setType("Tech")
    }
    
    const changeWork = () => {
        setType("Work")
    }

    const insertTech = ( newTech:ITech ) => {
        setTech([...tech, newTech])
    }

    const insertWork = (  newWork:IWork ) => {
        setWork([...work, newWork])
    }

    const replaceTech = ( newTech:ITech, id:string ) => {

        const filterTech = tech.filter( tech => tech.id != id )

        setTech([ ...filterTech, newTech ])
    }

    const replaceWork = ( newWork:IWork, id:string ) => {

        const filterWork = work.filter( tech => tech.id != id )

        setWork([ ...filterWork, newWork ])
    }

    const deleteListTech = ( id:string ) => {

        const filterTech = tech.filter( tech => tech.id != id )

        setTech(filterTech)
    }

    const deleteListWork = ( id:string ) => {

        const filterWork = work.filter( tech => tech.id != id )

        setWork(filterWork)
    }

    return(
        <listContext.Provider value={{
            type,
            tech,
            work,
            upadateTechToWork,
            changeTech,
            changeWork,
            insertTech,
            insertWork,
            replaceTech,
            replaceWork,
            deleteListTech,
            deleteListWork,
        }}>
            { children }
        </listContext.Provider>
    )
}

export const useList = () => useContext(listContext)