import React from 'react';

const MaturityGroup = ({crop, setMaturityGroup}) => {

	return (<div>

		{
			crop === "kukorica" ?

			<div className="maturitygroup-container">
				<label>Éréscsoport</label>
				<select  onChange={(e)=> {setMaturityGroup(e.target.value)}}>
					<option value="all">Összes</option>
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
					<label>Éréscsoport</label>
					<select  onChange={(e)=> {setMaturityGroup(e.target.value)}}>
						<option value="all">Összes</option>
						<option value="igen korai">igen korai</option>
						<option value="korai">korai</option>
						<option value="közép-korai">közép-korai</option>
						<option value="középérésű">középérésű</option>						
					</select>
				</div>

			:

			crop === "őszi káposztarepce" ?

			<div className="maturitygroup-container">
				<label>Éréscsoport</label>
				<select  onChange={(e)=> {setMaturityGroup(e.target.value)}}>
					<option value="all">Összes</option>					
					<option value="korai">korai</option>
					<option value="közép-korai">közép-korai</option>
					<option value="középérésű">középérésű</option>						
				</select>
			</div>
	
			: 

			false

		}		
		
	</div>)
};

export default MaturityGroup;