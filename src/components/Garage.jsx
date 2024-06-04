import { useState, useEffect } from 'react'
import axios from 'axios'
import CarCard from './CarCard'

export default function Garage() {
  const [carsByCategory, setCarsByCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/mobil')
        const cars = response.data
        console.log('cars', cars)
        const categorizedCars = categorizeCars(cars)
        setCarsByCategory(categorizedCars)
      } catch (error) {
        console.error('Error fetching cars:', error)
      }
    }

    fetchData()
  }, [])

  // Function to categorize cars based on their categories
  const categorizeCars = (cars, category = null) => {
    const filteredCars = category
      ? cars.filter((car) => car.kategori?.namakategori === category)
      : cars
    const categorized = {}

    console.log('filteredCars', filteredCars)
    filteredCars.forEach((car) => {
      const category = car.kategori?.namakategori || 'Lainnya'
      console.log('data', category, car.kategori?.namakategori)
      if (!categorized[category]) {
        categorized[category] = []
      }
      categorized[category].push(car)
    })
    return Object.entries(categorized).map(([category, cars]) => ({
      category,
      cars,
    }))
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setActiveCategory(category)
  }

  console.log('data mobil', carsByCategory)

  const activeStyle = {
    color: 'orange',
    fontWeight: 'bold',
  }

  return (
    <div>
      <div className="container-fluid garasi_kami  pt-5 pb-2">
        <div className="container">
          <h2 className="display-3 pb-5" id="layanan">
            Garasi Kami
          </h2>
          <div className="row pt-4">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-2">
                  <a
                    href="#"
                    className={`vehicle ${
                      activeCategory === 'Mobil Pribadi' ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick('Mobil Pribadi')}
                    style={
                      activeCategory === 'Mobil Pribadi' ? activeStyle : {}
                    }
                  >
                    Mobil Pribadi
                  </a>
                </div>
                <div className="col-md-1">
                  <a
                    href="#"
                    className={`vehicle ${
                      activeCategory === 'Bus' ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick('Bus')}
                    style={activeCategory === 'Bus' ? activeStyle : {}}
                  >
                    Bus
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="#"
                    className={`vehicle ${
                      activeCategory === 'Mobil Commercial' ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick('Mobil Commercial')}
                    style={
                      activeCategory === 'Mobil Commercial' ? activeStyle : {}
                    }
                  >
                    Mobil Commercial
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <div className="row">
                <div className="col-md-12">
                  <a
                    href="#"
                    className={`vehicle-all ${
                      activeCategory === null ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick(null)}
                    style={activeCategory === null ? activeStyle : {}}
                  >
                    Lihat Semua
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item pt-5 pb-5">
        <div className="container">
          {selectedCategory === null
            ? carsByCategory.map(({ category, cars }) => (
                <div key={category}>
                  <div className="row">
                    {cars.map((car) => (
                      <CarCard key={car.id} item={car} />
                    ))}
                  </div>
                </div>
              ))
            : categorizeCars(
                carsByCategory.flatMap((item) => item.cars),
                selectedCategory,
              ).map(({ category, cars }) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <div className="row">
                    {cars.map((car) => (
                      <CarCard key={car.id} item={car} />
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}
