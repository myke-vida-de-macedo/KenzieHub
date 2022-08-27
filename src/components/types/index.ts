import { AxiosResponse } from "axios"
import { BaseSyntheticEvent } from "react"

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

interface EventTeste<T = Element, E = Event> extends BaseSyntheticEvent<E, ITarget & T, ITarget> {}

type removeNativeEvent = Omit<EventTeste, "nativeEvent">

export interface SyntheticEventTeste extends removeNativeEvent {
    nativeEvent:INativeEvent
}

export type IRegister = any

export type IPromise = Promise<AxiosResponse<any, any>>