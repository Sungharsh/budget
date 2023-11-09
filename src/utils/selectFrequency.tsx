import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

const SelectFrequency = () => {
  const selectPeriod = [
    {
      value: 'Weekly',
    },
    {
      value: 'Monthly',
    },
    {
      value: 'Yearly',
    },
  ]
  return (
    <TextField required id="outlined-disabled" select defaultValue="Monthly" size="small">
      {selectPeriod.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectFrequency
