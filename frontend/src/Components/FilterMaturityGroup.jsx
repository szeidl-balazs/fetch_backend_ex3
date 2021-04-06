import React from 'react';

const FilterMaturityGroup = ({crop, setMaturityGroup}) => {

	return (<div className="filter-container">

		{
			crop === "kukorica" ?

			<div className="maturitygroup-container">
				<label>éréscsoport</label>
				<select  onChange={(e)=> {setMaturityGroup(e.target.value)}}>
					<option value="all">összes</option>
					<option value="igen korai">igen korai</option>
					<option value="korai">korai</option>
					<option value="közép-korai">közép-korai</option>
					<option value="középérésű">középérésű</option>
					<option value="kései">kései</option>
				</select>
			</div>

			:

			crop === "napraforgó" ?

				<div className="maturitygroup-container">
					<label>éréscsoport</label>
					<select  onChange={(e)=> {setMaturityGroup(e.target.value)}}>
						<option value="all">összes</option>
						<option value="igen korai">igen korai</option>
						<option value="korai">korai</option>
						<option value="közép-korai">közép-korai</option>
						<option value="középérésű">középérésű</option>						
					</select>
				</div>

			:

			crop === "őszi káposztarepce" ?

			<div className="maturitygroup-container">
				<label>éréscsoport</label>
				<select  onChange={(e)=> {setMaturityGroup(e.target.value)}}>
					<option value="all">összes</option>					
					<option value="korai">korai</option>					
					<option value="középérésű">középérésű</option>						
				</select>
			</div>
	
			: 

			false

		}		
		
	</div>)
};

export default FilterMaturityGroup;