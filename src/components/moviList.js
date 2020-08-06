import React ,{useState} from 'react';
import MovieCard from './movieCard';
import { Form, Col, Row } from 'react-bootstrap';
import ReactStars from 'react-star-rating-component';

const MoviList = (props) => {
    const [search, setSearch] = useState('')
    const [star, setStar] = useState(0)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    const ratingChanged = (newRating) => {
        setStar(newRating);
        console.log(newRating)

    }
    return (
        <div>
            <Row>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="Search" width="300px" onInput={handleSearch} />
                </Col>
                <Col>
                    <ReactStars
                        count={5}
                        
                        size={24}
                        onStarClick= {ratingChanged}
                        activeColor="#ffd700"
                    />
                </Col>
                </Row>
                
                <div style={{ display: "flex", justifyContent: "space-arround" }} >
                    {props.movie.filter(el => el.titre.toUpperCase().includes(search.toUpperCase())).filter(el=>el.rate>=star).map(el => <MovieCard titre={el.titre} image={el.image} rate={el.rate} />)}
                </div>
            
        </div>
    );
}

export default MoviList;