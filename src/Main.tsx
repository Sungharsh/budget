import Container from '@mui/material/Container'
import React from 'react'

import { useIncomeExpenses } from './components/context/IncomeExpensesContext'
import ExpensesInputList from './components/expenses/ExpensesInputList'
import IncomeInput from './components/Income/IncomeInput'
import Results from './components/results/Results'
import TotalIncomeExpDisplay from './components/totalIncomeExpenses/TotalIncomeExpDisplay'

const Main: React.FC = () => {
  const { state } = useIncomeExpenses()
  return (
    <Container maxWidth="md" data-testid="main">
      <TotalIncomeExpDisplay />
      {state.HandleFlipPage.flipPage && <IncomeInput />}
      {!state.HandleFlipPage.flipPage && !state.HandleGetResults.getResult && <ExpensesInputList />}
      {state.HandleGetResults.getResult && <Results />}
    </Container>
  )
}

export default Main
