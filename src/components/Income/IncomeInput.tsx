import { Alert } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useIncomeExpenses } from '../context/IncomeExpensesContext'

interface IncomeProps {
  updateFlipPage: () => void
}
const IncomeInput: React.FC<IncomeProps> = ({ updateFlipPage }) => {
  const [inputValue, setInputValue] = useState<number>(0)
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const { dispatch } = useIncomeExpenses()

  const handleFlipPage = () => {
    if (inputValue) {
      updateFlipPage()
    }
  }

  const handleInputIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(inputValue)) {
      setInputValue(parseFloat(e.target.value) || 0)
    }
  }
  const handleUpdateIncome = () => {
    dispatch({ type: 'INCOME', value: inputValue })
  }

  return (
    <>
      <Typography variant="h2" sx={{ marginTop: '20px' }} data-testid="custom-element">
        Your Income
      </Typography>
      <Typography>Please tell your income amount and how often you get it</Typography>
      {showAlert && (
        <Alert
          onClose={() => setShowAlert(false)}
          severity="info"
          sx={{ margin: '20px', border: 1, borderColor: '#9edfdf', borderRadius: 1, p: 1 }}
        >
          Amount will be rounded for you
        </Alert>
      )}
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          textAlign: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', pt: 5 }}>Salary: </Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 4, width: '25ch' },
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Income"
            value={inputValue === 0 ? '' : inputValue}
            onChange={handleInputIncome}
            type="number"
            required
            helperText="Please input your monthly income"
            size="small"
          />
          <SelectFrequency />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
          mb: 2,
          mr: 6,
        }}
      >
        <Button disabled={inputValue === 0} variant="contained" size="large" sx={{ pr: 2, pl: 2, mr: 4 }}>
          Add another income
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ pr: 2, pl: 2 }}
          onClick={() => {
            handleUpdateIncome()
            setInputValue(0)
            handleFlipPage()
          }}
        >
          Next
        </Button>
      </Box>
    </>
  )
}

export default IncomeInput
