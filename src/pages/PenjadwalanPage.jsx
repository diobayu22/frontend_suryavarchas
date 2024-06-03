import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const PenjadwalanPage = () => {
  const navigate = useNavigate()
  const [penjadwalans, setPenjadwalans] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedPenjadwalan, setSelectedPenjadwalan] = useState(null)

  useEffect(() => {
    fetchPenjadwalans()
  }, [])

  const fetchPenjadwalans = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pembayaran')
      setPenjadwalans(response.data)
    } catch (error) {
      console.error('Error fetching penjadwalans:', error)
    }
  }
  const handleStatusUpdate = async (id, newStatus) => {
    console.log('data ', id, newStatus)
    const formData = new FormData()
    formData.append('status', newStatus)
    try {
      await axios.put(
        `http://localhost:3000/pembayaran/${id}/status`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: `Bearer ${token}`,
          },
        },
      )
      // await axios.put(`http://localhost:3000/pembayaran/${id}`, {
      //   status: newStatus,
      // })
      fetchPenjadwalans() // Refresh the list to reflect changes
      setShowModal(false) // Close the modal if open
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleShow = (penjadwalan) => {
    setSelectedPenjadwalan(penjadwalan)
    setShowModal(true)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  const handleLogout = (e) => {
    e.preventDefault()
    // Clear the token and perform logout
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login') // Redirect to login page after logout
  }
  return (
    <div>
      <div className="container-admin">
        <aside className="sidebar">
          <img src="/images/admin/logo.png" className="logo" alt="Logo" />
          <nav>
            <ul>
              <li>
                <a href="/admin">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Home
                </a>
              </li>
              <li>
                <a href="/sopir">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-1.svg"
                    alt=""
                  />{' '}
                  Sopir
                </a>
              </li>
              <li>
                <a href="/mobil">
                  <img
                    className="logo-1"
                    src="/images/admin/mobil.svg"
                    alt=""
                  />{' '}
                  Mobil
                </a>
              </li>
              <li>
                <a href="/pelanggan">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-2.svg"
                    alt=""
                  />{' '}
                  Pelanggan
                </a>
              </li>
              <li style={{ backgroundColor: 'orangered' }}>
                <a href="/penjadwalan">
                  <img
                    className="logo-1"
                    src="/images/admin/penjadwalan.svg"
                    alt=""
                  />{' '}
                  Penjadwalan
                </a>
              </li>
              <li>
                <a href="/laporan">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-4.svg"
                    alt=""
                  />{' '}
                  Laporan
                </a>
              </li>
              <div className="logout-admin">
                <li>
                  <a className="logout" href="#" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <header className="navbar-admin">
            <div className="navbar-icons">
              <img src="/images/admin/gg_profile.svg" />
            </div>
          </header>
          <section>
            <div
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Daftar Penjadwalan
                </h3>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      No
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      No ID
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Nama
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Tanggal
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Waktu
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {penjadwalans.map((penjadwalan, index) => (
                    <tr key={penjadwalan.id}>
                      <td>{index + 1}</td>
                      <td>{penjadwalan.no_identitas}</td>
                      <td>{penjadwalan.nama}</td>
                      <td>{formatDate(penjadwalan.ptanggal)}</td>
                      <td>{penjadwalan.pwaktu}</td>
                      <td>
                        <div>
                          {penjadwalan.status === 'Pending' ? (
                            <>
                              <button
                                style={{
                                  backgroundColor: 'green',
                                  color: 'white',
                                  padding: '4px 8px',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  marginRight: '8px',
                                }}
                                onClick={() =>
                                  handleStatusUpdate(penjadwalan.id, 'Selesai')
                                }
                              >
                                <FontAwesomeIcon icon={faCheck} />
                              </button>
                              <button
                                style={{
                                  backgroundColor: 'red',
                                  color: 'white',
                                  padding: '4px 8px',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                }}
                                onClick={() =>
                                  handleStatusUpdate(penjadwalan.id, 'Cancel')
                                }
                              >
                                Batal
                              </button>
                            </>
                          ) : (
                            <span>{penjadwalan.status}</span>
                          )}
                          <button
                            style={{
                              backgroundColor: 'blue',
                              color: 'white',
                              padding: '4px 8px',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              marginLeft: '8px',
                            }}
                            onClick={() => handleShow(penjadwalan)}
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      {showModal && selectedPenjadwalan && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Detail Penjadwalan</h3>
              <button onClick={() => setShowModal(false)}>x</button>
            </div>
            <div className="modal-body">
              <p>No ID: {selectedPenjadwalan.no_identitas}</p>
              <p>Nama: {selectedPenjadwalan.nama}</p>
              <p>Tanggal: {formatDate(selectedPenjadwalan.ptanggal)}</p>
              <p>Waktu: {selectedPenjadwalan.pwaktu}</p>
              <p>Status: {selectedPenjadwalan.status}</p>
              {selectedPenjadwalan.status === 'Selesai' && (
                <button
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '8px',
                  }}
                  onClick={() =>
                    handleStatusUpdate(selectedPenjadwalan.id, 'Cancel')
                  }
                >
                  Batal
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PenjadwalanPage
