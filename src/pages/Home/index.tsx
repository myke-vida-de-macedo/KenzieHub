import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import Description from "../../components/Description"
import Header from "../../components/Header"
import Modal from "../../components/Modal"
import Title from "../../components/Title"
import TransitionPage from "../../components/TransitionPage"
import { useAuth } from "../../provider/Auth"
import { useList } from "../../provider/List"
import { useModal } from "../../provider/Modal"
import Navgation from "../components/Navgation"
import RegisterTech from "../components/RegisterTech"
import UpdateTech from "../components/UpdateTech"
import { HomeStyled } from "./style"

import { v4 as uuid } from "uuid"

import RegisterWork from "../components/RegisterWork"
import UpdateWork from "../components/UpdateWork"

export default function Home(){
    
    const { auth, logout, checkAuthorization } = useAuth()
    useEffect(()=>{ checkAuthorization("/home") },[auth])
    
    const { type, tech, work, changeTech, changeWork, upadateTechToWork } = useList()
    useEffect(()=>{ upadateTechToWork() },[])
    
    const {   
        isCreateTech, 
        isUpdateTech, 
        openCreateTech, 
        openUpdateTech, 
        isCreateWork, 
        isUpdateWork, 
        openCreateWork, 
        openUpdateWork 
    } = useModal()
    
    const navigate = useNavigate()
    const backLogin = () => {
        logout()
        navigate("/login")
    }

    const user = JSON.parse( localStorage.getItem("@KenzieHub:user") as string )

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
                <Modal borderBottom height={74}>
                    <Navgation onTech={changeTech} onWork={changeWork} onCreateTechOrWork={ type === "Tech" ? openCreateTech : openCreateWork }/>
                </Modal>
                <Modal height={32}>
                    <Modal height={32} maxWidth="large" paddingPosition={{x:true}} mode="vertical">
                        <Title size="large">{type === "Tech" ? "Tecnologias" : "Trabalhos" }</Title>
                    </Modal>
                </Modal>
                <Modal maxWidth="large" paddingPosition={{x:true}}>
                    <Modal 
                        borderRadiusPosition="all" 
                        color="grey" 
                        maxWidth="large" 
                        paddingPosition={{x:true, y:true}} 
                        marginPosition={{y:true}}
                    >   
                    {
                        type === "Tech" ?
                            
                            tech?.map( ({ title, status, id }) => <Card key={uuid()} id={id} onClick={openUpdateTech} name={title} description={status}/> )
                        :

                            work?.map( ({ title, description, id }) => <Card key={uuid()} id={id} onClick={openUpdateWork} name={title} description={description}/> )
                    }
                        
                        
                    </Modal>
                </Modal>
                {isCreateTech&&<RegisterTech/>}
                {isUpdateTech&&<UpdateTech/>}
                {isCreateWork&&<RegisterWork/>}
                {isUpdateWork&&<UpdateWork/>}
            </HomeStyled>
        </TransitionPage>
    )
}