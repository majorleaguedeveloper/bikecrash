import React, { useState } from 'react'

const Results = () => {
  const [results, ] = useState([1.01, 2.01, 3.01, 4.01, 5.01, 6.01, 7.01, 8.01])
  return (
    <div className='bg-black my-1 d-flex align-items-center' style={{height:'40px', justifyContent:'space-between', border: 'solid', borderColor: 'grey', borderWidth: '1px'}}>
      <span className='mx-1' style={{color:'white'}}>{results[0]}</span>
      <span style={{color:'white'}}>{results[1]}</span>
      <span style={{color:'white'}}>{results[2]}</span>
      <span style={{color:'white'}}>{results[3]}</span>
      <span style={{color:'white'}}>{results[4]}</span>
      <span style={{color:'white'}}>{results[5]}</span>
      <span style={{color:'white'}}>{results[6]}</span>
      <span className='mx-1' style={{color:'white'}}>{results[7]}</span>
    </div>
  )
}

export default Results
