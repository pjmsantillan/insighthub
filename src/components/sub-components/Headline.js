import Carousel from 'react-bootstrap/Carousel';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Headline = () =>{
    const [headlines, setHeadlines] = useState([]);
    
    useEffect (() =>{
        const getArticles = async () =>{
        const response = await axios.get('https://newsapi.org/v2/everything?q=latest%20news&sortBy=publishedAt&apiKey=d1a564a0eadd46a580b976b85286a530')    
        // console.log(response.data.articles)
        const limitedArticles = response.data.articles.slice(0, 20);
            console.log(limitedArticles)
        setHeadlines(limitedArticles);
        }
        getArticles();

    }, [])

    return(
        <div className="Headline">
            
            <Carousel fade>
            {headlines.map((headline, index) => (
                    <Carousel.Item key={index}  >
                        <img src={headline.urlToImage} className='d-block w-100' style={{ width: '300px', height: '500px', objectFit: 'cover'}} alt='...' />
                        <Carousel.Caption>
                            <h3 style={{color:'black' }}>{headline.title}</h3>
                            <p style={{color:'black' }}>{headline.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
         

        </div>
    )

}

export default Headline