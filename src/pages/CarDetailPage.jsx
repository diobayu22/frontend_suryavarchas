import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import CarDetail from '../components/parts/CarDetail/CarDetail'
import ImageGallery from '../components/parts/CarDetail/ImageGallery'
import axios from 'axios'

export default function CarDetailPage() {
  const { id } = useParams()
  const [carDetail, setCarDetail] = useState(null)

  useEffect(() => {
    async function fetchCarDetail() {
      try {
        const response = await axios.get(`http://localhost:3000/mobil/${id}`)
        setCarDetail(response.data)
      } catch (error) {
        console.error('Error fetching car detail:', error)
      }
    }

    fetchCarDetail()
  }, [id])

  const searchParams = JSON.parse(localStorage.getItem('searchParams')) || {}

  useEffect(() => {
    console.log('Search Params:', searchParams)
  }, [searchParams])

  return (
    <Layout>
      <div className="container detail-container">
        {carDetail && (
          <>
            <ImageGallery images={carDetail.urls} />
            <CarDetail detail={carDetail} />
          </>
        )}
      </div>
    </Layout>
  )
}
