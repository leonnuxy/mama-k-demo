import { useState } from 'react';
import styles from '../styles/Menu.module.css';

// Menu data
const menuItems = [
	{
		id: 1,
		name: 'Jollof Rice with Chicken',
		description:
			'Fragrant rice cooked in tomato sauce with spices, served with tender chicken',
		price: 15.99,
		image: 'https://via.placeholder.com/300x200?text=Jollof+Rice',
		category: 'main',
	},
	{
		id: 2,
		name: 'Egusi Soup with Fufu',
		description:
			'Melon seed soup with spinach, served with pounded yam fufu',
		price: 16.99,
		image: 'https://via.placeholder.com/300x200?text=Egusi+Soup',
		category: 'main',
	},
	{
		id: 3,
		name: 'Suya Skewers',
		description: 'Grilled beef skewers marinated in spicy peanut sauce',
		price: 12.99,
		image: 'https://via.placeholder.com/300x200?text=Suya+Skewers',
		category: 'appetizer',
	},
	{
		id: 4,
		name: 'Puff Puff',
		description:
			'Sweet, deep-fried dough balls, a popular West African snack',
		price: 7.99,
		image: 'https://via.placeholder.com/300x200?text=Puff+Puff',
		category: 'appetizer',
	},
	{
		id: 5,
		name: 'Moin Moin',
		description:
			'S steamed bean pudding with bell peppers, onions, and spices',
		price: 8.99,
		image: 'https://via.placeholder.com/300x200?text=Moin+Moin',
		category: 'side',
	},
	{
		id: 6,
		name: 'Zobo Drink',
		description:
			'Sweet-tart hibiscus drink infused with ginger and pineapple',
		price: 4.99,
		image: 'https://via.placeholder.com/300x200?text=Zobo+Drink',
		category: 'beverage',
	},
];

// Categories
const categories = [
	{ id: 'all', name: 'All Items' },
	{ id: 'main', name: 'Main Dishes' },
	{ id: 'appetizer', name: 'Appetizers' },
	{ id: 'side', name: 'Side Dishes' },
	{ id: 'beverage', name: 'Beverages' },
];

export default function Menu({ addToCart }) {
	const [activeCategory, setActiveCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');

	const filteredItems = menuItems.filter(item => {
		const matchesCategory =
			activeCategory === 'all' || item.category === activeCategory;
		const matchesSearch =
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.description.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<section id="menu" className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Our Menu
					</h2>
					<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
						Discover our selection of authentic West African dishes, prepared
						with love and tradition.
					</p>
				</div>

				{/* Search & Filter */}
				<div className="mb-8 flex flex-col md:flex-row gap-4 md:items-center justify-between">
					<div className="relative">
						<input
							type="text"
							placeholder="Search menu..."
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
							<i className="fas fa-search"></i>
						</span>
					</div>

					<div className="flex flex-wrap gap-2">
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`px-4 py-2 rounded-full text-sm font-medium ${
									activeCategory === category.id
										? 'bg-orange-500 text-white'
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								{category.name}
							</button>
						))}
					</div>
				</div>

				{/* Menu Items */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredItems.length > 0 ? (
						filteredItems.map(item => (
							<div
								key={item.id}
								className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
							>
								<img
									src={item.image}
									alt={item.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<div className="flex justify-between items-start mb-2">
										<h3 className="text-xl font-semibold text-gray-900">
											{item.name}
										</h3>
										<span className="text-lg font-bold text-orange-500">
											${item.price.toFixed(2)}
										</span>
									</div>
									<p className="text-gray-600 mb-4">
										{item.description}
									</p>
									<button
										onClick={() => addToCart(item)}
										className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors"
									>
										<i className="fas fa-plus mr-2"></i> Add to Cart
									</button>
								</div>
							</div>
						))
					) : (
						<div className="col-span-full text-center py-8">
							<p className="text-gray-500 text-lg">
								No items found. Try a different search term or category.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
