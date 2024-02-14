import { Card, Row, Container, Button} from 'react-bootstrap';
import React,{useState, useEffect} from 'react';
import axios from 'axios';


const LatestNewscards = () =>{
    const [latestNews, setLatestNews] = useState([]);
    
    useEffect (() =>{
        const getArticles = async () =>{
        const response = await axios.get('https://newsapi.org/v2/everything?q=latest%20news&sortBy=publishedAt&apiKey=d1a564a0eadd46a580b976b85286a530')    
        // console.log(response.data.articles)
        const limitedArticles = response.data.articles.slice(0, 12);
            console.log(limitedArticles)
        setLatestNews(limitedArticles);
        }
        getArticles();

    }, [])

    return(
       <div className="LatestNewscards" style={{backgroundColor:'#002C70',}}>
       <Container >
                <h1 style={{paddingTop:'30px', marginBottom:'40px', color:'white'}}> News</h1> 
                <Row className="justify-content-center">
                {latestNews.map((latestnews, index)=>(
                        <Card className="mx-2" key={index} style={{ width: '360px', height: '590px', marginTop:'20px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src={latestnews.urlToImage} style={{ height: '200px',  marginTop:'20px',objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title><h5 style={{color:'black'}}>{latestnews.title}</h5></Card.Title>
                                    <Card.Text>
                                            {latestnews.description}
                                    </Card.Text>
                                    <Button variant="primary">Read More..</Button>{' '}
                            </Card.Body>
                            </Card>
                        ))}
                </Row>
       </Container>

       
      
       </div>
    )

}
export default LatestNewscards;