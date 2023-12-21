import React, { useState } from 'react'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
const App = () => {
  const [mode, setMode] = useState('light');

  const darktheme = createTheme({
    palette: {
      mode,
    }
  })

  return (
    <div>
      <ThemeProvider theme={darktheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar />
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Sidebar SetMode={setMode} mode={mode} />
              <Feed />
              <Rightbar />
            </Stack>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
