import React from 'react'
import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios"
import "./OtherDetails.css";

const EmployeeDetails = ({id}) => {
      const [employees,setEmployees] = useState([]);
      const fetchData = async()=>{
         const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.get(
   `https://mobiserver.vercel.app/api/${id}`,
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

    { field: "first_name", headerName: "Name", minWidth: 200, flex: 0.3, headerClassName: 'first',},
     { field: "email", headerName: "Email", minWidth: 275, flex: 0.5,headerClassName: 'first' },
      { field: "gender", headerName: "Gender", minWidth: 150, flex: 0.2,headerClassName: 'first' },
      { field: "income", headerName: "Income", minWidth: 150, flex: 0.2 ,headerClassName: 'first'},
      { field: "city", headerName: "City", minWidth: 100, flex: 0.3 ,headerClassName: 'first'},
      { field: "car", headerName: "Car", minWidth: 100, flex: 0.2 ,headerClassName: 'first'},
       { field: "phonePrice", headerName: "Price", minWidth: 125, flex: 0.2,headerClassName: 'first' },
      { field: "quote", headerName: "Quote", minWidth: 275, flex: 0.6 ,headerClassName: 'first'}
     
  ];

  const rows = [];

    employees &&
    employees.forEach((item) => {
      rows.push({
        id: item.id,
        first_name:item.first_name,
        email:item.email,
        gender:item.gender,
        income:item.income,
        city:item.city,
        car:item.car,
        phonePrice:parseInt(item.phone_price),
        quote:item.quote
      });
    });

  return (
    <>
 {  employees  &&
      <div className="dashboard">
        <div className="productListContainer">
          <h1 className="productListHeading">EMPLOYEE DATA</h1>
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