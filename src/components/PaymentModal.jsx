export default function PaymentModal({ showPaymentModal, setShowPaymentModal }) {
    return (
        <div className="payment-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Pembayaran</h3>
                    <button onClick={() => setShowPaymentModal(!showPaymentModal)}>x</button>
                </div>
                <div className="modal-body">
                    <div className="status">
                        <img src="/images/global/waiting-payment.svg" />
                        <h4>Menunggu Pembayaran</h4>
                    </div>
                    <div className="rent-detail">
                        <h5>Transfer</h5>
                        <p>Pastikan data dan pesanan anda sesuai sebelum melakukan pembayaran  </p>
                        <div className="detail-rent-group">
                            {/* <p>Armanda</p>
                            <p>Nissan GT-R</p> */}
                            <div className="checkbox-pembayaran">
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label className="label-pembayaran" htmlFor="waktu">BRI <span className="p-3"> No Rekening : 403940303030</span></label>
                                <img className="img-kartu" src="/images/global/bri.png" alt="" />
                            </div>

                            <div className="checkbox-pembayaran">
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label className="label-pembayaran" htmlFor="waktu">Mandiri <span className="p-2"> No Rekening : 55940303030</span></label>
                                <img className="img-kartu" src="/images/global/mandiri.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="hubungi-admin">
                        <h5>Atau Hubungi Admin <img src="/images/footer/Vector-One.svg" alt="" /> Disini Logo wa untuk mengsrsh ke admin</h5>

                    </div>
                </div>
            </div>
        </div>
    )
}