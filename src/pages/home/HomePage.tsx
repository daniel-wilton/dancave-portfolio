import { Box, Button, Container, Typography } from "@mui/material"
import React, { Component } from "react"

export default function HomePage(): JSX.Element {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Box sx={{ backgroundColor: "#fff", padding: "16px 0" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
              Daniel Wilton
            </Typography>
            <Button variant="outlined" color="primary">
              Contact Me
            </Button>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ pt: "64px", pb: "128px" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: "32px" }}>
          Software Developer
        </Typography>
        <Typography variant="h5" sx={{ mb: "32px" }}>
          Hi, I&apos;m Daniel. I&apos;m a software developer with experience in
          JavaScript, React, and Node.js. I&apos;m passionate about building
          high-quality software that solves real-world problems.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: "16px" }}>
          View My Work
        </Button>
        <Button variant="outlined" color="primary">
          Learn More About Me
        </Button>
      </Container>
    </Box>
  )
}
