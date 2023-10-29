import { Alert } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useIncome } from '../context/IncomeContext'

interface IncomeProps {
  updateFlipPage: () => void
}
const IncomeInput: React.FC<IncomeProps> = ({ updateFlipPage }) => {
  const [value, setValue] = useState<string | number>('')
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const { updateIncome } = useIncome()
  const hasValue = value !== ''

  const haldleFlipPage = () => {
    if (value) {
      updateFlipPage()
    }
  }

  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        sx={{ marginTop: '20px', fontWeight: 900, fontSize: '22px' }}
        data-testid="custom-element"
      >
        Your Income
      </Typography>
      <Typography component="p" sx={{ fontSize: '17px' }}>
        Please tell your income amount and how often you get it
      </Typography>
      {/* <Typography component="p" sx={{ margin: '20px', border: 1, borderColor: '#9edfdf', borderRadius: 1, p: 1 }}>
        Amounts will be rounded for you
      </Typography> */}
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
        <Typography sx={{ color: '#000', fontWeight: 'bold', pt: 5 }}>Salary: </Typography>
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
            value={value === '' ? '' : value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(Number(e.target.value))
            }}
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
        <Button disabled={!hasValue} variant="contained" size="large" sx={{ pr: 2, pl: 2, mr: 4 }}>
          Add another income
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ pr: 2, pl: 2 }}
          onClick={() => {
            updateIncome(Number(value))
            setValue('')
            haldleFlipPage()
          }}
        >
          Next
        </Button>
      </Box>
    </>
  )
}

export default IncomeInput
