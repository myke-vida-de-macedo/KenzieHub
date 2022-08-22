import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { RequestProvider } from "./Request"


interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (

    <RequestProvider>
        <AuthProvider>
            { children }
        </AuthProvider>
    </RequestProvider>
)