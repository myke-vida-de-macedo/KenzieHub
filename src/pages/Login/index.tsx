import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginStyled } from "./style"

import Modal from "../../components/Modal"
import TransitionPage from "../../components/TransitionPage"
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Header from "../../components/Header";

import { useAuth } from "../../provider/Auth";
import { ILoginUser } from "../../provider/Request"
import { shemaLogin } from "../../validation/login.validation"

export default function Login(){

    const navigate = useNavigate()

    const { auth ,login, checkAuthorization } = useAuth()
    useEffect(()=>{ checkAuthorization("/home") },[auth])

    const { register, handleSubmit, formState:{ errors:{ email, password } } } = useForm<ILoginUser>({
        resolver:yupResolver(shemaLogin)
    })

    const goRegister = () => navigate("/register")

    return(
        <TransitionPage>
            <LoginStyled>
                <Modal maxWidth="small" marginPosition={{x:true}}>
                    <Header 
                        colorTitle="pink" 
                        size="large" 
                        name="KenzieHub"/>
                </Modal>
                <Modal 
                    borderRadiusPosition="all" 
                    maxWidth="small" 
                    color="grey" 
                    marginPosition={{x:true}} 
                    paddingPosition={{x:true, y:true}}
                > 
                    <Title 
                        size="large"
                        margin="large" 
                        marginPosition={{y:true, x:true}}
                    >
                        Login
                    </Title>
                    <Form onSubimt={handleSubmit(login)}>
                        <Input 
                            label="Email" 
                            register={register} 
                            name="email" 
                            message={email?.message}
                        />
                        <Input 
                            type="password" 
                            label="Senha " 
                            register={register} 
                            name="password" 
                            message={password?.message}
                        />
                        <Button 
                            type="submit" 
                            color="pink" 
                            fullWidth
                        >
                            Entrar
                        </Button>
                    </Form>
                    <Description marginPosition={{y:true, x:true}}>Ainda não possui uma conta?</Description>
                    <Button 
                        onClick={goRegister} 
                        type="button" 
                        color="grey" 
                        fullWidth
                    >
                        Cadastre-se
                    </Button>
                </Modal>
            </LoginStyled>
        </TransitionPage>
    )
}