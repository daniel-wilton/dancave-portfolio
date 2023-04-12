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
import healthcareImage from "../../assets/images/healthcare.jpeg"
import transportImage from "../../assets/images/transport.jpeg"
import weatherImage from "../../assets/images/weather.jpeg"
import IconBadge from "../../components/containers/IconBadge"
import { TbBrandCSharp } from "react-icons/tb"
import {
  SiJavascript,
  SiTypescript,
  SiAmazonaws,
  SiPython,
  SiMicrosoftazure,
  SiCplusplus,
} from "react-icons/si"

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
        main: darkMode ? "#3E4D6E" : "#91ace3",
        dark: "#303030",
        light: "#606060",
      },
      secondary: {
        main: darkMode ? "#494949" : "#C5C5C5",
        light: "#F7F7F7",
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
            <Grid item xs={12} textAlign={"center"}>
              <Subtitle component={"span"}>ABOUT ME</Subtitle>
            </Grid>
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
      <Box
        sx={{
          minHeight: "50vh",
          backgroundColor: theme.palette.background.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <PageContainer>
          <Grid spacing={10} alignItems={"center"} container>
            <Grid item xs={12} textAlign={"center"}>
              <Subtitle component={"span"} color={theme.palette.text.primary}>
                PROJECTS
              </Subtitle>
            </Grid>
            <Grid item md={4} sm={12}>
              <Polaroid image={transportImage} polaroidWidth={"300px"}>
                <Subtitle component={"span"} textAlign={"center"}>
                  TRANSPORT
                </Subtitle>
              </Polaroid>
            </Grid>
            <Grid item md={4} sm={12}>
              <Polaroid image={healthcareImage} polaroidWidth={"300px"}>
                <Subtitle component={"span"} textAlign={"center"}>
                  HEALTHCARE
                </Subtitle>
              </Polaroid>
            </Grid>
            <Grid item md={4} sm={12}>
              <Polaroid image={weatherImage} polaroidWidth={"300px"}>
                <Subtitle component={"span"} textAlign={"center"}>
                  WEATHER
                </Subtitle>
              </Polaroid>
            </Grid>
          </Grid>
        </PageContainer>
      </Box>
      <Box
        sx={{
          minHeight: "40vh",
          backgroundColor: theme.palette.primary.dark,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <PageContainer>
          <Grid
            spacing={10}
            alignItems={"center"}
            container
            justifyContent={"center"}
          >
            <Grid item xs={12} textAlign={"center"}>
              <Subtitle
                component={"span"}
                style={{ color: theme.palette.secondary.light }}
              >
                SKILLS
              </Subtitle>
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="C#"
                icon={
                  <TbBrandCSharp
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="JavaScript"
                icon={
                  <SiJavascript
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="TypeScript"
                icon={
                  <SiTypescript
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="AWS"
                icon={
                  <SiAmazonaws
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="Azure"
                icon={
                  <SiMicrosoftazure
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="Python"
                icon={
                  <SiPython
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
            <Grid item md={1.5} textAlign={"center"}>
              <IconBadge
                backgroundColor={theme.palette.primary.light}
                iconColor="white"
                text="C++"
                icon={
                  <SiCplusplus
                    size={"3.5rem"}
                    color={theme.palette.secondary.light}
                  />
                }
              />
            </Grid>
          </Grid>
        </PageContainer>
      </Box>
    </ThemeProvider>
  )
}
