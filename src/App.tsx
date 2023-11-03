import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import React, { useState } from 'react'

import { IncomeExpensesContextProvider } from './components/context/IncomeExpensesContext'
import ExpensesInputList from './components/expenses/ExpensesInputList'
import IncomeInput from './components/Income/IncomeInput'
import TotalIncomeExpDisplay from './components/Income/TotalIncomeExpDisplay'
import MenuBar from './components/navbar/AppBar'

const App: React.FC = () => {
  const [flipPage, setFlipPage] = useState<boolean>(true)

  const updateFlipPage = () => {
    if (flipPage) {
      setFlipPage(false)
    } else {
      setFlipPage(true)
    }
  }

  return (
    <>
      <IncomeExpensesContextProvider>
        <MenuBar />
        <Container maxWidth="md">
          <TotalIncomeExpDisplay />
          {flipPage ? <IncomeInput updateFlipPage={updateFlipPage} /> : <ExpensesInputList />}
        </Container>
        <Divider sx={{ mt: 6 }} />
      </IncomeExpensesContextProvider>
    </>
  )
}

export default App
