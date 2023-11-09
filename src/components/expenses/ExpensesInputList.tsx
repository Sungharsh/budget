import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'
import { CategoryType } from './ExpensesTypes'
import { GetTotalExpenses } from './GetTotalExpenses'
import { RenderAccordianTitle } from './RenderAccordianTitle'
import { RenderExpensesInputs } from './RenderExpensesInputs'

const ExpensesInputList: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const [expanded, setExpanded] = useState<string | boolean>(false)
  const { state, dispatch } = useIncomeExpenses()

  const accordianStyle = {
    boxShadow: 3,
    marginBottom: '6px',
    p: 1,
  }

  const handlePanel = (expensesCategory: CategoryType) => {
    if (expensesCategory === 'HOUSEHOLD') return 'panel1'
    if (expensesCategory === 'FAMILY') return 'panel2'
    if (expensesCategory === 'FINANCE') return 'panel3'
    if (expensesCategory === 'HEALTH') return 'panel4'
    if (expensesCategory === 'TRANSPORT') return 'panel5'
    if (expensesCategory === 'ENTERTAINMENT') return 'panel6'
    if (expensesCategory === 'OTHER') return 'panel7'
    return false
  }

  const getPanel = (expensesCategory: CategoryType) => {
    if (expensesCategory === 'HOUSEHOLD') return expanded === 'panel1'
    if (expensesCategory === 'FAMILY') return expanded === 'panel2'
    if (expensesCategory === 'FINANCE') return expanded === 'panel3'
    if (expensesCategory === 'HEALTH') return expanded === 'panel4'
    if (expensesCategory === 'TRANSPORT') return expanded === 'panel5'
    if (expensesCategory === 'ENTERTAINMENT') return expanded === 'panel6'
    if (expensesCategory === 'OTHER') return expanded === 'panel7'
    return false
  }

  const handleChange = (expensesCategory: CategoryType) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    const panel = handlePanel(expensesCategory)
    setExpanded(isExpanded ? panel : false)
  }

  const renderAccordion = (expensesCategory: CategoryType) => (
    <Accordion expanded={getPanel(expensesCategory)} onChange={handleChange(expensesCategory)} sx={accordianStyle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        {RenderAccordianTitle(expensesCategory)}
        <Box sx={{ margin: '0 0 0 auto' }}>{GetTotalExpenses(expensesCategory)}</Box>
      </AccordionSummary>
      <AccordionDetails>{RenderExpensesInputs(expensesCategory)}</AccordionDetails>
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
          Please fill in all your expenses
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
        {renderAccordion('HEALTH')}
        {renderAccordion('TRANSPORT')}
        {renderAccordion('ENTERTAINMENT')}
        {renderAccordion('OTHER')}
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
