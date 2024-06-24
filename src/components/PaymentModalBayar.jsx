import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentModalSukses from './PaymentModalSukses'

export default function PaymentModalBayar({
  showPaymentModal,
  setShowPaymentModal,
  idpembayaran,
  nama,
}) {
  console.log('data metode', idpembayaran)

  const [imagePreview, setImagePreview] = useState(null)
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [showPaymentModalBayar, setShowPaymentModalBayar] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    formData.append('name', nama)

    try {
      const response = await axios.put(
        `http://localhost:3000/pembayaranimage/${idpembayaran}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('sukses', response)
      setShowPaymentModalBayar(true)
    } catch (error) {
      console.error('error', error)
    }
  }

  const handleImageChange = (e) => {
    const image = e.target.files[0]
    setFile(image)

    const previewURL = URL.createObjectURL(image)
    setImagePreview(previewURL)
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
            <p>Silakan Unggah Bukti Transfer dibawah</p>
            <form>
              <label htmlFor="">Upload Bukti Pembayaran</label>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />
            </form>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="mt-2 rounded-md max-w-full"
                style={{ maxHeight: '200px' }}
              />
            )}
            <button className="buttonbyr" onClick={handleSubmit}>
              Bayar
            </button>
          </div>
        </div>
      </div>
      {showPaymentModalBayar && (
        <PaymentModalSukses
          showPaymentModal={showPaymentModalBayar}
          setShowPaymentModal={setShowPaymentModalBayar}
        />
      )}
    </div>
  )
}
