import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'
import ExpenseInput from './ExpenseInput'

const ExpensesInputList: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const [expanded, setExpanded] = useState<string | boolean>(false)
  const { state, dispatch } = useIncomeExpenses()
  const { HouseholdExpenses, FamilyExpenses, Finance } = state

  const householdExpensesTotal = Object.values(HouseholdExpenses).reduce((acc, value) => acc + value, 0)
  const familyExpensesTotal = Object.values(FamilyExpenses).reduce((acc, value) => acc + value, 0)
  const financeTotal = Object.values(Finance).reduce((acc, value) => acc + value, 0)

  const theme = useTheme()
  const primaryColour = { color: theme.palette.primary.main }
  type CategoryType = 'HOUSEHOLD' | 'FAMILY' | 'FINANCE'

  const handlePanel = (expensesCategory: CategoryType) => {
    if (expensesCategory === 'HOUSEHOLD') return 'panel1'
    if (expensesCategory === 'FAMILY') return 'panel2'
    if (expensesCategory === 'FINANCE') return 'panel3'
    return false
  }

  const handleChange = (expensesCategory: CategoryType) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    const panel = handlePanel(expensesCategory)
    setExpanded(isExpanded ? panel : false)
  }

  const accordianStyle = {
    boxShadow: 3,
    marginBottom: '6px',
    p: 1,
  }

  const getPanel = (expensesCategory: CategoryType) => {
    if (expensesCategory === 'HOUSEHOLD') return expanded === 'panel1'
    if (expensesCategory === 'FAMILY') return expanded === 'panel2'
    if (expensesCategory === 'FINANCE') return expanded === 'panel3'
    return false
  }

  const renderAccordianTitle = (expensesCategory: CategoryType) =>
    expensesCategory === 'HOUSEHOLD' ? (
      <Typography variant="h3">Household</Typography>
    ) : expensesCategory === 'FAMILY' ? (
      <Typography variant="h3">Family</Typography>
    ) : (
      <Typography variant="h3">Finance</Typography>
    )

  const getTotalExpenses = (expensesCategory: CategoryType) => {
    if (expensesCategory === 'HOUSEHOLD') {
      return (
        <Typography variant="h3" sx={primaryColour}>
          {Math.floor(householdExpensesTotal)}
        </Typography>
      )
    } else if (expensesCategory === 'FAMILY') {
      return (
        <Typography variant="h3" sx={primaryColour}>
          {Math.floor(familyExpensesTotal)}
        </Typography>
      )
    } else if (expensesCategory === 'FINANCE') {
      return (
        <Typography variant="h3" sx={primaryColour}>
          {Math.floor(financeTotal)}
        </Typography>
      )
    }
    return 0
  }

  const renderExpensesInputs = (expensesCategory: CategoryType) => {
    if (expensesCategory === 'HOUSEHOLD') {
      return (
        <>
          <ExpenseInput label="Mortgage or Rent" contextKey="MORTGAGE_OR_RENT" />
          <ExpenseInput label="Food and Groceries" contextKey="FOOD_GROCERIES" />
          <ExpenseInput label="Utilities" contextKey="UTILITIES" />
          <ExpenseInput label="Home Insurance" contextKey="HOME_INSURANCE" />
        </>
      )
    } else if (expensesCategory === 'FAMILY') {
      return (
        <>
          <ExpenseInput label="Childcare" contextKey="CHILD_CARE_EDUCATION" />
          <ExpenseInput label="Holidays" contextKey="HOLIDAYS" />
          <ExpenseInput label="Pets" contextKey="PETS" />
          <ExpenseInput label="Gifts" contextKey="GIFTS" />
        </>
      )
    } else {
      return (
        <>
          <ExpenseInput label="Credit Card" contextKey="CREDITCARD_PAYMENT" />
          <ExpenseInput label="Loan" contextKey="LOAN_REPAYMENT" />
          <ExpenseInput label="Car Finance" contextKey="CAR_FINANCE_PAYMENT" />
          <ExpenseInput label="Other Lending" contextKey="OTHER_LENDING_REPAYMENT" />
        </>
      )
    }
  }

  const renderAccordion = (expensesCategory: CategoryType) => (
    <Accordion expanded={getPanel(expensesCategory)} onChange={handleChange(expensesCategory)} sx={accordianStyle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        {renderAccordianTitle(expensesCategory)}
        <Box sx={{ margin: '0 0 0 auto' }}>{getTotalExpenses(expensesCategory)}</Box>
      </AccordionSummary>
      <AccordionDetails>{renderExpensesInputs(expensesCategory)}</AccordionDetails>
    </Accordion>
  )

  const handleFlipPage = () => {
    const getFlipPage = state.HandleFlipPage.flipPage
    const value = !getFlipPage
    dispatch({ type: 'FLIP_PAGE', value })
  }

  return (
    <>
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

        {renderAccordion('HOUSEHOLD')}
        {renderAccordion('FAMILY')}
        {renderAccordion('FINANCE')}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="outlined" size="large" onClick={handleFlipPage} sx={{ mr: 4, pl: 2 }}>
          Previous
        </Button>
        <Button variant="contained" size="large">
          Check Results
        </Button>
      </Box>
    </>
  )
}

export default ExpensesInputList
