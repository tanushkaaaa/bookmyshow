import React from 'react'
import '../Css/SelectSeats.css'
import { seats } from '../data'
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'> Select Seats: </h1>
      <div className='SS_main_container'>
        {seats.map((el,index)=>{
          return(
            <SeatsInput key={index} text={el} />
          )
        })}
      </div>
      
    </div>
  )
}

export default SelectSeats
