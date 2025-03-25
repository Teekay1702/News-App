import { useEffect, useState} from 'react';
import './Home.css'

const Home = () => {
    const [articles, setArticles] = useState([]);
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    console.log(API_KEY);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
                );
                const data = await response.json();
                setArticles(data.articles);
            }
            catch (error) {
                console.error("Error fetching news:", error);
            }
        }
        fetchNews();
    }, [])

     return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;