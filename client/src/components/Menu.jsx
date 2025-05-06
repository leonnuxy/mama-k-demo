import { useState } from 'react';
import styles from '../styles/Menu.module.css';

// Import images
import jollofRiceImg from '../assets/jollof_rice.jpg';
import egusiSoupImg from '../assets/egusi_soup.png';
import afangSoupImg from '../assets/afang_soup.jpg';
import beansPorridgeImg from '../assets/beans_porridge.jpg';
import moiMoiImg from '../assets/moi_moi.jpg';
import edikaikongImg from '../assets/edikainkon_soup.jpg';
import friedRiceImg from '../assets/fried_rice.jpg';
import ogbonoSoupImg from '../assets/ogbono_soup.png';
import fishStewImg from '../assets/fish_stew.jpg';
import pepperSoupImg from '../assets/pepper_soup.jpg';
import pepperedChickenImg from '../assets/peppered_chicken.jpg';
import suyaSkewersImg from '../assets/suya_skewers.jpg';
import goatMeatImg from '../assets/goat_meat.jpg';
import pepperedGoatMeatImg from '../assets/peppered_goat_meat.webp';
import ofadaStewImg from '../assets/ofada_stew.jpg';

// Menu data
const menuItems = [
	{
		id: 1,
		name: 'Jollof Rice with Chicken',
		description:
			'Fragrant rice cooked in tomato sauce with spices, served with tender chicken',
		price: 15.99,
		image: jollofRiceImg,
		category: 'rice',
	},
	{
		id: 2,
		name: 'Egusi Soup',
		description:
			'Melon seed soup with spinach',
		price: 16.99,
		image: egusiSoupImg,
		category: 'soup',
	},
	{
		id: 3,
		name: 'Afang Soup',
		description: 'Afang soup with goat meat and vegetables',
		price: 12.99,
		image: afangSoupImg,
		category: 'soup',
	},
	{
		id: 4,
		name: 'Beans Porridge',
		description:
			'Beans porridge with spices and palm oil',
		price: 7.99,
		image: beansPorridgeImg,
		category: 'main',
	},
	{
		id: 5,
		name: 'Moin Moin',
		description:
			'Steamed bean pudding with bell peppers, onions, and spices',
		price: 8.99,
		image: moiMoiImg,
		category: 'side',
	},
    {
        id: 6,
        name: 'Edikang Ikong',
        description:
            'Vegetable soup with assorted meats and spices',
        price: 14.99,
        image: edikaikongImg,
        category: 'soup',
    },
    {
        id: 7,
        name: 'Fried Rice',
        description:
            'Stir-fried rice with vegetables and your choice of protein',
        price: 10.99,
        image: friedRiceImg,
        category: 'rice',
    },
    {
        id: 8,
        name: 'Ogbono Soup',
        description:
            'Ground ogbono seeds soup with assorted meats and spices',
        price: 13.99,
        image: ogbonoSoupImg,
        category: 'soup',
    },
    {
        id: 9,
        name: 'Fish Stew',
        description:
            'Spicy fish stew with assorted vegetables and spices',
        price: 11.99,
        image: fishStewImg,
        category: 'soup',
    },
    {
        id: 10,
        name: 'Suya Skewers',
        description:
            'Grilled spicy beef skewers served with onions and tomatoes',
        price: 9.99,
        image: suyaSkewersImg,
        category: 'appetizer',
    },
    {
        id: 11,
        name: 'Goat Meat',
        description:
            'Tender goat meat cooked with spices and herbs',
        price: 12.99,
        image: goatMeatImg,
        category: 'meat',
    },
    {
        id: 12,
        name: 'Peppered Goat Meat',
        description:
            'Spicy goat meat cooked with peppers and herbs',
        price: 13.99,
        image: pepperedGoatMeatImg,
        category: 'meat',
    },
    {
        id: 13,
        name: 'Ofada Stew',
        description:
            'Traditional Nigerian stew made with green peppers and assorted meats',
        price: 14.99,
        image: ofadaStewImg,
        category: 'soup',
    },
    {
        id: 14,
        name: 'Peppered Chicken',
        description:
            'Spicy chicken cooked with peppers and herbs',
        price: 12.99,
        image: pepperedChickenImg,
        category: 'meat',
    },
    {
        id: 15,
        name: 'Pepper Soup',
        description:
            'Spicy soup made with assorted meats and spices',
        price: 10.99,
        image: pepperSoupImg,
        category: 'soup',
    },
];

// Categories
const categories = [
	{ id: 'all', name: 'All Items' },
	{ id: 'soup', name: 'Soups & Stews' },
	{ id: 'rice', name: 'Rice Dishes' },
	{ id: 'appetizer', name: 'Appetizers' },
	{ id: 'side', name: 'Side Dishes' },
	{ id: 'meat', name: 'Meat Dishes' },
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
		<section id="menu" className={styles.menuSection}>
			<div className={styles.container}>
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>
						Our Menu
					</h2>
					<p className={styles.sectionSubtitle}>
						Discover our selection of authentic Nigerian dishes, prepared
						with love and tradition.
					</p>
				</div>

				{/* Search & Filter */}
				<div className={styles.searchFilterControls}>
					<div className={styles.searchInputWrapper}>
						<input
							type="text"
							placeholder="Search menu..."
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							className={styles.searchInput}
						/>
						<span className={styles.searchIcon}>
							<i className="fas fa-search"></i>
						</span>
					</div>

					<div className={styles.categoryButtonsContainer}>
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`${styles.categoryButton} ${
									activeCategory === category.id ? styles.categoryButtonActive : ''
								}`}
							>
								{category.name}
							</button>
						))}
					</div>
				</div>

				{/* Menu Items */}
				<div className={styles.menuGrid}>
					{filteredItems.length > 0 ? (
						filteredItems.map(item => (
							<div
								key={item.id}
								className={styles.menuItem}
							>
								<img
									src={item.image}
									alt={item.name}
									className={styles.menuImage}
								/>
								<div className={styles.menuContent}>
									<div className={styles.menuItemHeader}>
										<h3 className={styles.menuItemTitle}>
											{item.name}
										</h3>
										<span className={styles.menuItemPrice}>
											${item.price.toFixed(2)}
										</span>
									</div>
									<p className={styles.menuItemDescription}>
										{item.description}
									</p>
									<button
										onClick={() => addToCart(item)}
										className={styles.addButton}
									>
										<i className={`fas fa-utensils ${styles.addButtonIcon}`}></i> Add to Cart
									</button>
								</div>
							</div>
						))
					) : (
						<div className={styles.noItemsMessageContainer}>
							<p className={styles.noItemsMessageText}>
								No items found. Try a different search term or category.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
