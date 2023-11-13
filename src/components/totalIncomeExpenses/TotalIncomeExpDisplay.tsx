import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'

const TotalIncomeExpDisplay: React.FC = () => {
  const { state } = useIncomeExpenses()
  const { Income, FamilyExpenses, HouseholdExpenses, Finance, HealthAndWellbeing, Transport, Entertainment, Other } =
    state

  const totalExpenses = Object.values(FamilyExpenses)
    .concat(Object.values(HouseholdExpenses))
    .concat(Object.values(Finance))
    .concat(Object.values(HealthAndWellbeing))
    .concat(Object.values(Transport))
    .concat(Object.values(Entertainment))
    .concat(Object.values(Other))
    .reduce((acc, value) => acc + value, 0)

  const theme = useTheme()
  const secondaryColor = theme.palette.secondary.main

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          backgroundColor: theme.palette.primary.main,
          textAlign: 'center',
          mt: 3,
          p: 2,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ color: secondaryColor }}>
          Monthly income: <br />
          {`£${Math.floor(Income.salary)}`}
        </Typography>
        <Typography variant="h6" component="h2" sx={{ color: secondaryColor }}>
          Monthly expenses: <br />
          {`£${Math.floor(totalExpenses)}`}
        </Typography>
      </Box>
    </>
  )
}

export default TotalIncomeExpDisplay
