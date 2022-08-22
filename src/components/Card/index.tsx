import Button from "../Button"
import Description from "../Description"
import Title from "../Title"

interface IPropsCard {
    name:string,
    description:string,
}

export default function Card( { name, description }: IPropsCard ){

    return(
        <Button color="black2" maxWidth={700} mode="vertical" fullWidth>
           <Title size="small">{name}</Title>
           <Description>{ description }</Description>
        </Button>
    )
}