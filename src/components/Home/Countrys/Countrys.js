import React from 'react';
import { Button, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Countrys = (props) => {
    const { name, capital,population} = props.country;
    const mainCard = { 
        width:"400px",
        float:"left",
        margin:"20px",
        marginLeft:"50px",
        border:"2px solid gray",
        borderRadius:"5px",
        textAlign:"center",
        
       
        
    }
    
    
    return (

        
    <div >
        
        <Container>
        <Col style={mainCard}>
         
            Name: {name}
            <p>Capital: {capital}</p>
            <p>Population:{population}</p>
            <Link to={`/name/${name}`}>
               <Button style={{margin:"10px"}}>Details</Button>
            </Link>
            
        </Col>
        </Container>
        
        </div>
        
    );
};

export default Countrys;