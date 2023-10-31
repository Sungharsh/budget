import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import React, { useState } from 'react'

import { ExpensesContextProvider } from './components/context/ExpensesContext'
import { IncomeProvider } from './components/context/IncomeContext'
import AllExpensesList from './components/expenses/AllExpensesList'
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
      <IncomeProvider>
        <ExpensesContextProvider>
          <MenuBar />
          <Container maxWidth="md">
            <TotalIncomeExpDisplay />
            {flipPage ? <IncomeInput updateFlipPage={updateFlipPage} /> : <AllExpensesList />}
          </Container>
          <Divider sx={{ mt: 6 }} />
        </ExpensesContextProvider>
      </IncomeProvider>
    </>
  )
}

export default App
