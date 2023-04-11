import {
  Box,
  Container,
  IconButton,
  Typography,
  Grid,
  Stack,
} from "@mui/material"
import { styled, createTheme, ThemeProvider } from "@mui/material/styles"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import Typewriter from "typewriter-effect"
import React, { useState } from "react"
import ComputerWindow from "../../components/containers/ComputerWindow"
import Polaroid from "../../components/containers/Polaroid"
import picture from "../../assets/images/me.jpg"
import pythonLogo from "../../assets/images/python-logo.png"
import reactLogo from "../../assets/images/react-logo.png"
import awsLogo from "../../assets/images/aws-logo.png"

const PageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}))

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "3rem",
  color: theme.palette.text.primary,
}))

interface ExtraTypographyProps {
  component: React.ElementType
}
const Subtitle = styled(Typography)<ExtraTypographyProps>(({ theme }) => ({
  fontSize: "1.5rem",
  marginBottom: theme.spacing(5),
  color: theme.palette.text.primary,
  fontFamily: "Raleway",
}))

export default function HomePage(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode)
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#4D5F82" : "#91ACE3",
      },
      background: {
        paper: darkMode ? "#303030" : "#F7F7F7",
      },
      text: {
        primary: darkMode ? "#FFFFFF" : "#2E3B55",
        secondary: darkMode ? "#A8A8A8" : "#5A5A5A",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PageContainer>
          <Typography sx={{ fontSize: "6rem" }}>👨‍💻</Typography>
          <Title align="center">Daniel Wilton</Title>
          <Subtitle component={"span"}>
            <Typewriter
              options={{
                strings: ["SOFTWARE ENGINEER", "DEV TEAM LEAD", "SQUAD LEAD"],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </Subtitle>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
        </PageContainer>
      </Box>
      <Box
        sx={{
          minHeight: "50vh",
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <PageContainer>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item md={3} xs={12} justifyContent={"center"}>
              <Polaroid image={picture}>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"center"}
                  spacing={3}
                >
                  <img src={pythonLogo} width={"60px"} />
                  <img src={reactLogo} width={"60px"} />
                  <img src={awsLogo} width={"60px"} />
                </Stack>
              </Polaroid>
            </Grid>
            <Grid item md={2} />
            <Grid item md={7} xs={12} justifyContent={"center"}>
              <ComputerWindow>
                <Typography variant="h5" component="div">
                  Welcome 👋🏻
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  ...to the real world 😎
                </Typography>
                <Typography variant="body2">
                  {
                    "I'm Daniel Wilton. A Software Developer from Bristol in the UK. \
                          I currently work with the newest front-end frameworks like React, \
                          Angular and Vue as well as backend technologies such as Python, C# \
                          and various AWS/Azure technologies. What you are seeing now is my \
                          Digital CV 📝 created with React and TypeScript with MUI components! Any \
                          feedback is much appreciated 💜"
                  }
                </Typography>
              </ComputerWindow>
            </Grid>
          </Grid>
        </PageContainer>
      </Box>
    </ThemeProvider>
  )
}
