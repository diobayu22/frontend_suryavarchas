export default function Summary({
  showPaymentModal,
  setShowPaymentModal,
  carDetail,
}) {
  console.log('data cardetail', carDetail)
  const gambar = carDetail?.urls || ''

  // Lakukan parsing hanya jika gambar tidak kosong
  const imageArray = gambar ? JSON.parse(gambar) : []

  const imageUrl = imageArray[0] || ''

  console.log('data image', imageUrl)

  const formatRupiah = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(harga)
  }

  // Fungsi untuk menghitung pajak sebesar 5% dari harga
  const calculateTax = (harga) => {
    const pajak = harga * 0.05
    return pajak
  }

  // Fungsi untuk menghitung total harga termasuk pajak
  const calculateTotal = (harga) => {
    const pajak = calculateTax(harga)
    const total = harga + pajak
    return total
  }
  return (
    <>
      <div className="rental-summary">
        <div>
          <h4>Rental Summary</h4>
          <p>
            Harga dapat berubah tergantung lama sewa dan harga mobil sewaan
            Anda.
          </p>
        </div>
        <div className="car-rented">
          <img src={imageUrl} alt="" />
          <h2>{carDetail?.merk}</h2>
        </div>
        <div>
          <div className="detail-price">
            <p>Subtotal</p>
            <p>{formatRupiah(carDetail?.harga)}</p>
          </div>
          <div className="detail-price">
            <p>Pajak</p>
            <p>{formatRupiah(calculateTax(carDetail?.harga))}</p>
          </div>
        </div>
        <div className="total-price">
          <div>
            <h5>Total Harga</h5>
            <p>Overall price and includes rental discount</p>
          </div>
          <p>{formatRupiah(calculateTotal(carDetail?.harga))}</p>
        </div>
        {/* <button
          onClick={() => setShowPaymentModal(!showPaymentModal)}
          className="btn btn-primary rent"
        >
          Pay
        </button> */}
      </div>
    </>
  )
}
