import React from "react";

const TableRowP1 = ({
	last_name,
	email,
	gender,
	fast_name,
	id,
	bgColor,
	handleClick,
	status,
}) => {
	let rowBgColor;
	if (status === true) {
		rowBgColor = "bg-green-500 text-white";
	} else {
		rowBgColor = "bg-red-500 text-white";
	}

	return (
		<tr
			onClick={() => {
				handleClick(id);
			}}
		>
			<td
				className={
					bgColor === id
						? "active cursor-pointer"
						: `cursor-pointer ${rowBgColor}`
				}
			>
				{id}
			</td>
			<td
				className={
					bgColor === id
						? "active cursor-pointer"
						: `cursor-pointer ${rowBgColor}`
				}
			>
				{fast_name}
			</td>
			<td
				className={
					bgColor === id
						? "active cursor-pointer"
						: `cursor-pointer ${rowBgColor}`
				}
			>
				{last_name}
			</td>
			<td
				className={
					bgColor === id
						? "active cursor-pointer"
						: `cursor-pointer ${rowBgColor}`
				}
			>
				{gender}
			</td>
			<td
				className={
					bgColor === id
						? "active cursor-pointer"
						: `cursor-pointer ${rowBgColor}`
				}
			>
				{email}
			</td>
		</tr>
	);
};

export default TableRowP1;
