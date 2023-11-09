import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'
import { CategoryType } from './ExpensesTypes'

export const GetTotalExpenses = (expensesCategory: CategoryType) => {
  const { state } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses, Finance, HealthAndWellbeing, Transport, Entertainment, Other } = state

  const householdExpensesTotal = Object.values(HouseholdExpenses).reduce((acc, value) => acc + value, 0)
  const familyExpensesTotal = Object.values(FamilyExpenses).reduce((acc, value) => acc + value, 0)
  const financeTotal = Object.values(Finance).reduce((acc, value) => acc + value, 0)
  const healthAndWellBeingTotal = Object.values(HealthAndWellbeing).reduce((acc, value) => acc + value, 0)
  const transportTotal = Object.values(Transport).reduce((acc, value) => acc + value, 0)
  const entertainmentTotal = Object.values(Entertainment).reduce((acc, value) => acc + value, 0)
  const otherTotal = Other.anyOtherExpenses
  const theme = useTheme()

  const primaryColour = { color: theme.palette.primary.main }

  if (expensesCategory === 'HOUSEHOLD') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(householdExpensesTotal)}`}
      </Typography>
    )
  } else if (expensesCategory === 'FAMILY') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(familyExpensesTotal)}`}
      </Typography>
    )
  } else if (expensesCategory === 'FINANCE') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(financeTotal)}`}
      </Typography>
    )
  } else if (expensesCategory === 'HEALTH') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(healthAndWellBeingTotal)}`}
      </Typography>
    )
  } else if (expensesCategory === 'TRANSPORT') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(transportTotal)}`}
      </Typography>
    )
  } else if (expensesCategory === 'ENTERTAINMENT') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(entertainmentTotal)}`}
      </Typography>
    )
  } else if (expensesCategory === 'OTHER') {
    return (
      <Typography variant="h3" sx={primaryColour}>
        {`£ ${Math.floor(otherTotal)}`}
      </Typography>
    )
  } else {
    return 0
  }
}
