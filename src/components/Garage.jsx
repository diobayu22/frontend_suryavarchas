import { useState, useEffect } from 'react'
import axios from 'axios'
import CarCard from './CarCard'

export default function Garage({ searchParams, isSearchClicked }) {
  const [cars, setCars] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/mobil', {
          params: searchParams,
        })
        const cars = response.data
        setCars(cars)
        // Save searchParams to local storage
        localStorage.setItem('searchParams', JSON.stringify(searchParams))
      } catch (error) {
        console.error('Error fetching cars:', error)
      }
    }

    fetchData()
  }, [searchParams])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const activeStyle = {
    color: 'orange',
    fontWeight: 'bold',
  }

  let carsToDisplay = isSearchClicked
    ? cars.filter((car) => car.jumlah > 0)
    : cars

  if (selectedCategory) {
    carsToDisplay = carsToDisplay.filter(
      (car) => car.kategori?.namakategori === selectedCategory,
    )
  }

  return (
    <div>
      <div className="container-fluid garasi_kami pt-5 pb-2">
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
                    className={`vehicle ${selectedCategory === 'Mobil Pribadi' ? 'active' : ''
                      }`}
                    style={
                      selectedCategory === 'Mobil Pribadi' ? activeStyle : {}
                    }
                    onClick={() => handleCategoryClick('Mobil Pribadi')}
                  >
                    Mobil Pribadi
                  </a>
                </div>
                <div className="col-md-1">
                  <a
                    href="#"
                    className={`vehicle ${selectedCategory === 'Bus' ? 'active' : ''
                      }`}
                    style={selectedCategory === 'Bus' ? activeStyle : {}}
                    onClick={() => handleCategoryClick('Bus')}
                  >
                    Bus
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="#"
                    className={`vehicle ${selectedCategory === 'Mobil Commercial' ? 'active' : ''
                      }`}
                    style={
                      selectedCategory === 'Mobil Commercial' ? activeStyle : {}
                    }
                    onClick={() => handleCategoryClick('Mobil Commercial')}
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
                    className={`vehicle-all ${selectedCategory === null ? 'active' : ''
                      }`}
                    style={selectedCategory === null ? activeStyle : {}}
                    onClick={() => handleCategoryClick(null)}
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
          <div className="row">
            {carsToDisplay.length > 0 ? (
              carsToDisplay.map((car) => <CarCard key={car.id} item={car} />)
            ) : (
              <p>Mobil Tidak Tersedia</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
