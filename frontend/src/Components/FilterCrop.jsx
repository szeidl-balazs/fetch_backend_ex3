import React from 'react';

const FilterCrop = ({setCrop}) => {

	return (
		<div className="filter-container">
				<div className="crop-container">
					<label>faj</label>
					<select  onChange={(event) => {setCrop(event.target.value)}}>
						<option value="none">Válasszon növénykultúrát!</option>
						<option value="kukorica">kukorica</option>
						<option value="napraforgó">napraforgó</option>
						<option value="őszi káposztarepce">őszi káposztarepce</option>
						<option value="őszi búza">őszi búza</option>
						<option value="őszi árpa">őszi árpa</option>					
					</select>
				</div>
		</div>
	)
};

export default FilterCrop;