import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Circle() {
  const [Text,SetText]= useState('')
  const [IsText, IsSetText]=useState(true)
  const [Display,setDisplay]=useState('0')

  const getRadius=(e)=>{
    const{value}=e.target
    if(value.match(/^[0-9]*.?[0-9]+$/)){
      SetText(value)
      IsSetText(true)
    }
    else
    {
      SetText(value)
      IsSetText(false)

    }
  }

  const getCalculate=(e)=>{
    e.preventDefault();
    if(!Text)
    {
      alert('Please Enter The Radius')
    }
    else{
      setDisplay(Math.round(3.14*(Text*Text)))
    }
  }
    
  const getReset=()=>{
    SetText('');
    setDisplay('0');
    IsSetText(true)
  }
    
  

  return (
    <>
        <h2 className="text-center fw-bold mt-3">CIRCLE</h2>

<div className='bg-dark text-white justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'> 
 <h1 className='d-flex justify-content-center align-items-center'>{Display}{' '}cm <sup>2</sup></h1>
 <p className='d-flex justify-content-center align-items-center'>Total Area of the Circle</p>
  </div>

 <form className='mt-3'>
    <FloatingLabel
          controlId="floatingInput"
          label="Enter The Radius"
          className="mb-3"
        >
          <Form.Control style={{fontWeight:'750'}} type="text" autoComplete='off' value={Text} onChange={(e)=>getRadius(e)} placeholder="Enter The Radius" />
        </FloatingLabel>
          {!IsText &&<div className='d-flex justify-content-center'><p style={{color:'red',fontSize:16, textAlign:'center',justifyContent:'center',alignItems:'center'}}>Please Enter Valid Input!</p></div>}
        <div className='d-flex justify-content-between'>
          <button type='button' className='btn btn-outline-success' style={{height:'50px',fontWeight:'550'}} onClick={getCalculate}>CALCULATE</button>
          <button type='button' className='btn btn-outline-danger' style={{width:"100px",height:'50px',fontWeight:'550'}} onClick={getReset}>RESET</button>
          </div>
 </form>


    


    </>
  )
}

export default Circle