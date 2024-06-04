import Layout from '../components/Layout'
import FormGroup from '../components/parts/Checkout/FormGroup'
import Summary from '../components/parts/Checkout/Summary'
import { useState, useEffect } from 'react'
import PaymentModal from '../components/PaymentModal'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  PelangganAddData,
  PelangganAddDataUser,
} from '../controller/PembelianController'

export default function CheckoutPage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [carDetail, setCarDetail] = useState(null)
  const { id } = useParams()
  // const [plokasiEnabled, setPlokasiEnabled] = useState(false)
  // const [klokasiEnabled, setklokasiEnabled] = useState(false)

  // // Fungsi untuk mengubah status checkbox
  // const handleCheckboxChange = (e) => {
  //   setPlokasiEnabled(e.target.checked)
  // }
  // const handlekCheckboxChange = (e) => {
  //   setklokasiEnabled(e.target.checked)
  // }
  const [checkboxAgree, setCheckboxAgree] = useState(false)

  // Fungsi untuk mengubah status ceklis checkbox
  const handleACheckboxChange = (e) => {
    setCheckboxAgree(e.target.checked)
  }

  // Logika untuk menentukan apakah button harus di-disable
  const isButtonDisabled = !checkboxAgree
  console.log('data id', id)
  useEffect(() => {
    async function fetchCarDetail() {
      try {
        const response = await axios.get(`http://localhost:3000/mobil/${id}`)
        setCarDetail(response.data)
      } catch (error) {
        console.error('Error fetching car detail:', error)
      }
    }

    fetchCarDetail()
  }, [])
  useEffect(() => {}, [showPaymentModal])

  // Fungsi untuk menghitung total harga termasuk pajak

  const calculateTotal = () => {
    // Periksa jika carDetail null atau harga tidak valid
    if (!carDetail || isNaN(carDetail.harga)) {
      return 0 // Kembalikan 0 jika harga tidak valid
    }
    return carDetail.harga + carDetail.harga * 0.05 // Hitung total termasuk pajak
  }

  const bayartotal = calculateTotal()

  console.log('harga total', bayartotal, carDetail?.harga)

  const {
    tipeIdentitas,
    noIdentitas,
    nama,
    noTelp,
    alamat,
    kota,
    plokasi,
    ptanggal,
    pwaktu,
    klokasi,
    ktanggal,
    kwaktu,
    handleSubmit,
    handleAlamat,
    handleKota,
    handleLokasi,
    handleNama,
    handleNoIdentitas,
    handleNoTelp,
    handleTanggal,
    handleTipeIdentitas,
    handleWaktu,
    handleKTanggal,
    handleKWaktu,
    handleKLokasi,
    handleKategori,
    kategori,
    total,
    handleTotal,
    klokasiEnabled,
    plokasiEnabled,
    handleCheckboxChange,
    handleKCheckboxChange,
  } = PelangganAddDataUser()

  return (
    <Layout>
      <div className="checkout container">
        <div className="rent-detail-form">
          <FormGroup
            item={{ title: 'Pembayaran', desc: 'Isi sesuai data Anda' }}
          >
            <div className="form-input-group">
              <div className="form-input">
                <label htmlFor="tipeId">Tipe Identitas</label>
                <select
                  name="tipeId"
                  value={tipeIdentitas}
                  onChange={handleTipeIdentitas}
                >
                  <option value="KTP">KTP</option>
                  <option value="SIM">SIM</option>
                  <option value="Kartu Pelajar">Kartu Pelajar</option>
                </select>
              </div>
              <div className="form-input">
                <label htmlFor="noIdentitas">No. Identitas</label>
                <input
                  type="text"
                  id="noIdentitas"
                  name="noIdentitas"
                  value={noIdentitas}
                  onChange={handleNoIdentitas}
                />
              </div>
              <div className="form-input">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={nama}
                  onChange={handleNama}
                />
              </div>
              <div className="form-input">
                <label htmlFor="noTelepon">No. Telp</label>
                <input
                  type="text"
                  id="noTelepon"
                  name="noTelepon"
                  value={noTelp}
                  onChange={handleNoTelp}
                />
              </div>
              <div className="form-input">
                <label htmlFor="alamat">Alamat</label>
                <input
                  type="text"
                  id="alamat"
                  name="alamat"
                  value={alamat}
                  onChange={handleAlamat}
                />
              </div>
              <div className="form-input">
                <label htmlFor="kota">Kota</label>
                <input
                  type="text"
                  id="kota"
                  name="kota"
                  value={kota}
                  onChange={handleKota}
                />
              </div>
            </div>
          </FormGroup>
          <FormGroup
            item={{
              title: 'Rental Info',
              desc: 'Tentukan jadwal rental kamu',
              stepNow: '2',
            }}
          >
            {/* <input type="radio" id="css" name="fav_language" value="CSS" /> */}
            <input
              type="checkbox"
              id="css"
              name="fav_language"
              value="CSS"
              onChange={handleCheckboxChange}
            />

            <label className="radio-pickup" htmlFor="lokasi">
              Pick-Up
            </label>

            {/* Kondisional rendering untuk input form */}
            {plokasiEnabled && (
              <div className="form-input-group">
                <div className="form-input">
                  <label htmlFor="lokasi">Lokasi</label>
                  <input
                    type="text"
                    id="lokasi"
                    name="lokasi"
                    value={plokasi}
                    onChange={handleLokasi}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="tanggal">Tanggal</label>
                  <input
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    value={ptanggal}
                    onChange={handleTanggal}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="waktu">Waktu</label>
                  <input
                    type="time"
                    id="waktu"
                    name="waktu"
                    value={pwaktu}
                    onChange={handleWaktu}
                  />
                </div>
              </div>
            )}

            <br />
            {/* <input type="radio" id="css" name="fav_language" value="CSS" />
             */}
            <input
              type="checkbox"
              id="css"
              name="fav_language"
              value="CSS"
              onChange={handleKCheckboxChange}
            />
            {/* <label for="css">CSS</label> */}

            <label className="radio-pickup" htmlFor="lokasi">
              Drop-Off
            </label>
            {klokasiEnabled && (
              <div className="form-input-group pb-5">
                <div className="form-input">
                  <label htmlFor="lokasi">Lokasi</label>
                  <input
                    type="text"
                    id="lokasi"
                    name="lokasi"
                    value={klokasi}
                    onChange={handleKLokasi}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="tanggal">Tanggal</label>
                  <input
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    value={ktanggal}
                    onChange={handleKTanggal}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="waktu">Waktu</label>
                  <input
                    type="time"
                    id="waktu"
                    name="waktu"
                    value={kwaktu}
                    onChange={handleKWaktu}
                  />
                </div>
              </div>
            )}

            <h5 className="pt-4">Kategori Rental</h5>
            <div>
              <input
                type="radio"
                id="pengemudi"
                name="jenis_sewa"
                value="pengemudi"
                onChange={handleKategori}
              />
              <label className="radio-kategori" htmlFor="pengemudi">
                Dengan Pengemudi
              </label>
              <input
                type="radio"
                id="lepas_kunci"
                name="jenis_sewa"
                value="lepas_kunci"
                onChange={handleKategori}
              />
              <label className="radio-pickup" htmlFor="lepas_kunci">
                Lepas Kunci
              </label>
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

          <FormGroup
            item={{
              title: 'Rental Info',
              desc: 'Tentukan jadwal rental kamu',
              stepNow: '4',
            }}
          >
            <div className="checkbox-form">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel1"
                value=""
                aria-label="..."
                onChange={handleACheckboxChange}
              />
              <label className="label-agree" htmlFor="waktu1">
                Saya setuju dengan pengiriman email pemasaran dan buletin. Tidak
                ada spam!
              </label>
            </div>
            <input
              type="hidden"
              id="total"
              name="total"
              value={bayartotal}
              onChange={handleTotal}
            />

            <div className="checkbox-form">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel2"
                value=""
                aria-label="..."
                onChange={handleACheckboxChange}
              />
              <label className="label-agree" htmlFor="waktu2">
                Saya setuju dengan pengiriman email pemasaran dan buletin. Tidak
                ada spam!
              </label>
            </div>

            {/* Button dengan logika disabled */}
            <button
              className="btn btn-primary login m-3"
              onClick={handleSubmit}
              disabled={isButtonDisabled}
            >
              Rent Now
            </button>
          </FormGroup>
        </div>
        <Summary
          showPaymentModal={showPaymentModal}
          setShowPaymentModal={setShowPaymentModal}
          carDetail={carDetail}
        />
      </div>
      {/* {showPaymentModal && (
        <PaymentModal
          showPaymentModal={showPaymentModal}
          setShowPaymentModal={setShowPaymentModal}
        />
      )} */}
    </Layout>
  )
}
