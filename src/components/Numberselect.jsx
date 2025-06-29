import React from 'react'

import { useState } from 'react';
import styled from "styled-components";
const Numberselect = ({selectedNumber,setselectedNumber,error,seterror}) => {
    const arrnum=[1,2,3,4,5,6];
    const helper=(value)=>{
      setselectedNumber(value)
      seterror("")
    }
    
  return (
    <Numberselectcont>
      <p className='error'>{error}</p>
    <div className='flex'>{
        arrnum.map((value,i)=>(
            <Box 
            isSelected={value === selectedNumber}
            onClick={()=>{helper(value)}}
            key={i}>{value}</Box>
        ))}

    </div>
    <p>Select Number</p>
    </Numberselectcont>
  )
}

export default Numberselect
const Numberselectcont=styled.div`
.error{
color: red;
}
display: flex;
flex-direction: column;
align-items: end;
 .flex{
  display: flex;
  gap: 24px;

 }
 p{
    font-size: 24px;
    font-weight: 700px;

 }
`
const Box =styled.div`
    height: 72px;
    width: 72px;
   
    
    font-weight: 700;
    place-items: center;
    font-size: 24px;
    display: grid;
    border: 1px solid black;
    background-color: ${(props)=>(props.isSelected ?"black":"white")};
    color: ${(props)=>(props.isSelected ?"white":"black")};
`