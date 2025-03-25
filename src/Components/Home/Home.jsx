import {useEffect, useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Home.css'

const Home = ({selectedCategory}) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const API_KEY = "15c6a7e0b812474cb6af5dbb9df9cea1";

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setLoading(true);
				const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`);
                if (!response.ok) {
					throw new Error(`Error fetching news: ${response.statusText}`);
				}
				const data = await response.json();
                if (data.articles && Array.isArray(data.articles)) {
					setArticles(data.articles);
				} else {
					throw new Error('No Articles Found');
				}
			} catch (error) {
                setError(error.message);
				console.error("Error fetching news:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchNews();
	}, [selectedCategory])

    if (error) {
        return <div className='error'>Error: {error}</div>;
    }

	return (
		<div>
			<h1> {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} News</h1>
			{
			loading ? (
				<div className="spinner-container">
					<div className="spinner"></div>
				</div>
			) : (
				<div className="news-list">
					{
					articles.map((article, index) => (
						<NewsCard key={index}
							article={article}/>
					))
				} </div>
			)
		} </div>
	);
}

export default Home;
