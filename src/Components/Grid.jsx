import React, { Component } from "react";
import "../table.css";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import TableButtons from "./TableButtons";

// const useStyles = makeStyles((theme) => ({
//     button: {},
//     cancelButton: {},
//     icon: {},
//     textBlock: {},
//   }))

// const today = Temporal.Now.plainDateTime("persian")
// npm i @js-temporal/polyfill

// potentially apply badge to header PAID
const columns = [
	{ field: "id", headerName: "Project #", type: "number", width: 70 },
	{ field: "clientname", headerName: "Name & Client", width: 130 },
	{ field: "paymentstatus", headerName: `PAID `, width: 130 },
	{ field: "balance", headerName: "Balance", type: "number", width: 90 },
	{ field: "tix", headerName: "TIX", width: 90 },
	{ field: "cos", headerName: "COs", type: "number", width: 90 },
	{ field: "start", headerName: "Start", type: "number", width: 90 },
];

// use map to generate rows and col proable 2d array and change values to state
const rows = [
	{
		id: 77,
		clientname: "Building",
		paymentstatus: 600,
		balance: "$00.00",
		tix: "000",
		cos: "000",
		start: new Date(),
	},
	{
		id: 13,
		clientname: "Test",
		paymentstatus: 600,
		balance: "$00.00",
		tix: "000",
		cos: "000",
		start: new Date(),
	},
	{
		id: 4,
		clientname: "450",
		paymentstatus: 600,
		balance: "$00.00",
		tix: "000",
		cos: "000",
		start: new Date(),
	},
];

export const Grid = () => {
	return (
		<div className="flex-container">
			<div className="item">
				<label>Tickets</label>
				<React.Fragment className="">
					<Button variant="contained" color="primary" sx={{ borderRadius: 28 }}>
						+ Ticket
					</Button>
				</React.Fragment>
			</div>

			<div className="item">
				<TableButtons />

				<DataGrid
					style={{ height: 300, width: "100%" }}
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
				<LinearProgress />
			</div>

			{/* <Badge color="secondary" badgeContent=" ">
				{" "}
			</Badge> */}
		</div>
	);
};
