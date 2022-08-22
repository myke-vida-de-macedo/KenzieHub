import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import Description from "../../components/Description"
import Header from "../../components/Header"
import Modal from "../../components/Modal"
import Title from "../../components/Title"
import TransitionPage from "../../components/TransitionPage"
import { useAuth } from "../../provider/Auth"
import { useModal } from "../../provider/Modal"
import RegisterTech from "../components/RegisterTech"
import UpdateTech from "../components/UpdateTech"
import { HomeStyled } from "./style"

export default function Home(){

    const { auth, logout, checkAuthorization } = useAuth()
    useEffect(()=>{ checkAuthorization("/home") },[auth])
    
    const navigate = useNavigate()

    const { isCreateTech, isUpdateTech, openCreateTech, openUpdateTech } = useModal()

    const user = JSON.parse( localStorage.getItem("@KenzieHub:user") as string )

    const backLogin = () => {

        logout()
        navigate("/login")
    }

    return(
        <TransitionPage>
            <HomeStyled>
                <Modal height={74} borderBottom>
                    <Modal height={120} maxWidth="large" paddingPosition={{x:true}}>
                        <Header 
                            colorTitle="pink"
                            onClick={backLogin}
                            name="KenzieHub" 
                            buttonName="Sair" 
                            colorButton="black" 
                            sizeButton="small"
                        />
                    </Modal>
                </Modal>
                <Modal height={120} borderBottom>
                    <Modal mode="vertical" height={120} maxWidth="large" paddingPosition={{x:true}}>
                        <Title size="large" margin="small" marginPosition={{y:true}}>{user?.name}</Title>
                        <Description marginPosition={{y:true}}>{user?.course_module}</Description>
                    </Modal>
                </Modal>
                <Modal maxWidth="large" paddingPosition={{x:true}}>
                    <Header 
                        onClick={openCreateTech}
                        sizeTitle="medium"
                        name="Tecnologias" 
                        buttonName="+" 
                        colorButton="black" 
                        sizeButton="small"
                    />
                </Modal>
                <Modal maxWidth="large" paddingPosition={{x:true}}>
                    <Modal borderRadiusPosition="all" color="grey" maxWidth="large" paddingPosition={{x:true, y:true}}>
                        <Card onClick={openUpdateTech} name="Azul" description="Teste"/>
                        <Card name="Teste" description="Teste"/>
                    </Modal>
                </Modal>
                {isCreateTech&&<RegisterTech/>}
                {isUpdateTech&&<UpdateTech/>}
            </HomeStyled>
        </TransitionPage>
    )
}