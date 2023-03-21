import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({  annual, month, togglehandler }) => {
return (
	<div className="container">
	{annual}{" "}
	<div className="toggle-switch">
		<input onChange={togglehandler} type="checkbox" className="checkbox"
			name={month} id={month} />
		<label className="label" htmlFor={month}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
  {" "}{month}
	</div>
);
};

export default ToggleSwitch;
