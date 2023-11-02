import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Recatngle() {
    const [Base,SetBase]= useState('')
  const [IsBase, IsSetBase]=useState(true)
  const [Height,SetHeight]=useState('')
  const [IsHeight,isSetHeight]=useState(true)
  const [Display,setDisplay]=useState('0')

  const getRadius=(e)=>{
    const{value,name}=e.target
    if(value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==='base'){
        SetBase(value)
        IsSetBase(true)
      }
      else if(name==='height'){
        SetHeight(value)
        isSetHeight(true)
      }
    }
    else
    {
      if(name==='base'){
        SetBase(value)
      IsSetBase(false)
      }
      else if(name==='height'){
        SetHeight(value)
        isSetHeight(false)
      }

    }

  }

  const getCalculate=(e)=>{
    e.preventDefault();
    if(!Base && !Height)
    {
      alert('Please Enter The Length and Bredth')
    }
    else{
      setDisplay(Math.round((Base* Height)))
    }
  }

  const getReset=()=>{
    SetBase('');
    SetHeight('');
    setDisplay('0');
    IsSetBase(true)
    isSetHeight(true)
  }
  return (
    <>
        <h2 className="text-center fw-bold mt-3">RECTANGLE</h2>

    <div className='bg-dark text-white justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'> 
 <h1 className='d-flex justify-content-center align-items-center'>{Display}{' '}cm <sup>2</sup> </h1>
 <p className='d-flex justify-content-center align-items-center'>Total Area of the Rectangle</p>
  </div>
  <form className='mt-3'>
    <FloatingLabel
          controlId="floatingInput"
          label="Enter The Length"
          className="mb-3"
        >
          <Form.Control style={{fontWeight:'750'}} type="text" autoComplete='off' name='base' value={Base} onChange={(e)=>getRadius(e)} placeholder="Enter The Length " />
        </FloatingLabel>
       
        {!IsBase &&<div className='d-flex justify-content-center'><p style={{color:'red',fontSize:16, textAlign:'center',justifyContent:'center',alignItems:'center'}}>Please Enter Valid Input!</p></div>}

        <FloatingLabel
          controlId="floatingInput"
          label="Enter The Bredth"
          className="mb-3"
        >
          <Form.Control style={{fontWeight:'750'}} type="text" autoComplete='off' name='height' value={Height} onChange={(e)=>getRadius(e)} placeholder="Enter The Bredth" />
        </FloatingLabel>

        {!IsHeight &&<div className='d-flex justify-content-center'><p style={{color:'red',fontSize:16, textAlign:'center',justifyContent:'center',alignItems:'center'}}>Please Enter Valid Input!</p></div>}
        <div className='d-flex justify-content-between'>
          <button type='button' className='btn btn-outline-success' style={{height:'50px',fontWeight:'550'}} onClick={getCalculate}>CALCULATE</button>
          <button type='button' className='btn btn-outline-danger' style={{width:"100px",height:'50px',fontWeight:'550'}} onClick={getReset}>RESET</button>
          </div>
 </form>
    </>
  )
}

export default Recatngle