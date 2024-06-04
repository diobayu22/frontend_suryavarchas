import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import CarDetail from '../components/parts/CarDetail/CarDetail'
import ImageGalerry from '../components/parts/CarDetail/ImageGallery'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function CarDetailPage({ match }) {
  const [carDetail, setCarDetail] = useState(null)
  const { id } = useParams()
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
  }, [])

  return (
    <Layout>
      <div className="container detail-container">
        {carDetail && (
          <>
            <ImageGalerry images={carDetail.urls} />
            <CarDetail detail={carDetail} />
          </>
        )}
      </div>
    </Layout>
  )
}
