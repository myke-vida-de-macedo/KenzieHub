import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Nav from "../../../components/Nav";

import { useModal } from "../../../provider/Modal";
import { IUpdateWork ,useRequest } from "../../../provider/Request";

import { configToast } from "../../../config/toast.config";

import { shemaUpdateWork } from "../../../validation/UpdateWork.validation";

export default function UpdateWork(){

    const { register, handleSubmit, formState:{ errors:{ title, description, deploy_url } } } = useForm<IUpdateWork>({
        resolver:yupResolver(shemaUpdateWork)
    })

    const { closeAllModal, idProduct } = useModal()

    const { updateWork, deleteWork } = useRequest()

    const update = ( tech:IUpdateWork ) => {

        updateWork( tech, idProduct )
            .then( () => {

                toast.success("Trabalho atualizado", configToast )

                closeAllModal()
            } )
            .catch( _ => {
                toast.error("Trabalho não foi possibel atualizar", configToast )
            })
    }

    const deleteW = () => {

        deleteWork( idProduct )
        .then( _ => {
            
                toast.success("Trabalho excluida", configToast )
                closeAllModal()
            } )
    }

    return(
        <Background>
            <Modal paddingPosition={{x:true}} id="background-2">
                <Modal maxWidth="small">
                    <Header 
                        onClick={closeAllModal}
                        name="Atualizar Trabalho" 
                        buttonName="X" 
                        color="grey" 
                        sizeTitle="small" 
                        marginTitle="large"
                        marginPositionTitle={{x:true}}
                    />
                </Modal>
                <Modal 
                    borderRadiusPosition="bottom" 
                    color="black" 
                    paddingPosition={{x:true, y:true}} 
                    maxWidth="small"
                >
                    <Form onSubimt={handleSubmit(update)}>
                    <Input 
                            label="Nome" 
                            register={register} 
                            name="title" 
                            message={title?.message}
                        />
                        <Input 
                            label="Descrição" 
                            register={register} 
                            name="description" 
                            message={description?.message}
                        />
                        <Input 
                            label="Deploy" 
                            register={register} 
                            name="deploy_url" 
                            message={deploy_url?.message}
                        />
                        <Nav>
                            <Button size="large" type="submit" color="pink">Salvar alterações</Button>
                            <Button onClick={deleteW} size="large" type="button" color="grey">Excluir</Button>
                        </Nav>
                    </Form>
                </Modal>
            </Modal>
        </Background>
    )
}