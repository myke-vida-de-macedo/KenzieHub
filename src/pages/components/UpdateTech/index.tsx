import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import Nav from "../../../components/Nav";

import { useModal } from "../../../provider/Modal";
import { IUpdateTech, useRequest } from "../../../provider/Request";

import { configToast } from "../../../config/toast.config";

import { shemaUpdateTech } from "../../../validation/UpdateTech.validation";

export default function UpdateTech(){

    const { register, handleSubmit, formState:{ errors:{ title, status } } } = useForm<IUpdateTech>({
        resolver:yupResolver(shemaUpdateTech)
    })
    const { closeAllModal, idProduct } = useModal()

    const { updateTech, deleteTech } = useRequest()

    const update = ( tech:IUpdateTech ) => {

        updateTech( tech, idProduct )
            .then( () => {

                toast.success("Tecnologia atualizada", configToast )
                closeAllModal()
            } )
            .catch( _ => {
                toast.error("Tecnologia não foi possibel atualizar", configToast )
            })
    }

    const deleteT = () => {

        deleteTech( idProduct )
        .then( _ => {
            
                toast.success("Tecnologia excluida", configToast )
                closeAllModal()
            } )
    }

    return(
        <Background>
            <Modal paddingPosition={{x:true}} id="background-2">
                <Modal maxWidth="small">
                    <Header 
                        onClick={closeAllModal}
                        name="Atualizar Tecnologia" 
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
                            disabled
                            label="Nome" 
                            register={register} 
                            name="title" 
                            message={title?.message}
                        />
                        <Select 
                            label="Status" 
                            menu={["Iniciante", "Intermediario", "Avançado"]}
                            register={register} 
                            name="status" 
                            message={status?.message}
                        />
                        <Nav>
                            <Button size="large" type="submit" color="pink">Salvar alterações</Button>
                            <Button onClick={deleteT} size="large" type="button" color="grey">Excluir</Button>
                        </Nav>
                    </Form>
                </Modal>
            </Modal>
        </Background>
    )
}