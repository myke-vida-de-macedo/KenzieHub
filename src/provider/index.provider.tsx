import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { RequestProvider } from "./Request"


interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (

    <AuthProvider>
        <RequestProvider>
            { children }
        </RequestProvider>
    </AuthProvider>
)