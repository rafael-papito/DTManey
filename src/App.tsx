import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import {Header} from './components/Header';
import { Deshboard } from './components/Deshboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
  const [isNewTransctionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() { 
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Deshboard/>
      <NewTransactionModal
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </>
  );
}
