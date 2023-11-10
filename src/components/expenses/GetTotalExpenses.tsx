import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'
import { CategoryType } from './ExpensesTypes'

export const GetTotalExpenses = (expensesCategory: CategoryType) => {
  const { state } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses, Finance, HealthAndWellbeing, Transport, Entertainment, Other } = state

  const categoryTotals: Record<CategoryType, number> = {
    HOUSEHOLD: Object.values(HouseholdExpenses).reduce((acc, value) => acc + value, 0),
    FAMILY: Object.values(FamilyExpenses).reduce((acc, value) => acc + value, 0),
    FINANCE: Object.values(Finance).reduce((acc, value) => acc + value, 0),
    HEALTH: Object.values(HealthAndWellbeing).reduce((acc, value) => acc + value, 0),
    TRANSPORT: Object.values(Transport).reduce((acc, value) => acc + value, 0),
    ENTERTAINMENT: Object.values(Entertainment).reduce((acc, value) => acc + value, 0),
    OTHER: Other.anyOtherExpenses,
  }

  const theme = useTheme()
  const primaryColour = { color: theme.palette.primary.main }

  return (
    <Typography variant="h3" sx={primaryColour}>
      {`£ ${Math.floor(categoryTotals[expensesCategory] || 0)}`}
    </Typography>
  )
}
