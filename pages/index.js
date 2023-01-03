import Header from "../components/Header"
import Typography from "@mui/material/Typography"

export default function Home() {
  return (
    <>
      <Header />

      <Typography sx={{ ml: 3, mt: 1 }} variant="h5" gutterBottom>
        index page
      </Typography>
    </>
  )
}
