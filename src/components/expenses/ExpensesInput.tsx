import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useIncomeExpenses } from '../context/IncomeExpensesContext'
import { ExpensesInputProps } from './ExpensesTypes'

const ExpensesInput: React.FC<ExpensesInputProps> = ({ label, contextKey }) => {
  const { state, dispatch } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses, Finance, HealthAndWellbeing, Transport, Entertainment, Other } = state

  const { mortgageOrRent, foodAndGroceries, utilities, homeInsurance } = HouseholdExpenses
  const { childcareAndEducation, holidays, pets, gifts } = FamilyExpenses
  const { creditCardPayment, loanRepayment, carFinancePayment, otherLendingRepayment } = Finance
  const { gym, healthInsurance, lifeInsurance, treatments } = HealthAndWellbeing
  const { carInsurance, carMaintenance, parking, publicTransport } = Transport
  const { hobbies, internetTVandMobile, outingsGoingOut, subscriptions } = Entertainment

  const { anyOtherExpenses } = Other

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
      : contextKey === 'OTHER_LENDING_REPAYMENT'
      ? otherLendingRepayment
      : contextKey === 'GYM'
      ? gym
      : contextKey === 'HEALTH_INSURANCE'
      ? healthInsurance
      : contextKey === 'LIFE_INSURANCE'
      ? lifeInsurance
      : contextKey === 'TREATMENTS'
      ? treatments
      : contextKey === 'CAR_INSURANCE'
      ? carInsurance
      : contextKey === 'CAR_MAINTENANCE'
      ? carMaintenance
      : contextKey === 'PUBLIC_TRANSPORT'
      ? publicTransport
      : contextKey === 'PARKING'
      ? parking
      : contextKey === 'INTERNET_TV_MOBILE'
      ? internetTVandMobile
      : contextKey === 'SUBSCRIPTIONS'
      ? subscriptions
      : contextKey === 'HOBBIES'
      ? hobbies
      : contextKey === 'OUTINGS_GOING_OUT'
      ? outingsGoingOut
      : anyOtherExpenses

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
    GYM: 'Gym',
    HEALTH_INSURANCE: 'Health insurance',
    LIFE_INSURANCE: 'Life insurance',
    TREATMENTS: 'Treatments',
    CAR_INSURANCE: 'Car insurance',
    CAR_MAINTENANCE: 'Car Maintanace',
    PUBLIC_TRANSPORT: 'Public transport',
    PARKING: 'Parking',
    INTERNET_TV_MOBILE: 'Internet, TV, Mobile',
    SUBSCRIPTIONS: 'Subscriptions',
    HOBBIES: 'Hobbies',
    OUTINGS_GOING_OUT: 'Outing',
    ANY_OTHER_EXPENSES: 'Any other Expenses',
  }[contextKey]

  const handleInputExpenses = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 6) return
    const value = parseFloat(e.target.value) || 0
    dispatch({ type: contextKey, value })
  }

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
