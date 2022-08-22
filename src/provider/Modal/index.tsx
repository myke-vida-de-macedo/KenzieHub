import { createContext, ReactNode, useContext, useState } from "react"

interface IPropsModal {
    children:ReactNode,
}

interface IValueModal {
    isCreateTech:boolean,
    isUpdateTech:boolean,
    closeAllModal:()=> void,
    openCreateTech:()=> void,
    openUpdateTech:()=> void,
}

const modalContext = createContext<IValueModal>( {} as IValueModal )

export const ModalProvider = ( { children }:IPropsModal ) => {

    const [ isCreateTech, setIsCreateTech ] = useState(false)
    const [ isUpdateTech, setIsUpdateTech ] = useState(false)

    const closeAllModal = () => {
        setIsCreateTech(false)
        setIsUpdateTech(false)
    }

    const openCreateTech = () => setIsCreateTech(true)
    const openUpdateTech = () => setIsUpdateTech(true)

    return(
        <modalContext.Provider value={{
            isCreateTech,
            isUpdateTech,
            closeAllModal,
            openCreateTech,
            openUpdateTech
        }}>
            { children }
        </modalContext.Provider>
    )
}

export const useModal = () => useContext(modalContext)