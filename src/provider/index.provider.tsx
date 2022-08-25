import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { ListProvider } from "./List"
import { ModalProvider } from "./Modal"
import { RequestProvider } from "./Request"


interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (

    <RequestProvider>
        <AuthProvider>
            <ModalProvider>
                <ListProvider>
                    { children }
                </ListProvider>
            </ModalProvider>
        </AuthProvider>
    </RequestProvider>
)