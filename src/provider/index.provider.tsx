import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { ModalProvider } from "./Modal"
import { RequestProvider } from "./Request"


interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (

    <RequestProvider>
        <AuthProvider>
            <ModalProvider>
                { children }
            </ModalProvider>
        </AuthProvider>
    </RequestProvider>
)