import Container from '@mui/material/Container'
import React from 'react'

import { useIncomeExpenses } from './components/context/IncomeExpensesContext'
import ExpensesInputList from './components/expenses/ExpensesInputList'
import IncomeInput from './components/Income/IncomeInput'
import TotalIncomeExpDisplay from './components/totalIncomeExpenses/TotalIncomeExpDisplay'

const Main: React.FC = () => {
  const { state } = useIncomeExpenses()
  return (
    <Container maxWidth="md">
      <TotalIncomeExpDisplay />
      {state.HandleFlipPage.flipPage ? <IncomeInput /> : <ExpensesInputList />}
    </Container>
  )
}

export default Main
