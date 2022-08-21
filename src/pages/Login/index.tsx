import Modal from "../../components/Modal"
import TransitionPage from "../../components/TransitionPage"
import Form from "../../components/Form";
import Input from "../../components/Input";

import { LoginStyled } from "./style"
import Button from "../../components/Button";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Header from "../../components/Header";

export default function Login(){

    return(
        <TransitionPage>
            <LoginStyled>
                <Modal marginPosition={{x:true}}>
                    <Header size="large" name="KenzieHub"/>
                </Modal>
                <Modal color="grey" marginPosition={{x:true}} paddingPosition={{x:true, y:true}}> 
                    <Title size="large" margin="large">Login</Title>
                    <Form>
                        <Input label="Email"/>
                        <Input label="Senha "/>
                        <Button type="submit" color="pink" fullWidth>Entrar</Button>
                    </Form>
                    <Description>Ainda não possui uma conta?</Description>
                    <Button type="button" color="grey" fullWidth>Cadastre-se</Button>
                </Modal>
            </LoginStyled>
        </TransitionPage>
    )
}