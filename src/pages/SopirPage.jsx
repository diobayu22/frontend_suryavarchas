import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { SopirAllData, SopirDetail } from '../controller/SopirController'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const SopirPage = () => {
  const navigate = useNavigate()
  const { datatabel, columns, getSopir } = SopirAllData()
  const [showModal, setShowModal] = useState(false)
  const { nama, no_telp, alamat, getSopirId } = SopirDetail()

  const handleTambah = () => {
    navigate('/sopiradd')
  }

  const handleShow = async (id) => {
    await getSopirId(id)
    // console.log('data id', id)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/sopir/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      getSopir()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (id) => {
    navigate(`/sopiredit/${id}`)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    // Lakukan proses logout di sini, misalnya menghapus token
    console.log('User logged out')
    navigate('/login') // Arahkan ke halaman login setelah logout
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
              <li style={{ backgroundColor: 'orangered' }}>
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
              <li>
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
            {/* <h2>Data Pemasukan</h2>
            <p>
              This is the admin dashboard where you can manage users, view
              reports, and adjust settings.
            </p> */}

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
                  Daftar Sopir
                </h3>
                <button
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '8px',
                  }}
                  onClick={handleTambah}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginRight: '8px' }}
                  />
                  Tambah Sopir
                </button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column.name}
                        style={{
                          padding: '8px',
                          backgroundColor: '#f2f2f2',
                          textAlign: 'left',
                        }}
                      >
                        {column.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {datatabel.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.no_id}</td>
                      <td>{data.nama}</td>
                      <td>{data.no_telp}</td>
                      <td>
                        <div>
                          <FontAwesomeIcon
                            icon={faEdit}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                            onClick={() => handleEdit(data.item_id)}
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                            onClick={() => handleDelete(data.item_id)}
                          />
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleShow(data.item_id)}
                          />
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
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Detail Sopir</h3>
              <button onClick={() => setShowModal(false)}>x</button>
            </div>
            <div className="modal-body">
              <p>Nama: {nama}</p>
              <p>No. Telp: {no_telp}</p>
              <p>Alamat: {alamat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SopirPage
