import React from 'react'
import './Home.css'
import FeaturedCompnt from '../../src/components/FeaturedInfo/FeaturedCompnt'
import Chart from '../../src/components/CHART/Chart.jsx'
import {Userdata} from '../../src/data'
import WidgetLg from '../components/WIdgets/WidgetLg/WidgetLg'
import WidgetSm from '../components/WIdgets/WidgetSm/WidgetSm'


const Home = () => {
  return (
    <div className='home'>
      <FeaturedCompnt/>
      <Chart data={Userdata} dataKey='Active-user' title="User Analysis" grid />
      <div className="widgets__container">
      <WidgetSm/>
      <WidgetLg/>
      </div>

    </div>
  )
}

export default Home 