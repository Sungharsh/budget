import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'
import ExpenseInput from './ExpenseInput'

const ExpensesInputList: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const { state } = useIncomeExpenses()
  const { foodAndGroceries, homeInsurance, mortgageOrRent, utilities } = state.HouseholdExpenses
  const { childcareAndEducation, holidays, gifts, pets } = state.FamilyExpenses

  const householdExpense = foodAndGroceries + homeInsurance + mortgageOrRent + utilities
  const familyExpenses = childcareAndEducation + holidays + gifts + pets

  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        mt: 4,
      }}
    >
      <Typography variant="h2" data-testid="custom-element">
        Your Expenses
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        Please fill in your expenses
      </Typography>

      {showAlert && (
        <Alert
          onClose={() => setShowAlert(false)}
          severity="info"
          sx={{ margin: '20px', border: 1, borderColor: '#9edfdf', borderRadius: 1, p: 1 }}
        >
          Amount will be rounded for you
        </Alert>
      )}

      <Accordion sx={{ boxShadow: 3, marginBottom: '6px', p: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h3">Household</Typography>
          <Box sx={{ margin: '0 0 0 auto', color: theme.palette.primary.main }}>
            <Typography variant="h3">{Math.floor(householdExpense)}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Rent" contextKey="MORTGAGE_OR_RENT" />
          <ExpenseInput label="Food" contextKey="FOOD_GROCERIES" />
          <ExpenseInput label="Utilities" contextKey="UTILITIES" />
          <ExpenseInput label="HomeInsurance" contextKey="HOME_INSURANCE" />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, marginBottom: '6px', p: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h3">Family</Typography>
          <Box sx={{ margin: '0 0 0 auto', color: theme.palette.primary.main }}>
            <Typography variant="h3">{Math.floor(familyExpenses)}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Childcare" contextKey="CHILD_CARE_EDUCATION" />
          <ExpenseInput label="Holidays" contextKey="HOLIDAYS" />
          <ExpenseInput label="Pets" contextKey="PETS" />
          <ExpenseInput label="Gifts" contextKey="GIFTS" />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default ExpensesInputList
