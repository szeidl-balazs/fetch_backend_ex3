import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';
import Product from './Product';
import FilterCrop from './FilterCrop';
import FilterUtilization from './FilterUtilization';
import FilterMaturityGroup from './FilterMaturityGroup';
import FilterTechnology from './FilterTechnology';
import FilterFeatures from './FilterFeatures';
import {v4 as uuidv4} from 'uuid';


const ProductList = () => {

	const [productsArr, setProductsArr] = useState([]); //Total fetched array
	const [isLoaded, setIsLoaded] = useState(false)

	const [crop, setCrop] = useState('all');
	const [utilization, setUtilization] = useState('all');
	const [maturityGroup, setMaturityGroup] = useState('all');
	const [technology, setTechnology] = useState('all');
	const [trait, setTrait] = useState([]);

	console.log(productsArr);

	useEffect(() => {

		fetch('http://localhost:8000/')
		.then(response => response.json())
		.then((data) => {
			setProductsArr(data.products);
			setIsLoaded(true);
		})		

	}, []);

	//filtering conditions:

	const selectByCrop = (product) => {
		return product.crop === crop ? true : crop === "none" ? false : false;
	}

	const selectByUtilization = (product) => {
		return product.utilization === utilization || utilization === "all" ? true : false;
	}


	const selectByMaturityGroup = (product) => {
		return product.maturitygroup === maturityGroup || maturityGroup === "all" ? true : false;
	}

	const selectByTechnology = (product) => {
		return product.technology === technology || technology === "all" ? true : false;
	}

	const selectByDroughtTolerance = (product) => {
		return product.features.join(" ").includes(trait);
	}


	//filters from productsArr array, product means an object {} in this productsArr:

	const filteredProducts = productsArr
	.filter((product) => selectByCrop(product))
	.filter((product) => selectByUtilization(product))
	.filter((product) => selectByMaturityGroup(product))
	.filter((product) => selectByTechnology(product))
	.filter((product) => selectByDroughtTolerance(product));

	
	return (
		<div className="productTable-cont">

			<div className="filter-container">					
				<FilterCrop setCrop={setCrop}/>
				<FilterUtilization crop={crop} setUtilization={setUtilization}/>
				<FilterMaturityGroup crop={crop} setMaturityGroup={setMaturityGroup} />
				<FilterTechnology crop={crop} setTechnology={setTechnology}/>
				<FilterFeatures setTrait={setTrait}/>
			</div>

			<div>
				{
					isLoaded 
					?
					filteredProducts.map((filteredproduct) =>

						<Product 
							key={uuidv4()} 
							crop={filteredproduct.crop}
							brand={filteredproduct.brand} 
							name={filteredproduct.name}
							utilization={filteredproduct.utilization}
							fao={filteredproduct.fao}
							maturitygroup={filteredproduct.maturitygroup}
							technology={filteredproduct.technology}
							features={filteredproduct.features}
							benefits={filteredproduct.benefits}
						/>)

					:
					<LoadingMask />
				}
			</div>

		</div>
	);
}

export default ProductList;