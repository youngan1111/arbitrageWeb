import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const sections = [
  {
    title: "BINANCE",
    url: "/binance",
  },
  {
    title: "dYdX",
    url: "/dydx",
  },
  {
    title: "BINANCE & dYdX",
    url: "/binancedydx",
  },
  {
    title: "BINANCE Perp vs Quarter",
    url: "/binancePerpQuarter",
  },
  {
    title: "arbitrage testnet",
    url: "/arbitrageTestnet",
  },
]

export default function Header({ path }) {
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
          return (
            <Link
              underline="hover"
              color="inherit"
              noWrap
              key={section.url}
              variant="body2"
              href={section.url}
              sx={{ p: 1, mr: 5 }}
              style={{
                textDecorationLine: path == section.url ? "underline" : "none",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {section.title}
              </Box>
            </Link>
          )
        })}
      </Toolbar>
    </>
  )
}
