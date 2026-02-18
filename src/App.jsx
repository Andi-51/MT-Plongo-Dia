import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Order from './components/Order'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProblemSolution/>
      <Features/>
      <Order/>
      <Footer/>
    </div>
  )
}

export default App