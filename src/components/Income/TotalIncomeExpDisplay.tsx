import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'

const TotalIncomeExpDisplay: React.FC = () => {
  const { state } = useIncomeExpenses()
  const { Income, FamilyExpenses, HouseholdExpenses } = state
  const { mortgageOrRent, foodAndGroceries, utilities, homeInsurance } = HouseholdExpenses
  const { childcareAndEducation, holidays, pets, gifts } = FamilyExpenses
  const totalExpenses =
    mortgageOrRent + foodAndGroceries + utilities + homeInsurance + childcareAndEducation + holidays + pets + gifts
  const theme = useTheme()
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
        <Typography variant="h6" component="h2" sx={{ color: theme.palette.secondary.main }}>
          INCOME: {Math.floor(Income.salary)}
        </Typography>
        <Typography variant="h6" component="h2" sx={{ color: theme.palette.secondary.main }}>
          EXPENSES: {Math.floor(totalExpenses)}
        </Typography>
      </Box>
    </>
  )
}

export default TotalIncomeExpDisplay
