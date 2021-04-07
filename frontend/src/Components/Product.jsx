import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Product = (props) => {

	return (
		<div className="product-container">
			{/*<div>{props.brand}</div>*/}
			<div className="product-name">{props.name}</div>
			<div className="product-feature">Hasznosítás: {props.utilization}</div>
			<div className="product-feature">FAO: {props.fao}</div>
			<div className="product-feature">Éréscsoport: {props.maturitygroup}</div>
			<div className="product-feature">Technológia: {props.technology}</div>
			<div className="product-feature">Tulajdonságok: </div>
			<div className="bulleted-list product-feature"><ul>{props.features.map(feature => <li key={uuidv4()}>{feature}</li>)}</ul></div>
			<div className="product-feature">Ajánlás, felhasználási előnyök: </div>
			<div className="bulleted-list product-feature"><ul>{props.benefits.map(benefit => <li key={uuidv4()}>{benefit}</li>)}</ul></div>
		</div>
	);
}

export default Product;