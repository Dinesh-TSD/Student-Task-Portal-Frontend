import React from 'react'
import './Dashboard.css'
import BarChart from '../../Charts/BarChart'
import LineChart from '../../Charts/LineChart'
import DoughnutChart from '../../Charts/DoughnutChart'
import RadarChart from '../../Charts/RadarChart'

const Dashboard = () => {
  
  return (
    <>
    <div className="chart-container">
      {/* <h1>Bar Chart</h1> */}
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-7 col-12  chart">
          <BarChart className="" />
        </div>
        <div className="col-xl-5 col-lg-7 col-12  chart">
          <LineChart />
        </div>
        <div className="col-xl-5 col-lg-7 col-12  chart">
          <DoughnutChart />
        </div>
        <div className="col-xl-5 col-lg-7 col-12  chart">
          <RadarChart />
        </div>
      </div>
    
    </div>
      
    </>
  )
}

export default Dashboard