import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const EmployeeDetails = ({id}) => {

      console.log(id,"i am id")
      const [employees,setEmployees] = useState([]);
      const fetchData = async()=>{
         const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.get(
    `/api/${id}`,
      config
    );
    console.log(data,"i am data")
    setEmployees(data.employees)
    console.log(employees,"i am employees")
      }
      useEffect(() => {
        
     fetchData();
      
      }, [id])
      

            const columns = [
         { field: "city", headerName: "City", minWidth: 100, flex: 0.3 },
      { field: "income", headerName: "Income", minWidth: 100, flex: 0.2 },
      { field: "count", headerName: "Number of users", minWidth: 300, flex: 0.2 },
   
   
     
  ];

  const rows = [];

    employees &&
    employees.forEach((item) => {
      rows.push({
        id: item._id,

        count:item.count,
        income:item.avgIncome,
        city:item._id,

      });
    });

  return (
    <>
 {  employees  &&
      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">ALL API'S</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
}
    </>
  
  )
}

export default EmployeeDetails