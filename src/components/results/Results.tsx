import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DefaultizedPieValueType } from '@mui/x-charts'
import { pieArcLabelClasses, PieChart } from '@mui/x-charts'

import { useIncomeExpenses } from '../context/IncomeExpensesContext'

const Results = () => {
  const { state } = useIncomeExpenses()

  const { HouseholdExpenses, FamilyExpenses, Finance, HealthAndWellbeing, Transport, Entertainment, Other } = state

  const HOUSEHOLD = Object.values(HouseholdExpenses).reduce((acc, value) => acc + value, 0)
  const FAMILY = Object.values(FamilyExpenses).reduce((acc, value) => acc + value, 0)
  const FINANCE = Object.values(Finance).reduce((acc, value) => acc + value, 0)
  const HEALTH = Object.values(HealthAndWellbeing).reduce((acc, value) => acc + value, 0)
  const TRANSPORT = Object.values(Transport).reduce((acc, value) => acc + value, 0)
  const ENTERTAINMENT = Object.values(Entertainment).reduce((acc, value) => acc + value, 0)
  const OTHER = Other.anyOtherExpenses

  const data = [
    { id: 0, value: HOUSEHOLD, label: 'Household' },
    { id: 1, value: FAMILY, label: 'Family' },
    { id: 2, value: FINANCE, label: 'Finance' },
    { id: 3, value: HEALTH, label: 'Health' },
    { id: 4, value: TRANSPORT, label: 'Transport' },
    { id: 5, value: ENTERTAINMENT, label: 'Entertainemnt' },
    { id: 6, value: OTHER, label: 'Other' },
  ]

  const TOTAL = data.map(item => item.value).reduce((a, b) => a + b, 0)
  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL
    return `${(percent * 100).toFixed(0)}%`
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '500px',
          mt: 3,
          p: 2,
        }}
      >
        <Typography variant="h2" sx={{ m: 5 }}>
          Results
        </Typography>
        <PieChart
          series={[
            {
              data,
              arcLabel: getArcLabel,
              innerRadius: 75,
              paddingAngle: 2,
              cornerRadius: 8,
              cx: 250,
              cy: 150,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: 14,
            },
          }}
          margin={{
            top: 50,
          }}
          width={630}
          height={350}
        />
      </Box>
    </>
  )
}

export default Results
