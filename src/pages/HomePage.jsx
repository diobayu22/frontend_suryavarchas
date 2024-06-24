import { useState } from 'react'
import Garage from '../components/Garage'
import Search from '../components/Search'
import Layout from '../components/Layout'
import AboutUs from '../components/parts/Home/AboutUs'
import Hero from '../components/parts/Home/Hero'
import HowWeWork from '../components/parts/Home/HowWeWork'
import Services from '../components/parts/Home/Services'
import Testimony from '../components/parts/Home/Testimony'

export default function HomePage() {
  const [searchParams, setSearchParams] = useState(null)
  const [isSearchClicked, setIsSearchClicked] = useState(false)

  return (
    <Layout>
      <Hero />
      <Search
        setSearchParams={setSearchParams}
        setIsSearchClicked={setIsSearchClicked}
      />
      {/* <Services /> */}
      <Garage searchParams={searchParams} isSearchClicked={isSearchClicked} />
      <AboutUs />
      <HowWeWork />
      <Testimony />
      <div style={{ padding: 20 + 'px' }} />
    </Layout>
  )
}
