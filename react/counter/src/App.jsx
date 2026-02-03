import React from 'react'
import Button from './Button'
import Counter from './Counter'
import Input from './Input'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Counter App</h1>
      
      <Counter title ="First counter" />
      <Counter title ="Second counter" />

      <div className='mt-5'>
        <h1 className='text-2xl my-2'>Input field</h1>
        <Input></Input>
      </div>
      
    </div>
  )
}

export default App