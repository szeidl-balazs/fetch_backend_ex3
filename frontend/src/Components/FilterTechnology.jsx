import React from 'react';

const FilterTechnology = ({crop, setTechnology}) => {

	return (
		<div>

			{
				crop === "kukorica" ?

				<div className="technology-container">
					<label>Technológia</label>
					<select  onChange={(event) => {setTechnology(event.target.value)}}>
						<option value="all">összes</option>
						<option value="HYDRANEO">HYDRANEO</option>
						<option value="agrility.DENSITY">agrility.DENSITY</option>
						<option value="starcover">starcover</option>
					</select>
				</div>

				:

				crop === "napraforgó" ?

				<div className="technology-container">
						<label>Technológia</label>
						<select onChange={(event) => {setTechnology(event.target.value)}}>
							<option value="all">összes</option>
							<option value="hagyományos gyomirtás">hagyományos gyomirtás</option>
							<option value="Clearfield gyomirtás">Clearfield gyomirtás</option>
							<option value="Clearfield Plus gyomirtás">Clearfield Plus gyomirtás</option>
							<option value="EXPRESS toleráns (SX) gyomirtás">EXPRESS gyomirtás SX</option>
						</select>
				</div>

				:

				crop === "őszi káposztarepce" ?

				<div className="technology-container">
						<label>Technológia</label>
						<select onChange={event => setTechnology(event.target.value)}>
							<option value="all">összes</option>
							<option value="hagyományos gyomirtás">hagyományos gyomirtás</option>
							<option value="Clearfield gyomirtás">Clearfield gyomirtás</option>
						</select>
				</div>

				:

				false

			}

		</div>
	);
}

export default FilterTechnology;