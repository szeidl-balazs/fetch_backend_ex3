import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';
import Product from './Product';
import FilterCrop from './FilterCrop';
import FilterUtilization from './FilterUtilization';
import FilterMaturityGroup from './FilterMaturityGroup';
import FilterTechnology from './FilterTechnology';
import FilterByCharacter from './FilterByCharacter';
import {v4 as uuidv4} from 'uuid';


const ProductList = () => {

	const [productsArr, setProductsArr] = useState([]); //Total fetched array
	const [isLoaded, setIsLoaded] = useState(false)

	const [crop, setCrop] = useState('all');
	const [utilization, setUtilization] = useState('all');
	const [maturityGroup, setMaturityGroup] = useState('all');
	const [technology, setTechnology] = useState('all');
	const [drought, setDrought] = useState("");
	const [yieldStability, setYieldStability] = useState("");
	const [topYield, setTopYield] = useState("");
	const [earlySowing, setEarlySowing] = useState("");

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

	const filterByCrop = (product) => {
		return product.crop === crop ? true : crop === "none" ? false : false;
	}

	const filterByUtilization = (product) => {
		return product.utilization === utilization || utilization === "all" ? true : false;
	}


	const filterByMaturityGroup = (product) => {
		return product.maturitygroup === maturityGroup || maturityGroup === "all" ? true : false;
	}

	const filterByTechnology = (product) => {
		return product.technology === technology || technology === "all" ? true : false;
	}

	const filterByCharacter = (product, character) => {
		if (character !== "") {
			return product.features.join(" ").includes(character) || product.benefits.join(" ").includes(character);
		} else {
			return true;
		}
		
	}

	//filters from productsArr array, product means an object {} in this productsArr:
	let filteredProducts = productsArr
	.filter((product) => filterByCrop(product))
	.filter((product) => filterByUtilization(product))
	.filter((product) => filterByMaturityGroup(product))
	.filter((product) => filterByTechnology(product))
	.filter((product) => filterByCharacter(product, drought))
	.filter((product) => filterByCharacter(product, yieldStability))
	.filter((product) => filterByCharacter(product, topYield))
	.filter((product) => filterByCharacter(product, earlySowing))
	;

	
	return (
		<div className="productTable-cont">

			<div className="filter-group-container">					
				<FilterCrop setCrop={setCrop}/>
				<FilterUtilization crop={crop} setUtilization={setUtilization}/>
				<FilterMaturityGroup crop={crop} setMaturityGroup={setMaturityGroup} />
				<FilterTechnology crop={crop} setTechnology={setTechnology}/>
				<FilterByCharacter 
					crop={crop}
					drought={drought} setDrought={setDrought}
					yieldStability={yieldStability} setYieldStability={setYieldStability}
					topYield={topYield} setTopYield={setTopYield}
					earlySowing={earlySowing} setEarlySowing={setEarlySowing}
				/>
			</div>

			<div className="product-group-container">
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