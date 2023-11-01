import { useState } from 'react'
import './App.css'
import Select from './component/Select'

function App() {

  const options = [
    { label: 'First', value: 1, },
    { label: 'Second', value: 2, },
    { label: 'Third', value: 3, },
    { label: 'Fourth', value: 4, },
    { label: 'Fifth', value: 5, },
        
  ]
  
  const [value, setValues] = useState<typeof options[0] | undefined>(options[4])

  return (
    <>
      <Select options={options} value={value} onChange={o => setValues(o)} />
    </>
  ) 
}

export default App
