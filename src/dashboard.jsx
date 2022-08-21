import React from 'react'
import Card from './card.jsx'

function Dashboard() {
  const cards = [
    {
      title: "Earnings (Monthly)",
      content: 40000,
      symbol: "$",
      isSalary: true,
      bordercolor: "primary"
    },
    {
      title: "Earnings (Annually)",
      content: 215000,
      symbol: "$",
      isSalary: true,
      bordercolor: "success"
    },
    {
      title: "Tasks",
      content: 50,
      symbol: "%",
      isSalary: false,
      bordercolor: "info"
    },
    {
      title: "Pending Requests",
      content: 18,
      symbol: "",
      isTask: true,
      bordercolor: "warning"
    },
  ]
  return (
    
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        {cards.map((items) => {
          return (<Card cardItems={items}></Card>
          )
        })}
        
      </div>
    </div>
  )
}

export default Dashboard;