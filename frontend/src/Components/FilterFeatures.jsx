import React from 'react';

const FilterFeatures = ({setTrait}) => {

	return (
		<div>
			<input type="checkbox" name="szárazságtűrés" onClick={() => {setTrait("szárazság")}}/>
		</div>
	)
};

export default FilterFeatures;