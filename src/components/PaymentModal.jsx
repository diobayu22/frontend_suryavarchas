import { useNavigate } from 'react-router-dom'

export default function PaymentModal({
  showPaymentModal,
  setShowPaymentModal,
  metode,
  merk,
  bayartotal,
  lokasipenjemputan,
  tanggalpenjemputan,
  waktupenjemputan,
}) {
  console.log('data metode', metode)
  const navigate = useNavigate()
  const handleOk = () => {
    navigate('/')
    // window.location.reload()
  }
  return (
    <div className="payment-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Pembayaran</h3>
          <button onClick={() => setShowPaymentModal(!showPaymentModal)}>
            x
          </button>
        </div>
        <div className="modal-body">
          <div className="status">
            <img
              src="/images/global/waiting-payment.svg"
              alt="Waiting Payment"
              style={{ width: '100px', height: '100px' }}
            />
            <h4>Menunggu Pembayaran</h4>
          </div>
          <div className="rent-detail">
            <h5>Detail Rental</h5>
            <p>
              Pastikan data dan pesanan anda sesuai sebelum melakukan pembayaran
            </p>
            <p>Armada : {merk?.merk}</p>
            <p>Lokasi Penjemputan : {lokasipenjemputan}</p>
            <p>
              Tanggal Waktu Penjemputan : {tanggalpenjemputan}
              {waktupenjemputan}
            </p>
            <p>Status Pembayaran : Belum Bayar</p>
            {metode === 'BRI' && (
              <label className="label-pembayaran" htmlFor="waktu">
                BRI <span className="p-3"> No Rekening : 403940303030</span>
              </label>
            )}
            {metode === 'Mandiri' && (
              <label className="label-pembayaran" htmlFor="waktu">
                Mandiri <span className="p-2"> No Rekening : 55940303030</span>
              </label>
            )}
            <p>Total Bayar</p> <p>{bayartotal}</p>
            <button className="buttonbyr" onClick={handleOk}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
