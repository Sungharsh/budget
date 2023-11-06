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
    | 'CREDITCARD_PAYMENT'
    | 'LOAN_REPAYMENT'
    | 'CAR_FINANCE_PAYMENT'
    | 'OTHER_LENDING_REPAYMENT'
}

const ExpensesInput: React.FC<ExpensesInputProps> = ({ label, contextKey }) => {
  const { state, dispatch } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses, Finance } = state
  const { mortgageOrRent, foodAndGroceries, utilities, homeInsurance } = HouseholdExpenses

  const { childcareAndEducation, holidays, pets, gifts } = FamilyExpenses

  const { creditCardPayment, loanRepayment, carFinancePayment, otherLendingRepayment } = Finance

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
      : contextKey === 'PETS'
      ? pets
      : contextKey === 'CREDITCARD_PAYMENT'
      ? creditCardPayment
      : contextKey === 'LOAN_REPAYMENT'
      ? loanRepayment
      : contextKey === 'CAR_FINANCE_PAYMENT'
      ? carFinancePayment
      : otherLendingRepayment

  const typeOfExpense = {
    MORTGAGE_OR_RENT: 'Mortgage or Rent',
    FOOD_GROCERIES: 'Food and Groceries',
    UTILITIES: 'Utilities',
    HOME_INSURANCE: 'Home Insurance',
    CHILD_CARE_EDUCATION: 'Child Care & Education',
    HOLIDAYS: 'Holidays',
    PETS: 'Pets',
    GIFTS: 'Gifts',
    CREDITCARD_PAYMENT: 'Credit Card',
    LOAN_REPAYMENT: 'Loan',
    CAR_FINANCE_PAYMENT: 'Car Finance',
    OTHER_LENDING_REPAYMENT: 'Other Lendings',
  }[contextKey]

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
