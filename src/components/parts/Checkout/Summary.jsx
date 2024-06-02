export default function Summary({ showPaymentModal, setShowPaymentModal }) {
    return (
        <>
            <div className="rental-summary">
                <div>
                    <h4>Rental Summary</h4>
                    <p>Harga dapat berubah tergantung lama sewa dan harga mobil sewaan Anda.</p>
                </div>
                <div className="car-rented">
                    <img src="/images/global/CarImage.svg" alt="" />
                    <h2>Nissan GT - R</h2>
                </div>
                <div>
                    <div className="detail-price">
                        <p>Subtotal</p>
                        <p>Rp 800.000</p>
                    </div>
                    <div className="detail-price">
                        <p>Pajak</p>
                        <p>Rp 0</p>
                    </div>
                </div>
                <div className="total-price">
                    <div>
                        <h5>Total Harga</h5>
                        <p>Overall price and includes rental discount</p>
                    </div>
                    <h4>Rp 800.000</h4>
                </div>
                <button onClick={() => setShowPaymentModal(!showPaymentModal)} className="btn btn-primary rent">Pay</button>
            </div>
        </>
    )
}