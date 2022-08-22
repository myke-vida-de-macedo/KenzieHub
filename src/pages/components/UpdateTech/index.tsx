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

export default function UpdateTech(){

    const { register, handleSubmit, formState } = useForm()
    const { closeAllModal } = useModal()


    return(
        <Background>
            <Modal paddingPosition={{x:true}}>
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
                    <Form>
                        <Input 
                            label="Nome do Projeto" 
                            register={register} 
                            name="email" 
                            message={undefined}
                        />
                        <Select 
                            label="Status" 
                            menu={["Iniciante", "Intermediario", "Avançado"]}
                            register={register} 
                            name="status" 
                            message={undefined}
                        />
                        <Nav>
                            <Button size="large" type="submit" color="pink">Salvar alterações</Button>
                            <Button size="large" type="submit" color="grey">Excluir</Button>
                        </Nav>
                    </Form>
                </Modal>
            </Modal>
        </Background>
    )
}