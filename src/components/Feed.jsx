import { Box, Stack } from '@mui/material'
import MediaControlCard from './Card1'
import Chart from './Chart'
import ProfilCard from './ProfilCard'
import Progress from './Progress'
import ProgressLine from './ProgressLine'
import img1 from "../hosting.png"
import img3 from "../user.png"
import img2 from "../money-bag.png"

const Feed = () => {
  return ( 
    <Box flex={5} p={2}>
      <Stack spacing={4}>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4} >
          <ProfilCard bgcolor="#21295c" h1="Used Space" h2="49/60 TB" img={img1} pr="Get More Space" />
          <ProfilCard bgcolor="#21295c" h1="Revnue" h2="$ 50,345" img={img2} pr="Total Revnue" />
          <ProfilCard bgcolor="#21295c" h1="Users" h2="32.50 K" img={img3} pr="Total Users" />
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4} >
          <MediaControlCard />
          <ProgressLine />
        </Stack>

        <Chart />

        <Stack direction={{ xs: "column", md: "row" }} spacing={4} >
        <Progress />
        
        </Stack>

      </Stack>
    </Box>
  )
}

export default Feed
