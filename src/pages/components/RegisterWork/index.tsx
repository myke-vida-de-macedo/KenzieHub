import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { useModal } from "../../../provider/Modal";
import { useList } from "../../../provider/List";
import { useRequest } from "../../../provider/Request";
import { IWork } from "../../../provider/Request"
import toast from "react-hot-toast";

export default function RegisterWork(){

    const { register, handleSubmit, formState:{ errors:{ title, description, deploy_url } } } = useForm<IWork>()

    const { closeAllModal } = useModal()
    const { createWork } = useRequest()
    const { insertWork } = useList()

    const create = ( data:IWork ):void => {

        createWork( data )
            .then( ({ data:{ user, ...infowork } }) => {

                toast.success("Trabalho cadastrada",{
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                } )
                closeAllModal()
                insertWork( infowork )
            })
    }
    return(
        <Background>
            <Modal paddingPosition={{x:true}} id="background-2">
                <Modal maxWidth="small">
                    <Header 
                        onClick={closeAllModal}
                        name="Cadastrar Trabalho" 
                        buttonName="X" 
                        color="grey" 
                        sizeTitle="small" 
                        marginTitle="large"
                        marginPositionTitle={{x:true}}
                    />
                </Modal>
                <Modal borderRadiusPosition="bottom" color="black" paddingPosition={{x:true, y:true}} maxWidth="small">
                    <Form onSubimt={handleSubmit(create)}>
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
                        <Button type="submit" color="pink" fullWidth>Cadastrar Trabalho</Button>
                    </Form>
                </Modal>
            </Modal>
        </Background>
    )
}