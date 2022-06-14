import React, { Component } from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import FilterListIcon from "@mui/icons-material/FilterList";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

export default class TableButtons extends Component {
	render() {
		return (
			<React.Fragment classname="">
				<ButtonGroup variant="text" aria-label="text button group">
					<Button>
						<FilterListIcon />
						<label>FILTERS</label>
					</Button>

					<Button>
						<ViewWeekIcon />
						<label>COlUMNS</label>
					</Button>

					<Button>
						<VerticalAlignBottomIcon />
						<label>EXPORT</label>
					</Button>
				</ButtonGroup>
			</React.Fragment>
		);
	}
}
