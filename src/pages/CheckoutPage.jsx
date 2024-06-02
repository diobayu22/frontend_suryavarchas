import Layout from "../components/Layout";
import FormGroup from "../components/parts/Checkout/FormGroup";
import Summary from "../components/parts/Checkout/Summary";
import { useState, useEffect } from "react";
import PaymentModal from "../components/PaymentModal";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    useEffect(() => {

    }, [showPaymentModal])

    return (
        <Layout>
            <div className="checkout container">
                <div className="rent-detail-form">
                    <FormGroup item={{ title: 'Pembayaran', desc: 'Isi sesuai data Anda' }}>
                        <div className="form-input-group">
                            <div className="form-input">
                                <label htmlFor="tipeId">Tipe Identitas</label>
                                <select name="tipeId">
                                    <option value="">KTP</option>
                                </select>
                            </div>
                            <div className="form-input">
                                <label htmlFor="noIdentitas">No. Identitas</label>
                                <input type="text" id="noIdentitas" name="noIdentitas" />
                            </div>
                            <div className="form-input">
                                <label htmlFor="nama">Nama</label>
                                <input type="text" id="nama" name="nama" />
                            </div>
                            <div className="form-input">
                                <label htmlFor="noTelepon">No. Telp</label>
                                <input type="text" id="noTelepon" name="noTelepon" />
                            </div>
                            <div className="form-input">
                                <label htmlFor="alamat">Alamat</label>
                                <input type="text" id="alamat" name="alamat" />
                            </div>
                            <div className="form-input">
                                <label htmlFor="kota">Kota</label>
                                <input type="text" id="kota" name="kota" />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup item={{ title: 'Rental Info', desc: 'Tentukan jadwal rental kamu', stepNow: '2' }}>
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label className="radio-pickup" htmlFor="lokasi">Pick-Up</label>
                        <div className="form-input-group">
                            <div className="form-input">
                                <label htmlFor="lokasi">Lokasi</label>
                                <select name="lokasi">
                                </select>
                            </div>
                            <div className="form-input">
                                <label htmlFor="tanggal">Tanggal</label>
                                <select name="tanggal">
                                </select>
                            </div>
                            <div className="form-input">
                                <label htmlFor="waktu">Waktu</label>
                                <select name="waktu">
                                </select>
                            </div>
                        </div>
                        <br />
                        <h5 className="pt-4">Kategori Rental</h5>
                        <div>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label className="radio-kategori " htmlFor="lokasi">Dengan Pengemudi</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label className="radio-pickup" htmlFor="lokasi">Lepas Kunci</label>
                        </div>
                    </FormGroup>

                    {/* <FormGroup item={{ title: 'Metode Pembayaran', desc: 'Pilih Metode Pembayaran kamu', stepNow: '3' }}>
                        <div className="checkbox-pembayaran">
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label className="label-pembayaran" htmlFor="waktu">BRI</label>
                            <img className="img-kartu" src="/images/global/bri.png" alt="" />
                        </div>

                        <div className="checkbox-pembayaran">
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label className="label-pembayaran" htmlFor="waktu">Mandiri</label>
                            <img className="img-kartu" src="/images/global/mandiri.png" alt="" />
                        </div>

                    </FormGroup> */}


                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label className="radio-pickup" htmlFor="lokasi">Drop-Off</label>
                    <div className="form-input-group pb-5">
                        <div className="form-input">
                            <label htmlFor="lokasi">Lokasi</label>
                            <select name="lokasi">
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="tanggal">Tanggal</label>
                            <select name="tanggal">
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="waktu">Waktu</label>
                            <select name="waktu">
                            </select>
                        </div>
                    </div>


                    <FormGroup item={{ title: 'Rental Info', desc: 'Tentukan jadwal rental kamu', stepNow: '4' }}>
                        <div className="checkbox-form">
                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            <label className="label-agree" htmlFor="waktu">Saya setuju dengan pengiriman email pemasaran dan buletin. Tidak ada spam!</label>
                        </div>

                        <div className="checkbox-form">
                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            <label className="label-agree" htmlFor="waktu">Saya setuju dengan pengiriman email pemasaran dan buletin. Tidak ada spam!</label>
                        </div>
                        <Link type="submit" className="btn btn-primary login m-3" to="/admin">Rent Now</Link>
                    </FormGroup>
                </div>
                <Summary showPaymentModal={showPaymentModal} setShowPaymentModal={setShowPaymentModal} />
            </div>
            {showPaymentModal && <PaymentModal showPaymentModal={showPaymentModal} setShowPaymentModal={setShowPaymentModal} />}
        </Layout>
    )
}