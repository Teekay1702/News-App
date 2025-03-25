import {useEffect, useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Home.css'

const Home = () => {
	const [articles, setArticles] = useState([]);
	const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
	console.log(API_KEY);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
				const data = await response.json();
				setArticles(data.articles);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};
		fetchNews();
	}, [])

	return (
		<div>
			<h1>Latest News</h1>
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
