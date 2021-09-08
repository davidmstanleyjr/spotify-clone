import React from "react";
import "../css/SidebarOption.css";

function SidebarOption({ option = "test", Icon }) {
	return (
		//this is the logic for the icons. If there is an icon then render the icon with a classname of sidebaroptions_icon. Also, if there is an icon give it an H4, otherwise render a p tag
		<div className="sidebarOption">
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? <h4>{option}</h4> : <p>{option}</p>}
		</div>
	);
}

export default SidebarOption;
