import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import React, { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";



Modal.setAppElement('#root')


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
