import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import React from 'react'

import SelectFrequency from '../../utils/selectFrequency'
import { useIncome } from '../context/IncomeContext'

interface IncomeProps {
  updateFlipPage: () => void
}
const Income: React.FC<IncomeProps> = ({ updateFlipPage }) => {
  const [value, setValue] = useState<string | number>('')
  const { updateIncome } = useIncome()
  const hasValue = value !== ''

  return (
    <>
      <Typography component="h2" variant="h6" sx={{ margin: '20px' }} data-testid="custom-element">
        Your Income
      </Typography>
      <Typography component="p" sx={{ margin: '20px' }}>
        Please tell your income amount and how often you get it
      </Typography>
      <Divider />
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
        <Button disabled={!hasValue} variant="contained" size="large" sx={{ pr: 2, pl: 2 }}>
          Add another income
        </Button>
        <Button
          disabled={!hasValue}
          type="submit"
          variant="contained"
          size="large"
          sx={{ pr: 2, pl: 2 }}
          onClick={() => {
            updateIncome(Number(value))
            setValue('')
            updateFlipPage()
          }}
        >
          Next
        </Button>
      </Box>
    </>
  )
}

export default Income
