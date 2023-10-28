import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useExpenses } from '../context/ExpensesContext'

export interface ExpensesInputProps {
  label: string
  contextKey: 'MortgageOrRent' | 'FoodAndGroceries' | 'Utilities' | 'HomeInsurance'
}

const ExpensesInput: React.FC<ExpensesInputProps> = ({ label, contextKey }) => {
  const {
    setMortgageOrRent,
    setFoodAndGroceries,
    mortgageOrRent,
    foodAndGroceries,
    utilities,
    setUtilities,
    homeInsurance,
    setHomeInsurance,
  } = useExpenses()

  const setExpenses =
    contextKey === 'MortgageOrRent'
      ? setMortgageOrRent
      : contextKey === 'FoodAndGroceries'
      ? setFoodAndGroceries
      : contextKey === 'Utilities'
      ? setUtilities
      : setHomeInsurance
  const expensesValue =
    contextKey === 'MortgageOrRent'
      ? mortgageOrRent
      : contextKey === 'FoodAndGroceries'
      ? foodAndGroceries
      : contextKey === 'Utilities'
      ? utilities
      : homeInsurance
  const typeOfExpense =
    contextKey === 'MortgageOrRent'
      ? 'Rent'
      : contextKey === 'FoodAndGroceries'
      ? 'Food'
      : contextKey === 'Utilities'
      ? 'Utilities'
      : 'HomeInsurance'

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

export default ExpensesInput
