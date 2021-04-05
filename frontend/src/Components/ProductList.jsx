import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';
import Product from './Product';
import Utilization from './Utilization';
import MaturityGroup from './MaturityGroup';
import {v4 as uuidv4} from 'uuid';


const ProductList = () => {

	const [products, setProducts] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false)

	const [maturityGroup, setMaturityGroup] = useState('all');
	const [technology, setTechnology] = useState('all');
	const [crop, setCrop] = useState('all');
	const [utilization, setUtilization] = useState('all');

	useEffect(() => {

		fetch('http://localhost:8000/')
		.then(response => response.json())
		.then((data) => {
			setProducts(data.products);
			setIsLoaded(true);
		})		

	}, []);

	//maturity group

	const selectByCrop = (product) => {
		return product.crop === crop || crop === "all" ? true : false;
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


	//filters
	const filteredProducts = products
	.filter((product) => selectByCrop(product))
	.filter((product) => selectByUtilization(product))
	.filter((product) => selectByMaturityGroup(product))
	.filter((product) => selectByTechnology(product));

	
	return (
		<div className="productTable-cont">

			<div className="filter-container">

				<div className="crop-container">
					<label>Faj</label>
					<select  onChange={(e) => {setCrop(e.target.value)}}>
						<option value="all">Összes</option>
						<option value="kukorica">kukorica</option>
						<option value="napraforgó">napraforgó</option>
						<option value="őszi káposztarepce">őszi káposztarepce</option>
						<option value="őszi búza">őszi búza</option>
						<option value="őszi árpa">őszi árpa</option>					
					</select>
				</div>				
					
				<Utilization crop={crop} setUtilization={setUtilization}/>

				<MaturityGroup crop={crop} setMaturityGroup={setMaturityGroup} />

				<div className="technology-container">
					<label>Technológia</label>
					<select  onChange={(e) => {setTechnology(e.target.value)}}>
						<option value="all">Összes</option>
						<option value="HYDRANEO">HYDRANEO</option>
						<option value="agrility.DENSITY">agrility.DENSITY</option>
						<option value="starcover">starcover</option>
					</select>
				</div>

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
	)
}

export default ProductList;