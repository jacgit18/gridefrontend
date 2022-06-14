export const columns = [
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
