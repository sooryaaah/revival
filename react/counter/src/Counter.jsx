import React from 'react'
import Button from './Button'

const Counter = ({title}) => {
  return (
    <div>
        <h2>{title} <Button/> </h2>
    </div>
  )
}

export default Counter