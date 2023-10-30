import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useExpenses } from '../context/ExpensesContext'
import { useIncome } from '../context/IncomeContext'

const TotalIncomeExpDisplay: React.FC = () => {
  const { income } = useIncome()
  const { mortgageOrRent, foodAndGroceries, utilities, homeInsurance, childcareAndEducation, holidays, pets, gifts } =
    useExpenses()
  const totalExpenses =
    mortgageOrRent + foodAndGroceries + utilities + homeInsurance + childcareAndEducation + holidays + pets + gifts
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          backgroundColor: 'teal',
          textAlign: 'center',
          mt: 3,
          p: 2,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ color: '#fff' }}>
          INCOME: {Math.floor(income.amount)}
        </Typography>
        <Typography variant="h6" component="h2" sx={{ color: '#fff' }}>
          EXPENSES: {Math.floor(totalExpenses)}
        </Typography>
      </Box>
    </>
  )
}

export default TotalIncomeExpDisplay
