
import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import "./OtherDetails.css"


const Home = () => {
      const columns = [
    { field: "task", headerName: "Task", minWidth: 300, flex: 0.6,headerClassName: 'first' },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      headerClassName: 'first',
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/employee/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
          </Fragment>
        );
      },
    },
  ];

  const rows = [{
       id:"low5",
        task: "Income lower than $5 USD",
      },
    {
       id:"phone",
        task: "Male users with phone price lower than 10000",
      },
    {
       id:"quote",
        task: " Users whose last name starts with “M” ",
      },
    {
       id:"car",
        task: "Users which have a car of brand “BMW”, “Mercedes” or “Audi",
      },
    {
       id:"income",
        task: "Data of top 10 cities which have the highest number of users",
      }];
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Home