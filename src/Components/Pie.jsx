import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const Pie = () => {
  return (
  <PieChart className=' w-68 '
  data={[
    { title: 'Total Recipies', value: 50, color: '#E38627', },
    { title: 'Total Categories', value: 8, color: '#C13C37' },
    { title: 'Total Reviews', value: 20, color: '#6A2135' },
  ]}
/>
  )
}

export default Pie
