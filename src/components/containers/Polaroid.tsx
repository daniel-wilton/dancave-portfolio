import React from "react"
import { Card, CardContent, Stack, styled } from "@mui/material"

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`)

export default function Polaroid({
  image,
  polaroidWidth = "275px",
  children,
}: {
  image: string
  polaroidWidth?: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <Card
      sx={{
        width: polaroidWidth,
        minWidth: polaroidWidth,
        textAlign: "left",
        margin: "auto",
        borderRadius: "4px",
        boxShadow: "-8px 8px 28px 12px rgba(0,0,0,0.3)",
        padding: "5px",
        backgroundColor: "#F7F7F7",
      }}
    >
      <CardContentNoPadding sx={{ paddingBottom: 0 }}>
        <Stack direction="column" spacing={2} marginBottom={1}>
          <img
            src={image}
            width={"100%"}
            style={{ display: "flex", opacity: "0.9", borderRadius: "4px" }}
          />
          {children}
        </Stack>
      </CardContentNoPadding>
    </Card>
  )
}
