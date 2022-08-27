import { SyntheticEventTeste } from "../../provider/Modal"
import Button from "../Button"
import Description from "../Description"
import Title from "../Title"

interface IPropsCard {
    name:string,
    description:string,
    onClick?:( Event: SyntheticEventTeste )=> void,
    id:string,
}

export default function Card( { name, description, onClick, id }: IPropsCard ){

    return(
        <Button id={id} onClick={onClick} color="black2" maxWidth={700} mode="vertical" fullWidth>
           <Title size="small">{name}</Title>
           <Description>{ description }</Description>
        </Button>
    )
}