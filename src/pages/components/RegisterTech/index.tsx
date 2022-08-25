import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";

import { useModal } from "../../../provider/Modal";
import { useRequest } from "../../../provider/Request";
import { ITech } from "../../../provider/Request"

import { configToast } from "../../../config/toast.config";

import { shemaRegisterTech } from "../../../validation/RegisterTech.validation";

export default function RegisterTech(){

    const { register, handleSubmit, formState:{ errors:{ title, status } } } = useForm<ITech>({
        resolver:yupResolver(shemaRegisterTech)
    })

    const { closeAllModal } = useModal()
    const { createTech } = useRequest()

    const create = ( data:ITech ):void => {

        createTech( data )
            .then( () => {

                toast.success("Tecnologia cadastrada", configToast )
                closeAllModal()
            })
            .catch( _ => {
                toast.error("Tecnologia já existe", configToast)
            })
    }

    return(
        <Background>
            <Modal paddingPosition={{x:true}} id="background-2">
                <Modal maxWidth="small">
                    <Header 
                        onClick={closeAllModal}
                        name="Cadastrar Tecnologia" 
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
                    <Form onSubimt={handleSubmit(create)}>
                        <Input 
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
                        <Button type="submit" color="pink" fullWidth>Cadastrar tecnologia</Button>
                    </Form>
                </Modal>
            </Modal>
        </Background>
    )
}