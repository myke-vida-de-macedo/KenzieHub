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

import { useForm } from "react-hook-form";
import { useRequest } from "../../provider/Request";
import { yupResolver } from "@hookform/resolvers/yup"
import { shemaRegister } from "../../validation/register.validation";
import { useNavigate } from "react-router-dom";

export interface ICreateUser {
    email: string,
    password: string,
    confirmPassword: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string,
}


export default function Register(){

    const navigate = useNavigate()
    const { createUser } = useRequest()


    const { register, handleSubmit, formState:{ errors:{ name, email, password, confirmPassword, bio, contact, course_module } } } = useForm<ICreateUser>({
        resolver:yupResolver(shemaRegister)
    })

    const handleCreateUser = ( { confirmPassword, ...propertiesData }:ICreateUser ) => {

        console.log( propertiesData )

        createUser( propertiesData )
            .then( result => console.log( result ) )
            .catch( _ => {} )
    }

    const goLogin = () => navigate("/login")

    return(
        <TransitionPage>
            <RegisterStyled>
                <Modal maxWidth="small" marginPosition={{x:true}}>
                    <Header 
                        colorTitle="pink"
                        onClick={goLogin}
                        size="large" 
                        name="KenzieHub" 
                        buttonName="voltar" 
                        colorButton="black" 
                        sizeButton="small"
                    />
                </Modal>
                <Modal 
                    maxWidth="small"
                    color="grey" 
                    marginPosition={{x:true}} 
                    paddingPosition={{x:true, y:true}}
                >
                    <Title marginPosition={{y:true, x:true}} size="large" margin="large">Crie sua conta</Title> 
                    <Description marginPosition={{y:true, x:true}} margin="medium">Rapido e grátis, vamos nessa</Description>
                    <Form onSubimt={handleSubmit(handleCreateUser)}>
                        <Input 
                            label="Nome"
                            register={register} 
                            name="name" 
                            message={name?.message}
                            />
                        <Input 
                            label="Email"
                            register={register} 
                            name="email" 
                            message={email?.message}
                        />
                        <Input 
                            type="password"
                            label="Senha"
                            register={register} 
                            name="password" 
                            message={password?.message}
                        />
                        <Input 
                            type="password" 
                            label="Confirmar Senha"
                            register={register} 
                            name="confirmPassword" 
                            message={confirmPassword?.message}
                        />
                        <Input 
                            label="Bio"
                            register={register} 
                            name="bio" 
                            message={bio?.message}
                        />
                        <Input 
                            label="Contato"
                            register={register} 
                            name="contact" 
                            message={contact?.message}
                        />
                        <Select 
                            label="Selecionar Modulo" 
                            menu={["Primeiro Modulo", "Segundo Modulo", "Terçeiro Modulo", "Quarto Modulo", "Quinto Modulo", "Sexto Modulo"]}
                            register={register} 
                            name="course_module" 
                            message={course_module?.message}
                        />
                        <Button 
                            type="submit" 
                            color="pink" 
                            fullWidth
                        >
                            Cadastrar
                        </Button>
                    </Form>
                </Modal>
            </RegisterStyled>
        </TransitionPage>
    )
}