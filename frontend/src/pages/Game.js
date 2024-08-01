import React from 'react'
import Gamenav from '../components/Gamenav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Results from '../components/Results';
import Bets from '../components/Bets';
import Placebet from '../components/Placebet';
import '../App.css';
import Bikebackend from '../components/Bikebackend';


const Game = () => {
  return (
    <div>
        <Row className='bg-black' lg={3} md={2} sm={1} xs={1}>
          <Col ></Col>

          <Col >
            <Gamenav />
            <Results />
            <Bikebackend />
            <Placebet />
            <Bets />
          </Col>

          <Col></Col>
        </Row>
    </div>
  )
}

export default Game;