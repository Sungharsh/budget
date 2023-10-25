import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useExpenses } from '../context/ExpensesContext'

interface ExpenseInputProps {
  label: string
  contextKey: 'MortgageOrRent' | 'FoodAndGroceries'
}

const ExpenseInput: React.FC<ExpenseInputProps> = ({ label, contextKey }) => {
  const { setMortgageOrRent, setFoodAndGroceries, mortgageOrRent, foodAndGroceries } = useExpenses()

  const setExpenses = contextKey === 'MortgageOrRent' ? setMortgageOrRent : setFoodAndGroceries
  const expensesValue = contextKey === 'MortgageOrRent' ? mortgageOrRent : foodAndGroceries
  const typeOfExpense = contextKey === 'MortgageOrRent' ? 'Rent' : 'Food'

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        mt: 4,
        pl: 6,
      }}
    >
      <p>{typeOfExpense}</p>
      <TextField
        type="number"
        variant="outlined"
        size="small"
        id="outlined-basic"
        label={label}
        value={expensesValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpenses(parseFloat(e.target.value) || 0)}
      />
      <SelectFrequency />
    </Box>
  )
}

export default ExpenseInput
