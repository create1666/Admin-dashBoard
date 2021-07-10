import React from 'react'
import './Home.css'
import FeaturedCompnt from '../../src/components/FeaturedInfo/FeaturedCompnt'
import Chart from '../../src/components/CHART/Chart.jsx'
import {Userdata} from '../../src/data'


const Home = () => {
  return (
    <div className='home'>
      <FeaturedCompnt/>
      <Chart data={Userdata} dataKey='Active-user' title="User Analysis" grid />
    </div>
  )
}

export default Home 