import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

import { useExpenses } from '../context/ExpensesContext'
import ExpenseInput from './ExpenseInput'

const AllExpensesList: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const { mortgageOrRent, foodAndGroceries, utilities, homeInsurance } = useExpenses()
  const householdExpense = mortgageOrRent + foodAndGroceries + utilities + homeInsurance

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        mt: 4,
      }}
    >
      <Typography component="h2" variant="h6" sx={{ fontWeight: 900, fontSize: '22px' }} data-testid="custom-element">
        Your Expenses
      </Typography>
      <Typography component="p" sx={{ fontSize: '17px' }}>
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

      <Accordion sx={{ boxShadow: 3, marginBottom: '2px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ fontWeight: 900, fontSize: '22px' }}>Household</Typography>
          <Box sx={{ fontSize: '22px', margin: '0 0 0 auto', color: '#008080', fontWeight: 900 }}>
            {householdExpense}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Rent" contextKey="MortgageOrRent" />
          <ExpenseInput label="Food" contextKey="FoodAndGroceries" />
          <ExpenseInput label="Utilities" contextKey="Utilities" />
          <ExpenseInput label="HomeInsurance" contextKey="HomeInsurance" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ fontWeight: 900, fontSize: '22px' }}>Family</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseInput label="Rent" contextKey="MortgageOrRent" />
          <ExpenseInput label="Food" contextKey="FoodAndGroceries" />
          <ExpenseInput label="Utilities" contextKey="Utilities" />
          <ExpenseInput label="HomeInsurance" contextKey="HomeInsurance" />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default AllExpensesList
