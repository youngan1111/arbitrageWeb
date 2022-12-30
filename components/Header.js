import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"

const sections = [
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        수강편람
      </Box>
    ),
    url: "/courseCatalog",
    everybody: true,
    user: true,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        과목 조회 및 변경
      </Box>
    ),
    url: "/changeCatalog",
    everybody: false,
    user: false,
    admin: true,
  },
]

export default function Header() {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
          style={{ fontWeight: 600 }}
        >
          <Link href="/" underline="none" color="inherit">
            Arbitrage
          </Link>
        </Typography>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "flex-start" }}
      >
        {sections.map((section) => {
          if (section.admin == true) {
            return (
              <Link
                underline="hover"
                color="inherit"
                noWrap
                key={section.url}
                variant="body2"
                href={section.url}
                sx={{ p: 1, mr: 5 }}
              >
                {section.title}
              </Link>
            )
          }
        })}
      </Toolbar>
    </>
  )
}
