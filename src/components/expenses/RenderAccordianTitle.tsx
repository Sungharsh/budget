import Typography from '@mui/material/Typography'

import { CategoryType } from './ExpensesTypes'

const AccordianTitle = (expensesCategory: CategoryType) => {
  return <Typography variant="h3">{expensesCategory}</Typography>
}

export const RenderAccordianTitle = (expensesCategory: CategoryType) => {
  return AccordianTitle(expensesCategory)
}
