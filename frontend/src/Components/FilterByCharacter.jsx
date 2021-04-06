import React from 'react';

const FilterByCharacter = (props) => {

	return (

		<div className="filter-container">

			{
				props.crop === "kukorica" ?

				<div className="filter-container">
					
					<div className="character-container">
						<label>szárazságtűrés</label>
						<input type="checkbox" onClick={() => !props.drought ? props.setDrought("szárazság") : props.setDrought("")}/>
					</div>

					<div className="character-container">
						<label>termésstabilitás</label>
						<input type="checkbox" onClick={() => !props.yieldStability ? props.setYieldStability("termésstabilitás") : props.setYieldStability("")}/>
					</div>

					<div className="character-container">
						<label>kiemelkedő termőképesség</label>
						<input type="checkbox" onClick={() => !props.topYield ? props.setTopYield("kiemelkedő termőképesség") : props.setTopYield("")}/>
					</div>

					<div className="character-container">
						<label>korai vethetőség</label>
						<input type="checkbox" onClick={() => !props.earlySowing ? props.setEarlySowing("korai vetés") : props.setEarlySowing("")}/>
					</div>					

				</div>

					:

					false

			}
		
		</div>
	)
};

export default FilterByCharacter;

