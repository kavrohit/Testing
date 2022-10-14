import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material/styles' 
import CssBaseline  from '@mui/material/CssBaseline'

const theme = createTheme({
  palette:{
    mode:"dark",
  },
})

const AppProvider = ({children}: {children: React.ReactNode}) => {
  return (
    
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default AppProvider