import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const MenuBar: React.FC = () => {
  const theme = useTheme()
  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.info.main }}>
      <Container maxWidth="md" sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)', m: 'auto', p: 4 }}>
        <Toolbar variant="dense" disableGutters>
          <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', pt: 0, mt: 0 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BUDGET CALCULATOR
            </Typography>
            <Typography
              sx={{
                mr: 2,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Take control of your money
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default MenuBar
