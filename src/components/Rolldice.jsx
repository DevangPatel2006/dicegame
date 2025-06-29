import React, { useState } from 'react'
import styled from 'styled-components'
const Rolldice = ({currentDice,changedice}) => {
    
   

  return (
    <Dicecontainer>
    <div className='dice' onClick={changedice}>
      <img src={`/dice_${currentDice}.png`} alt="" />
    </div>
    <p>Click on Dice to roll</p>
    </Dicecontainer>
  )
}

export default Rolldice

const Dicecontainer=styled.div`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center ;
    .dice{
        cursor: pointer;
    }
    p{
        font: 24px;
    }
`
