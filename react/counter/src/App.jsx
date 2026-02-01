import React from 'react'
import Button from './Button'
import Counter from './Counter'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Counter App</h1>
      
      <Counter title ="First counter" />
      <Counter title ="Second counter" />
      
    </div>
  )
}

export default App