import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaVolumeHigh } from "react-icons/fa6";

const Gamenav = () => {
  return (
    <Card  className='bg-black' style={{border: 'solid', borderColor: 'grey', borderWidth: '1px'}}>
      <Row className='d-flex align-items-center' style={{height: '46px'}}>
        <Col style={{color: 'white', display: 'flex', justifyContent:'space-between'}}>
          <span><CiMenuBurger className='mx-2' style={{height: '36px', width:'36px'}} color='white'/></span>
          <span><Button className='bg-#34B7AA mx-2' style={{borderColor:'white'}}>Log In</Button></span>
          <span><Button className='bg-black mx-2' style={{width:'90px', borderColor:'white'}}>Bal: 0.00</Button></span>
          <span><FaVolumeHigh className='mx-2'  style={{height: '30px', width:'30px'}} color='red'/></span> 
        </Col>
      </Row>
    </Card>
  )
}

export default Gamenav;
