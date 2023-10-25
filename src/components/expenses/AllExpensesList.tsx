import Box from '@mui/material/Box'
import React, { useState } from 'react'

import ExpenseInput from './ExpenseInput'

const AllExpensesList: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        mt: 4,
        pl: 6,
      }}
    >
      <ExpenseInput label="Rent" contextKey="MortgageOrRent" />
      <ExpenseInput label="Food" contextKey="FoodAndGroceries" />
      <ExpenseInput label="Utilities" contextKey="Utilities" />
      <ExpenseInput label="HomeInsurance" contextKey="HomeInsurance" />
    </Box>
  )
}

export default AllExpensesList
