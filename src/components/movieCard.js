import React from 'react';
import {Card} from 'react-bootstrap';
import ReactStars from 'react-star-rating-component';

const MovieCard = (props) => {
    return ( 
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} height="300px" />
  <Card.Body>
    <Card.Title>{props.titre}</Card.Title>

    <ReactStars
                        count={5}
                        value={props.rate}
                        size={24}
                        
                        activeColor="#ffd700"
                    />
  </Card.Body>
</Card>
        </div>
     );
}
 
export default MovieCard ;