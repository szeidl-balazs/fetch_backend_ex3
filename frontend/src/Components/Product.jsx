import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Product = (props) => {

	return (
		<div className="product-container">
			<div>{props.brand}</div>
			<div>{props.name}</div>
			<div>{props.utilization}</div>
			<div>{props.fao}</div>
			<div>{props.maturitygroup}</div>
			<div>{props.technology}</div>
			<div className="bulleted-list"><ul>{props.features.map(feature => <li key={uuidv4()}>{feature}</li>)}</ul></div>
			<div className="bulleted-list"><ul>{props.benefits.map(benefit => <li key={uuidv4()}>{benefit}</li>)}</ul></div>
		</div>
	)
};

export default Product;