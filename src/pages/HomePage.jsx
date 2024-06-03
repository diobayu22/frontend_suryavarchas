import Garage from '../components/Garage'
import Search from '../components/Search'
import Layout from '../components/Layout'
import AboutUs from '../components/parts/Home/AboutUs'
import Hero from '../components/parts/Home/Hero'
import HowWeWork from '../components/parts/Home/HowWeWork'
import Services from '../components/parts/Home/Services'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Search />
      {/* <Services /> */}
      <Garage />
      <AboutUs />

      <HowWeWork />
      <div style={{ padding: 20 + 'px' }} />
    </Layout>
  )
}
