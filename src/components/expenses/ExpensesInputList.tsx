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
  const [expanded, setExpanded] = useState<string | boolean>(false)
  const { state } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses, Finance } = state

  const householdExpensesTotal = Object.values(HouseholdExpenses).reduce((acc, value) => acc + value, 0)
  const familyExpensesTotal = Object.values(FamilyExpenses).reduce((acc, value) => acc + value, 0)
  const financeTotal = Object.values(Finance).reduce((acc, value) => acc + value, 0)

  const theme = useTheme()
  const primaryColour = theme.palette.primary.main

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const accordianStyle = {
    boxShadow: 3,
    marginBottom: '6px',
    p: 1,
  }
  const totalExpensesStyle = {
    margin: '0 0 0 auto',
    color: primaryColour,
  }

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

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={accordianStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h3">Household</Typography>
          <Box sx={totalExpensesStyle}>
            <Typography variant="h3">{Math.floor(householdExpensesTotal)}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Mortgage or Rent" contextKey="MORTGAGE_OR_RENT" />
          <ExpenseInput label="Food and Groceries" contextKey="FOOD_GROCERIES" />
          <ExpenseInput label="Utilities" contextKey="UTILITIES" />
          <ExpenseInput label="Home Insurance" contextKey="HOME_INSURANCE" />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={accordianStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h3">Family</Typography>
          <Box sx={totalExpensesStyle}>
            <Typography variant="h3">{Math.floor(familyExpensesTotal)}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Childcare" contextKey="CHILD_CARE_EDUCATION" />
          <ExpenseInput label="Holidays" contextKey="HOLIDAYS" />
          <ExpenseInput label="Pets" contextKey="PETS" />
          <ExpenseInput label="Gifts" contextKey="GIFTS" />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={accordianStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h3">Finance</Typography>
          <Box sx={totalExpensesStyle}>
            <Typography variant="h3">{Math.floor(financeTotal)}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Credit Card" contextKey="CREDITCARD_PAYMENT" />
          <ExpenseInput label="Loan" contextKey="LOAN_REPAYMENT" />
          <ExpenseInput label="Car Finance" contextKey="CAR_FINANCE_PAYMENT" />
          <ExpenseInput label="Other Lending" contextKey="OTHER_LENDING_REPAYMENT" />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default ExpensesInputList
