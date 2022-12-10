import React, { useState } from "react";
import TableRowP1 from "./TableRowP1";

const TableWrap = ({
	tableLoadData,
	handleSortDesc,
	handleSortAsce,
	handleDefaultSort,
	bgColor,
	handleClick,
}) => {
	return (
		<div className="">
			<table className="table lg:table-normal lg:w-full table-auto">
				<thead>
					<tr>
						<th>No</th>
						<th className="flex justify-start items-center">
							Fast Name
							<div className="dropdown dropdown-bottom">
								<label tabIndex={0} className="m-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
										/>
									</svg>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<div
											className="sortByAsc"
											onClick={() => handleDefaultSort()}
										>
											Un Sort
										</div>
									</li>
									<li>
										<div className="sortByAsc" onClick={() => handleSortAsce()}>
											Sort By Asc
										</div>
									</li>
									<li>
										<div className="sortByAsc" onClick={() => handleSortDesc()}>
											Sort By Dsc
										</div>
									</li>
								</ul>
							</div>
						</th>
						<th>Last Name</th>
						<th>Gender</th>
						<th>Email Address</th>
					</tr>
				</thead>
				<tbody>
					{tableLoadData.map((items) => (
						<TableRowP1
							key={items.id}
							id={items.id}
							gender={items.gender}
							email={items.email}
							fast_name={items.first_name}
							last_name={items.last_name}
							bgColor={bgColor}
							handleClick={handleClick}
							status={items.status}
						></TableRowP1>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableWrap;
