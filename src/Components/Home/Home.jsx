import {useEffect, useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Home.css'

const Home = ({selectedCategory}) => {
	const [articles, setArticles] = useState([]);
	const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`);
				const data = await response.json();
				setArticles(data.articles);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};
		fetchNews();
	}, [selectedCategory])

	return (
		<div>
			<h1>Latest {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} News</h1>
			<div className="news-list">
				{
				articles.map((article, index) => (
					<NewsCard key={index}
						article={article}/>
				))
			} </div>
		</div>
	);
}

export default Home;
