import { Link } from 'react-router-dom'

const carDetail = {
  specs: [
    {
      icon: '/images/car-detail/seat.svg',
      title: 'Tempat Duduk',
      key: 'tempat_duduk', // Menggunakan 'key' untuk mengambil nilai dari objek 'detail'
    },
    {
      icon: '/images/car-detail/trunk.svg',
      title: 'Bagasi',
      key: 'bagasi', // Menggunakan 'key' untuk mengambil nilai dari objek 'detail'
    },
    {
      icon: '/images/car-detail/steer.svg',
      title: 'Transmisi',
      key: 'transmisi', // Menggunakan 'key' untuk mengambil nilai dari objek 'detail'
    },
    {
      icon: '/images/car-detail/fuel.svg',
      title: 'Bahan Bakar',
      key: 'bahan_bakar', // Menggunakan 'key' untuk mengambil nilai dari objek 'detail'
    },
  ],
}

export default function CarDetail({ detail }) {
  const id = detail?.id
  return (
    <div className="car-detail-container">
      <h1>{detail?.merk}</h1>
      <h4>Spesifikasi</h4>
      <div className="specification">
        {carDetail.specs.map((item, index) => {
          const { icon, title, key } = item
          return (
            <div key={index} className="spec">
              <img src={icon} alt="" />
              <div>
                <p>{title}</p>
                <p>{detail[key] || 1}</p>{' '}
                {/* Menggunakan 'key' untuk mengambil nilai dari objek 'detail' */}
              </div>
            </div>
          )
        })}
      </div>
      <h4>Deskripsi</h4>
      <p>{detail?.deskripsi}</p>
      <Link to={`/pembelian/${id}`} className="btn btn-primary rent">
        Rent Now
      </Link>
    </div>
  )
}
