import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import PaymentModalBayar from '../components/PaymentModalBayar'

const PesananSaya = () => {
  const [pembayaran, setPembayaran] = useState([])
  const [showPaymentModalBayar, setShowPaymentModalBayar] = useState(false)
  const [selectedPaymentId, setSelectedPaymentId] = useState(null)
  const [selectedName, setName] = useState('')

  useEffect(() => {
    fetchPembayaran()
  }, [])

  const fetchPembayaran = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pembayaran')
      setPembayaran(response.data)
    } catch (error) {
      console.error('Error fetching pembayaran:', error)
    }
  }

  const handleBayar = (pembayaran) => {
    setSelectedPaymentId(pembayaran.id)
    setShowPaymentModalBayar(true)
    setName(pembayaran.name)
    console.log('databayar', pembayaran.id)
  }

  console.log('data pembayaran', pembayaran.id)
  return (
    <Layout>
      <div>
        <div className="container-add">
          <aside className="sd-profile">
            <nav>
              <ul>
                <li>
                  <a href="/profile">
                    <img className="logo-1" src="/images/admin/pf.svg" alt="" />{' '}
                    Akun Saya
                  </a>
                </li>
                <li style={{ backgroundColor: 'orangered' }}>
                  <a href="/pesanan">
                    <img className="logo-1" src="/images/admin/la.svg" alt="" />{' '}
                    Pesanan Saya
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">
            <section>
              {pembayaran.map((pembayaran) => {
                const urls = pembayaran.mobil.urls
                const urlsArray = JSON.parse(urls)
                const firstUrl = urlsArray[0]

                return (
                  <div
                    key={pembayaran.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '24px',
                      marginBottom: '24px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        padding: '24px',
                        marginBottom: '20px',
                        width: '100%',
                        // maxWidth: '600px',
                      }}
                    >
                      <div style={{ flex: '1' }}>
                        <img
                          src={firstUrl}
                          alt="Avatar"
                          className="avatar-image-pesanan"
                          style={{
                            width: '200px',
                            height: '200px',
                          }}
                        />
                      </div>
                      <div
                        style={{
                          flex: '2',
                          textAlign: 'left',
                          paddingLeft: '20px',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                          }}
                        >
                          {pembayaran.mobil.merk}
                        </h3>
                        <div style={{ display: 'flex', marginBottom: '5px' }}>
                          <img
                            src="/images/admin/wong.svg"
                            alt="Avatar"
                            className="avatar-image-pesanan"
                            style={{
                              width: '15px',
                              height: '15px',
                              marginTop: '5px',
                            }}
                          />
                          <p style={{ marginRight: '10px' }}>
                            {pembayaran.mobil.tempat_duduk}
                          </p>
                          <img
                            src="/images/admin/bs.svg"
                            alt="Avatar"
                            className="avatar-image-pesanan"
                            style={{
                              width: '15px',
                              height: '15px',
                              marginTop: '5px',
                            }}
                          />
                          <p
                            style={{
                              marginRight: '10px',
                            }}
                          >
                            {pembayaran.mobil.bahan_bakar}
                          </p>
                          <img
                            src="/images/admin/setir.svg"
                            alt="Avatar"
                            className="avatar-image-pesanan"
                            style={{
                              width: '15px',
                              height: '15px',
                              marginTop: '5px',
                            }}
                          />
                          <p>{pembayaran.mobil.transmisi}</p>
                        </div>
                      </div>
                      <div style={{ flex: '1', textAlign: 'right' }}>
                        <h5 style={{ marginBottom: '0' }}>
                          {pembayaran.status === 'Pending'
                            ? 'Menunggu Pembayaran'
                            : pembayaran.status}
                        </h5>
                        {pembayaran.status === 'Pending' && (
                          <button
                            className="buttonbyr"
                            style={{ marginTop: '8px' }}
                            onClick={() => handleBayar(pembayaran)}
                          >
                            Bayar Sekarang
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </section>
          </main>
        </div>
      </div>
      {showPaymentModalBayar && (
        <PaymentModalBayar
          showPaymentModal={showPaymentModalBayar}
          setShowPaymentModal={setShowPaymentModalBayar}
          idpembayaran={selectedPaymentId}
          nama={selectedName}
        />
      )}
    </Layout>
  )
}

export default PesananSaya
