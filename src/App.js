import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// Getting errors when I add one item to cart, then click 'Cart' or if I just add two items to cart. So testing outputs
		console.log('The item that is about to be added to cart is:', item);
		// add the given item to the cart
		setCart([...cart, item]);
		console.log('Current cart is now:', cart);
		// Fixed the bug. I apparently forgot to wrap the spread and the item in [].

	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={cart}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						{/* <Products products={products} addItem={addItem} /> */}
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
