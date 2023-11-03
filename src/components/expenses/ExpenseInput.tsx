import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useIncomeExpenses } from '../context/IncomeExpensesContext'

export interface ExpensesInputProps {
  label: string
  contextKey:
    | 'MORTGAGE_OR_RENT'
    | 'FOOD_GROCERIES'
    | 'UTILITIES'
    | 'HOME_INSURANCE'
    | 'CHILD_CARE_EDUCATION'
    | 'HOLIDAYS'
    | 'PETS'
    | 'GIFTS'
}

const ExpensesInput: React.FC<ExpensesInputProps> = ({ label, contextKey }) => {
  const { state, dispatch } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses } = state
  const { mortgageOrRent, foodAndGroceries, utilities, homeInsurance } = HouseholdExpenses

  const { childcareAndEducation, holidays, pets, gifts } = FamilyExpenses

  const handleInputExpenses = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0
    dispatch({ type: contextKey, value })
  }

  const expensesValue =
    contextKey === 'MORTGAGE_OR_RENT'
      ? mortgageOrRent
      : contextKey === 'FOOD_GROCERIES'
      ? foodAndGroceries
      : contextKey === 'UTILITIES'
      ? utilities
      : contextKey === 'HOME_INSURANCE'
      ? homeInsurance
      : contextKey === 'CHILD_CARE_EDUCATION'
      ? childcareAndEducation
      : contextKey === 'GIFTS'
      ? gifts
      : contextKey === 'HOLIDAYS'
      ? holidays
      : pets
  const typeOfExpense =
    contextKey === 'MORTGAGE_OR_RENT'
      ? 'Mortgage or Rent'
      : contextKey === 'FOOD_GROCERIES'
      ? 'Food and groceries'
      : contextKey === 'UTILITIES'
      ? 'Utilities'
      : contextKey === 'HOME_INSURANCE'
      ? 'Home Insurance'
      : contextKey === 'CHILD_CARE_EDUCATION'
      ? 'Child care & education'
      : contextKey === 'HOLIDAYS'
      ? 'Holidays'
      : contextKey === 'PETS'
      ? 'Pets'
      : 'Gifts'

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
        value={expensesValue === 0 ? '' : expensesValue}
        onChange={handleInputExpenses}
        sx={{ mr: 2 }}
      />
      <SelectFrequency />
    </Box>
  )
}

export default ExpensesInput
