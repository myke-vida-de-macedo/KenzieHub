import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import Background from "../../../components/Background";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import { useModal } from "../../../provider/Modal";

export default function RegisterTech(){

    const { register, handleSubmit, formState } = useForm()
    const { closeAllModal } = useModal()


    return(
        <Background>
            <Modal paddingPosition={{x:true}}>
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
                <Modal borderRadiusPosition="bottom" color="black" paddingPosition={{x:true, y:true}} maxWidth="small">
                    <Form>
                        <Input 
                            label="Nome" 
                            register={register} 
                            name="email" 
                            message={undefined}
                        />
                        <Select 
                            label="Selecionar Modulo" 
                            menu={["Iniciante", "Intermediario", "Avançado"]}
                            register={register} 
                            name="course_module" 
                            message={undefined}
                        />
                        <Button type="submit" color="pink" fullWidth>Entrar</Button>
                    </Form>
                </Modal>
            </Modal>
        </Background>
    )
}