import { Card, Row, Container, Button} from 'react-bootstrap';
import React,{useState, useEffect} from 'react';
import axios from 'axios';



const Sportcard = () =>{
    const [SportNews, setSportNews] = useState([]);
    useEffect (() =>{
        const getArticles = async () =>{
        const response = await axios.get('https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=d1a564a0eadd46a580b976b85286a530')    
      
        console.log('sdsdsdsd',response.data.articles)
        const limitedArticles = response.data.articles.slice(0, 12);
            console.log(limitedArticles)
        setSportNews(limitedArticles);
        }
        getArticles();

    }, [])

    return(
        <div className="Sportcard">
       <Container>
                <h1 style={{paddingTop:'30px', marginBottom:'40px', color:'white'}}>Sport News</h1> 
                <Row className="justify-content-center">
                {SportNews.map((sportsnews, index)=>(
                        <Card className="mx-2" key={index} style={{ width: '360px', height: '590px', marginTop:'20px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src={sportsnews.urlToImage} style={{ height: '200px',  marginTop:'20px',objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title><h5 style={{color:'black'}}>{sportsnews.title}</h5></Card.Title>
                                    <Card.Text>
                                            {sportsnews.description}
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

export default Sportcard