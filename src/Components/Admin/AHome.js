import React , {useState, useEffect} from "react";
// import Instance from "../Components/Instance";
import { Chart } from "react-google-charts";

const AHome = () => {
    
    const data = ([
        ['Star', 'No Of Patient'],
        
        ["Paracetamol", 11],
        ["Napa", 4],
        ["Algin", 2],
      
      ]);
      const options = {
        title: "Inventory Information",
        is3D: true,
      };
      function App() {
       
      }
    return ( 
        <div className="container d-flex justify-content-center">
            <span className="fw-bold">Welcome Admin</span>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>  
    );
};
export default AHome;