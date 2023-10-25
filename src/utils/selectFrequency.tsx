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
    <TextField
      required
      id="outlined-disabled"
      helperText="Please select frequency"
      select
      label="select"
      defaultValue="Monthly"
      size="small"
    >
      {selectPeriod.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectFrequency
