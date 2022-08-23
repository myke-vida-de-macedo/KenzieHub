import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import { useModal } from "../../../provider/Modal";
import Nav from "../../../components/Nav";

import { IUpdateTech, useRequest } from "../../../provider/Request";
import { useList } from "../../../provider/List";
import toast from "react-hot-toast";

export default function UpdateTech(){

    const { register, handleSubmit, formState:{ errors:{ title, status } } } = useForm<IUpdateTech>()
    const { closeAllModal, idProduct } = useModal()

    const { updateTech, deleteTech } = useRequest()
    const { replaceTech, deleteListTech } = useList()

    const update = ( tech:IUpdateTech ) => {

        updateTech( tech, idProduct )
            .then( ({ data }) => {

                toast.success("Tecnologia atualizada",{
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                } )

                closeAllModal()
                replaceTech( data, idProduct )
            } )
    }

    const deleteT = () => {

        toast.success("Tecnologia excluida",{
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
        } )

        closeAllModal()
        deleteListTech( idProduct )
        deleteTech( idProduct )
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
                <Modal borderRadiusPosition="bottom" color="black" paddingPosition={{x:true, y:true}} maxWidth="small">
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