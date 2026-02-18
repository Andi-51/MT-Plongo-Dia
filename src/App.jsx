import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Order from './components/Order'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProblemSolution/>
      <Features/>
      <Gallery/>
      <Order/>
      <Footer/>
    </div>
  )
}

export default App