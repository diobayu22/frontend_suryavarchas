import { Link } from 'react-router-dom'
import PaymentModalGagal from './PaymentModalGagal'
import { useState } from 'react'

export default function CarCard({ item, searchParams }) {
  const { jenis, merk, urls, id, kategori, jumlah, harga } = item
  const [showPaymentModalGagal, setShowPaymentModalGagal] = useState(false)

  const cardStyle = {
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  }

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  }

  const parsedUrls = JSON.parse(urls)
  const imageUrl = parsedUrls[0] || ''

  const handleCardClick = (e) => {
    if (jumlah === 0) {
      e.preventDefault()
      setShowPaymentModalGagal(true)
    }
  }

  console.log('stok', jumlah)

  return (

    <div className="col-md-3 pt-5 pb-5">
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: { searchParams },
        }}
        className="car-card"
        onClick={handleCardClick}
      >
        <div style={cardStyle}>
          <div className="photo">
            <img style={imageStyle} src={imageUrl} alt="" />
          </div>
          <div className="content" style={{ padding: '16px' }}>
            <h5>{jenis}</h5>
            <h6>{merk}</h6>
            <h6>{harga} /hari</h6>
          </div>
        </div>
      </Link>

      {showPaymentModalGagal && (
        <PaymentModalGagal
          showPaymentModal={showPaymentModalGagal}
          setShowPaymentModal={setShowPaymentModalGagal}
        />
      )}
    </div>
  )
}
