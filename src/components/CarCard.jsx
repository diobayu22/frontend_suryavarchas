import { Link } from 'react-router-dom'

export default function CarCard({ item }) {
  const {
    stockIcon,
    stock,
    gasTypeIcon,
    gasType,
    carTypeIcon,
    carType,
    jenis,
    merk,
    url,
    id,
    kategori,
  } = item

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

  const contentStyle = {
    padding: '16px',
  }

  return (
    <div className="col-md-3">
      <Link to={`/detail/${id}`} className="car-card">
        <div style={cardStyle}>
          <div className="photo">
            <img style={imageStyle} src={url} alt="" />
          </div>
          <div style={contentStyle}>
            <h5>{jenis}</h5>
            <h6>{merk}</h6>
          </div>
          {/* <div className="code">
            <img src={stockIcon} alt="" />
            <span>{stock}</span>
            <img src={gasTypeIcon} alt="" />
            <span>{gasType}</span>
            <img src={carTypeIcon} alt="" />
            <span>{carType}</span>
          </div> */}
        </div>
      </Link>
    </div>
  )
}
