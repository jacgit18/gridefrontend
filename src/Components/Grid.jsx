import React, { Component } from "react";
import "../App.css";

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

var timestamp = new Date().getTime();
// potentially apply badge to header PAID
const columns = [
	{ field: "id", headerName: "Project #", type: "number", width: 70 },
	// { field: "projectid", headerName: "Project #", type: "number", width: 70 },

	{ field: "clientname", headerName: "Name & Client", width: 130 },
	{ field: "paymentstatus", headerName: `PAID `, width: 130 },
	{ field: "balance", headerName: "Balance", type: "number", width: 90 },
	{ field: "tix", headerName: "TIX", width: 90 },
	{ field: "cos", headerName: "COs", type: "number", width: 90 },
	{ field: "start", headerName: "Start", type: "number", width: 90 },

	// {
	// 	field: "fullName",
	// 	headerName: "Full name",
	// 	description: "This column has a value getter and is not sortable.",
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params) =>
	// 		`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	// },
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
	// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	// const theme = React.useMemo(
	// 	() =>
	// 		createTheme({
	// 			palette: {
	// 				mode: prefersDarkMode ? "dark" : "light",
	// 			},
	// 		}),
	// 	[prefersDarkMode]
	// );

	// const theme = createTheme();

	return (
		<div>
			<React.Fragment>
				<label>Tickets</label>
				{/* <ThemeProvider theme={theme.spacing(2)}> */}
				<Button variant="contained" color="primary" sx={{ borderRadius: 28 }}>
					{" "}
					+ Ticket
				</Button>
				{/* </ThemeProvider> */}
			</React.Fragment>

			<TableButtons />

			<div>
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
