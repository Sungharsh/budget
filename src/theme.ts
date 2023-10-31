import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontSize: 14,
    h2: {
      fontSize: '26px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '22px',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#008080',
    },
    secondary: {
      main: '#ffffff',
    },
    info: {
      main: '#5b5b5b',
    },
    error: {
      main: red.A400,
    },
    mode: 'light',
  },
})

export default theme
