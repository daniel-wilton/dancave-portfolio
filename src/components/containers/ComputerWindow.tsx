import React from "react"
import { Card, CardContent, Stack } from "@mui/material"
import CircleIcon from "@mui/icons-material/Circle"

export default function ComputerWindow({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <Card
      sx={{
        width: "40vw",
        minWidth: "300px",
        textAlign: "left",
        margin: "auto",
      }}
    >
      <CardContent sx={{ padding: "10px" }}>
        <Stack direction="row" spacing={0.5} marginBottom={1}>
          <CircleIcon sx={{ color: "#FF605C", fontSize: "0.8rem" }} />
          <CircleIcon sx={{ color: "#FFBD44", fontSize: "0.8rem" }} />
          <CircleIcon sx={{ color: "#00CA4E", fontSize: "0.8rem" }} />
        </Stack>
        <Stack sx={{ paddingLeft: "16px", paddingTop: "8px" }}>
          {children}
        </Stack>
      </CardContent>
    </Card>
  )
}
