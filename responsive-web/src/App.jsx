import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Why from './components/Why/Why'
import Features from './components/Features/Features'
import Faqs from './components/FAQs/Faqs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      {/* <Button>Shadcn</Button> */}
      <Navbar />
      <Hero />
      <Why />
      <Features />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App