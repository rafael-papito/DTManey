import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, ContainerButton, RadioBox } from './styles';
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { api } from '../../services/api';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setcategory] = useState('')
    const [type, setType] = useState('deposit');
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()
        const data = {
            title,
            value,
            category,
            type,
        }
        api.post('/transition', data)
    }
    return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
    <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Trasação</h2>
        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
        <ContainerButton>
            <RadioBox
                type="button"
                onClick={() => {setType('deposit');}}
                isActive={type == 'deposit'}
                activeColor="green"
            >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>
            <RadioBox
                type="button" 
                onClick={() => {setType('withdeaw');}}
                isActive={type == 'withdeaw'}
                activeColor="red"
            >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
            </RadioBox>
        </ContainerButton>
        <input placeholder="Categoria" value={category} onChange={event => setcategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
    </Container>

    </Modal>
   )
}