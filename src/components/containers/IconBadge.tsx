import { Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

export default function IconBadge({
  backgroundColor,
  iconColor,
  text,
  icon,
}: {
  backgroundColor: string
  iconColor: string
  text: string
  icon: React.ReactNode
}): JSX.Element {
  const theme = useTheme()
  return (
    <Box
      borderRadius={"5px"}
      bgcolor={backgroundColor}
      padding={"10px"}
      width={"60px"}
    >
      {icon}
      <Typography
        marginTop={"5px"}
        fontSize={"0.8rem"}
        color={theme.palette.secondary.light}
      >
        {text}
      </Typography>
    </Box>
  )
}
