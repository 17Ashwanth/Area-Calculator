
import './App.css';
import Circle from './component/Circle';
import React, { useState } from 'react';
import Square from './component/Square';
import Triangle from './component/Triangle';
import Recatngle from './component/Recatngle';


function App() {
  const [IsCircle,setIsCircle]=useState(false)
  const [IsSquare, setIsquare]=useState(false)
  const [isTriangle, setIsTriangle]=useState(false)
  const [isRectangle,setIsRectangle]=useState(false)
  const [IsButton,setIsButton]=useState(true)

  

  const caluclateCircle = ()=>
  {
    setIsCircle(true)
    setIsButton(false)
  }
  const calculateSquare=()=>{
    setIsquare(true)
    setIsButton(false)
  }
  const calculateTriangle=()=>{
    setIsTriangle(true)
    setIsButton(false)
  }
  const calculateRect=()=>{
    setIsRectangle(true)
    setIsButton(false)
  }

  const reset =()=>
  {
    setIsCircle(false)
    setIsquare(false)
    setIsTriangle(false)
    setIsRectangle(false)
    setIsButton(true)
  }
  return (
    <div className="App">
        <div id='div' style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
        <div className='bg-light p-5 rounded'>
          <div>
          <h1 className='d-flex justify-content-center align-items-center' >Area Calculator</h1>
          </div>

       {IsButton && <div>
        <h5 className=' para text-center mb-4'>Calculate the Area of Rectangle, Square, Triangle, Circle</h5>
          <div className='d-flex justify-content-evenly align-items-center'>
          <button className='btn btn-outline-dark' variant="contained" onClick={calculateSquare}  style={{width:"100px",height:'50px', fontWeight:'550'}}>SQUARE</button>
          <button className='btn btn-outline-dark' variant="contained" onClick={calculateRect} style={{width:"105px",height:'50px',fontWeight:'550'}}>RECTANGLE</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-3'>
          <button className='btn btn-outline-dark' variant="contained" onClick={calculateTriangle} style={{width:"100px",height:'50px',fontWeight:'550'}}>TRIANGLE</button>
          <button className='btn btn-outline-dark' onClick={caluclateCircle} style={{width:"100px",height:'50px',fontWeight:'550'}}>CIRCLE</button>
          </div>
        </div>}
        {IsCircle && <Circle/>}
        {IsSquare && <Square/>}
        {isTriangle && <Triangle/>}
        {isRectangle && <Recatngle/>}

        { IsCircle &&
        <div className='d-flex justify-content-center mt-5'>
          <button className='bg-dark text-white'  onClick={reset} style={{width:"100px",height:'50px'}}>Back</button></div>}
        { IsSquare &&
        <div className='d-flex justify-content-center mt-5'>
          <button className='bg-dark text-white'  onClick={reset} style={{width:"100px",height:'50px'}}>Back</button></div>}
        { isTriangle &&
        <div className='d-flex justify-content-center mt-5'>
          <button className='bg-dark text-white'  onClick={reset} style={{width:"100px",height:'50px'}}>Back</button></div>}
        { isRectangle &&
        <div className='d-flex justify-content-center mt-5'>
          <button className='bg-dark text-white'  onClick={reset} style={{width:"100px",height:'50px'}}>Back</button></div>}
        
          </div>
        </div>
      </div>

  ) ;
}

export default App;
