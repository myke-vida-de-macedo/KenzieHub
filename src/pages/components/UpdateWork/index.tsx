import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { useModal } from "../../../provider/Modal";
import Nav from "../../../components/Nav";
import toast from "react-hot-toast";
import { useList } from "../../../provider/List";
import { IUpdateWork ,useRequest } from "../../../provider/Request";

export default function UpdateWork(){

    const { register, handleSubmit, formState:{ errors:{ title, description, deploy_url } } } = useForm<IUpdateWork>()
    const { closeAllModal, idProduct } = useModal()

    const { updateWork, deleteWork } = useRequest()
    const { replaceWork, deleteListWork } = useList()

    const update = ( tech:IUpdateWork ) => {

        updateWork( tech, idProduct )
            .then( ({ data }) => {

                toast.success("Trabalho atualizada",{
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                } )

                closeAllModal()
                replaceWork( data, idProduct )
            } )
    }

    const deleteW = () => {

        toast.success("Trabalho excluida",{
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
        } )

        closeAllModal()
        deleteListWork( idProduct )
        deleteWork( idProduct )
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
                <Modal borderRadiusPosition="bottom" color="black" paddingPosition={{x:true, y:true}} maxWidth="small">
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