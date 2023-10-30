import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useExpenses } from '../context/ExpensesContext'

export interface ExpensesInputProps {
  label: string
  contextKey:
    | 'MortgageOrRent'
    | 'FoodAndGroceries'
    | 'Utilities'
    | 'HomeInsurance'
    | 'ChildcareAndEducation'
    | 'Holidays'
    | 'Pets'
    | 'Gifts'
}

const ExpensesInput: React.FC<ExpensesInputProps> = ({ label, contextKey }) => {
  const {
    setMortgageOrRent,
    setFoodAndGroceries,
    setUtilities,
    setHomeInsurance,
    setChildcareAndEducation,
    setHolidays,
    setPets,
    setGifts,
    mortgageOrRent,
    foodAndGroceries,
    utilities,
    homeInsurance,
    childcareAndEducation,
    holidays,
    pets,
    gifts,
  } = useExpenses()

  const setExpenses =
    contextKey === 'MortgageOrRent'
      ? setMortgageOrRent
      : contextKey === 'FoodAndGroceries'
      ? setFoodAndGroceries
      : contextKey === 'Utilities'
      ? setUtilities
      : contextKey === 'HomeInsurance'
      ? setHomeInsurance
      : contextKey === 'ChildcareAndEducation'
      ? setChildcareAndEducation
      : contextKey === 'Holidays'
      ? setHolidays
      : contextKey === 'Pets'
      ? setPets
      : setGifts

  const expensesValue =
    contextKey === 'MortgageOrRent'
      ? mortgageOrRent
      : contextKey === 'FoodAndGroceries'
      ? foodAndGroceries
      : contextKey === 'Utilities'
      ? utilities
      : contextKey === 'HomeInsurance'
      ? homeInsurance
      : contextKey === 'ChildcareAndEducation'
      ? childcareAndEducation
      : contextKey === 'Gifts'
      ? gifts
      : contextKey === 'Holidays'
      ? holidays
      : pets
  const typeOfExpense =
    contextKey === 'MortgageOrRent'
      ? 'Mortgage or Rent'
      : contextKey === 'FoodAndGroceries'
      ? 'Food and groceries'
      : contextKey === 'Utilities'
      ? 'Utilities'
      : contextKey === 'HomeInsurance'
      ? 'Home Insurance'
      : contextKey === 'ChildcareAndEducation'
      ? 'Child care & education'
      : contextKey === 'Holidays'
      ? 'Holidays'
      : contextKey === 'Pets'
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
        value={expensesValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpenses(parseFloat(e.target.value) || 0)}
        sx={{ mr: 2 }}
      />
      <SelectFrequency />
    </Box>
  )
}

export default ExpensesInput
