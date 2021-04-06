import React from 'react';


const FilterUtilization = ({crop, setUtilization}) => {

	console.log(crop);

	return (
		<div>

			{
				crop === "kukorica" ?
					<div className="utilization-container">
						<label>Hasznosítás</label>
						<select onChange={(e) => {setUtilization(e.target.value)}}>
							<option value="all">összes</option>
							<option value="szemes">szemes</option>
							<option value="siló">siló</option>
							<option value="kettős">kettős</option>
						</select>
					</div>

				:

				crop === "napraforgó" ?
					<div className="utilization-container">
						<label>Hasznosítás</label>
						<select>
							<option value="összes">összes</option>
							<option value="linolsavas">linolsavas</option>
							<option value="magas olajsavas">magas olajsavas</option>
						</select>
					</div>

				:

				false
			}
		</div>
	);
}

export default FilterUtilization;

