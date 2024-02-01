import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import ContactHeader from './component/ContactHeader/ContactHeader'
import Button from './component/Button/Button'
import ContactForm from './component/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}

export default App
