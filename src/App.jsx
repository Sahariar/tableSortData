import { useEffect, useState } from "react";
import "./App.css";
import TableWrap from "./components/TableWrap";

function App() {
	const [sortedData, setSortedData] = useState([]);
	const [bgColor, setBgColor] = useState(0);
	const getTableData = () => {
		fetch("mockData.json")
			.then((res) => res.json())
			.then((data) => {
				setSortedData(data);
				
			})
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		getTableData();
	}, []);
	const handleClick = (id) => {
	
		setBgColor(id);
	};
	const handleDefaultSort = () => {
		const nData = [...sortedData].sort((a, b) => {
			return a.id > b.id ? 1 : -1;
		});
		setSortedData(nData);
	};
	const handleSortDesc = () => {
		const nData = [...sortedData].sort((a, b) => {
			return a.first_name > b.first_name ? -1 : 1;
		});
		setSortedData(nData);
	};
	const handleSortAsce = () => {
		const nData = [...sortedData].sort((a, b) => {
			return b.first_name > a.first_name ? -1 : 1;
		});
		setSortedData(nData);
	};

	return (
		<div className="App my-20 ">
			<div className="container mx-auto">
				<div className="xl:w-10/12 mx-auto">
					<div className="partOne">
						<h2 className="text-3xl text-center my-10">Frontend Developer Assignment</h2>
						<h2 className="text-xl text-center my-10">For thechefkart.com</h2>
						<TableWrap
							tableLoadData={sortedData}
							handleSortDesc={handleSortDesc}
							handleSortAsce={handleSortAsce}
							handleDefaultSort={handleDefaultSort}
							bgColor={bgColor}
							handleClick={handleClick}
						></TableWrap>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
