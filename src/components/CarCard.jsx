import { Link } from 'react-router-dom'

export default function CarCard({ item }) {
  const { jenis, merk, urls, id, kategori } = item

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

  // Ambil URL pertama dari array
  const imageUrl = parsedUrls[0] || ''
  console.log('data image', imageUrl)

  return (
    <div className="col-md-3">
      <Link to={`/detail/${id}`} className="car-card">
        <div style={cardStyle}>
          <div className="photo">
            {/* Menampilkan gambar pertama */}
            <img style={imageStyle} src={imageUrl} alt="" />
          </div>
          <div className="content" style={{ padding: '16px' }}>
            <h5>{jenis}</h5>
            <h6>{merk}</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}
