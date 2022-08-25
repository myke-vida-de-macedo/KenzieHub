import { createContext, ReactNode, useContext, useState } from "react"

interface IPropsModal {
    children:ReactNode,
}

interface IValueModal {
    idProduct:string,
    isCreateTech:boolean,
    isUpdateTech:boolean,
    isCreateWork:boolean,
    isUpdateWork:boolean,
    closeAllModal:()=> void,
    openCreateTech:()=> void,
    openUpdateTech:( { target, nativeEvent }: IPropsEvent )=> void,
    openCreateWork:()=> void,
    openUpdateWork:( { target, nativeEvent }: IPropsEvent )=> void,
}

export interface IPropsEvent {
    target:ITarget,
    nativeEvent:INativeEvent
}

interface ITarget {
    nodeName:string
    id:string
}

interface INativeEvent {
    path:Element[]
}

const modalContext = createContext<IValueModal>( {} as IValueModal )

export const ModalProvider = ( { children }:IPropsModal ) => {

    const [ isCreateTech, setIsCreateTech ] = useState<boolean>(false)
    const [ isUpdateTech, setIsUpdateTech ] = useState<boolean>(false)
    const [ isCreateWork, setIsCreateWork ] = useState<boolean>(false)
    const [ isUpdateWork, setIsUpdateWork ] = useState<boolean>(false)
    
    const [ idProduct, setIdProduct] = useState<string>("")

    const closeAllModal = () => {
        setIsCreateTech(false)
        setIsUpdateTech(false)
        setIsCreateWork(false)
        setIsUpdateWork(false)
    }

    const openCreateTech = () => {    
        setIsCreateTech(true)
    }
    const openUpdateTech = ( { target, nativeEvent }: IPropsEvent) => {

        let id = ""

        if( target.nodeName === "BUTTON" ){
            id = target.id
        }
        if( target.nodeName === "DIV"  ){
            id = nativeEvent.path[1].id 
        }
   
        setIdProduct( id )
        setIsUpdateTech(true)
    }

    const openCreateWork = () => {
        setIsCreateWork(true)
    }
    const openUpdateWork = ( { target, nativeEvent }:IPropsEvent) => {

        let id = ""

        if( target.nodeName === "BUTTON" ){
            id = target.id
        }
        if( target.nodeName === "DIV"  ){
            id = nativeEvent.path[1].id 
        }
   
        setIdProduct( id )
        setIsUpdateWork(true)
    }

    return(
        <modalContext.Provider value={{
            idProduct,
            isCreateTech,
            isUpdateTech,
            isCreateWork,
            isUpdateWork,
            closeAllModal,
            openCreateTech,
            openUpdateTech,
            openCreateWork,
            openUpdateWork
        }}>
            { children }
        </modalContext.Provider>
    )
}

export const useModal = () => useContext(modalContext)

