import { Alert } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useIncomeExpenses } from '../context/IncomeExpensesContext'

const IncomeInput: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const { state, dispatch } = useIncomeExpenses()

  const totalIncome = state.Income.salary
  const getContained = totalIncome === 0 ? 'outlined' : 'contained'
  const getOutlined = totalIncome === 0 ? 'text' : 'outlined'

  const handleFlipPage = () => {
    const getFlipPage = state.HandleFlipPage.flipPage
    const value = !getFlipPage
    if (totalIncome) {
      dispatch({ type: 'FLIP_PAGE', value })
    }
  }

  const handleInputIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue = parseFloat(e.target.value) || 0
    dispatch({ type: 'INCOME', value: getValue })
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
            value={totalIncome === 0 ? '' : totalIncome}
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
        <Button disabled={totalIncome === 0} variant={getOutlined} size="large" sx={{ pr: 2, pl: 2, mr: 4 }}>
          Add another income
        </Button>
        <Button
          type="submit"
          variant={getContained}
          disabled={totalIncome === 0}
          size="large"
          sx={{ pr: 2, pl: 2 }}
          onClick={() => {
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
