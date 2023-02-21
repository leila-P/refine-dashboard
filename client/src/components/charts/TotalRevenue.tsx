import React from 'react'
import { Box,Typography, Stack, fontSize } from '@pankod/refine-mui';

import { PieChartProps } from 'interfaces/home';
import ReactApexChart from 'react-apexcharts';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';
const TotalRevenue = () => {
  return (
    <Box
    p={4}
    flex={1}
    bgcolor="#fcfcfc"
    id="chart"
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">$235,535</Typography>
        <Stack direction="row" gap={1} alignItems="center" >
          <ArrowCircleUpRounded  sx={{fontSize:25, color:'#475be8'}} />
          <Typography fontSize={15} color="#475be8" >
            0.8%
          </Typography>
          <Typography fontSize={15} color="#808191" >
            Than Last Month
          </Typography>
        </Stack>
      </Stack>
      <ReactApexChart 
      series={TotalRevenueSeries}
      type="bar"
      height={310}
      options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue
