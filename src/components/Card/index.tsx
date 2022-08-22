import Button from "../Button"
import Description from "../Description"
import Title from "../Title"

interface IPropsCard {
    name:string,
    description:string,
    onClick?:()=> void,
}

export default function Card( { name, description, onClick }: IPropsCard ){

    return(
        <Button onClick={onClick} color="black2" maxWidth={700} mode="vertical" fullWidth>
           <Title size="small">{name}</Title>
           <Description>{ description }</Description>
        </Button>
    )
}