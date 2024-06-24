export default function PaymentModalSukses({
  showPaymentModal,
  setShowPaymentModal,
}) {
  const handleOk = () => {
    window.location.reload()
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
            <img src="/images/global/waiting-payment.svg" />
            <h4>Menunggu Pembayaran</h4>
          </div>
          <div className="rent-detail">
            <h5>Sukses</h5>
            <p>Silakan Tunggu Konfirmasi Dari Admin</p>
            <button className="buttonbyr" onClick={handleOk}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
