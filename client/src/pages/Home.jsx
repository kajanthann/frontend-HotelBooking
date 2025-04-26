import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import Exclusiveoffer from '../components/Exclusiveoffer'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero />
        <FeatureDestination />
        <Exclusiveoffer />
        <Testimonial />
        <NewsLetter />
    </div>
  )
}

export default Home