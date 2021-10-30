import React from 'react'
import {Card,Button} from 'react-bootstrap'



const Cards = (props) => {
    return (
        <div>
            <Card>
  <Card.Img variant="top" src={props.img} style={{height:'13rem'}} />
  <Card.Body>
    <Card.Title className='text-center text-primary'>{props.title}</Card.Title>
    <Card.Text>
      {props.desc}
    </Card.Text>

    <button className='btn btn-outline-primary'>Click Here</button>

  </Card.Body>
</Card>


            
        </div>
    )
}

export default Cards;
