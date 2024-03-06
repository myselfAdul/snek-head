import React from 'react'

import Hero from '../Components/HERO/Hero'
import Popular from '../Components/POPULARITEM/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NEWSLETTER/NewsLetter'

const Home = () => {
  return (
    <div>

      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Home


