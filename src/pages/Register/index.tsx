import Modal from "../../components/Modal"
import TransitionPage from "../../components/TransitionPage"
import Form from "../../components/Form";
import Input from "../../components/Input";

import { RegisterStyled } from "./style"
import Button from "../../components/Button";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Header from "../../components/Header";
import Select from "../../components/Select"

export default function Register(){

    return(
        <TransitionPage>
            <RegisterStyled>
                <Modal marginPosition={{x:true}}>
                    <Header size="large" name="KenzieHub" buttonName="voltar"/>
                </Modal>
                <Modal color="grey" marginPosition={{x:true}} paddingPosition={{x:true, y:true}}>
                    <Title size="large" margin="large">Crie sua conta</Title> 
                    <Description margin="medium">Rapido e grátis, vamos nessa</Description>
                    <Form>
                        <Input 
                            label="Nome"
                            />
                        <Input 
                            label="Email "
                        />
                        <Input 
                            label="Senha "
                        />
                        <Input 
                            label="Confirmar Senha "
                        />
                        <Input 
                            label="Bio "
                        />
                        <Input 
                            label="Contato "
                        />
                        <Select 
                            label="Selecionar Modulo" 
                            menu={["Primeiro Modulo", "Segundo Modulo", "Terçeiro Modulo", "Quarto Modulo", "Quinto Modulo", "Sexto Modulo"]}
                        />
                        <Button type="submit" color="pink" fullWidth>Cadastrar</Button>
                    </Form>
                </Modal>
            </RegisterStyled>
        </TransitionPage>
    )
}