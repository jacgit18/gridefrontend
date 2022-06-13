import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";

// const useStyles = makeStyles((theme) => ({
//     button: {},
//     cancelButton: {},
//     icon: {},
//     textBlock: {},
//   }))

const rows: GridRowsProp = [
    { id: 77, col1: 'Hello', col2: 'World' },
    { id: 13, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 4, col1: 'MUI', col2: 'is Amazing' },
  ];

  // use map to generate rows and col


  const columns: GridColDef[] = [
    { field: 'col0', headerName: <input type="checkbox"></input>, width: 50 },
    { field: 'col1', headerName: 'Project #', width: 150 },
    { field: 'col2', headerName: 'Name & Client', width: 150 },
    { field: 'col3', headerName: 'PAID', width: 150 },
    { field: 'col4', headerName: 'Balance', width: 150 },
    { field: 'col5', headerName: 'TIX', width: 150 },
    { field: 'col6', headerName: 'Cos', width: 150 },
    { field: 'col7', headerName: 'Start', width: 150 }


  ];
  




export const Grid = () => {
  return(
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  )
};