import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  MobilAddData,
  MobilEditData,
  MobilEditDataMitra,
} from '../controller/MobilController'

const EditMobilMitraPage = () => {
  const navigate = useNavigate()
  const {
    jenis,
    merk,
    tahun,
    pajak,
    kategori_id,
    tempat_duduk,
    agasi,
    transmisi,
    bahan_bakar,
    deskripsi,
    jumlah,
    harga,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleTempatDudukChange,
    handleAgasiChange,
    handleTransmisiChange,
    handleBahanBakarChange,
    handleDeskripsiChange,
    handleJumlahChange,
    handleHargaChange,
    handleSubmit,
    files,
    imagePreviews,
    handleImageChange,
  } = MobilEditDataMitra()

  const [categories, setCategories] = useState([])

  let imageArray = []

  try {
    imageArray = JSON.parse(imagePreviews) || []
  } catch (e) {
    console.log('Error parsing imagePreviews:', e)
  }

  console.log('data image preview', imageArray)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/kategori')
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
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
      <div className="container-add">
        <aside className="sidebar">
          <img src="/images/admin/logo.png" className="logo" alt="Logo" />
          <nav>
            <ul>
              <li>
                <a href="/mitra">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Home
                </a>
              </li>
              <li style={{ backgroundColor: 'orangered' }}>
                <a href="/mobilmitra">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Mobil Mitra
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
                  Edit Mobil
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-input-group">

                  <div className="form-input">
                    <label>Jenis:</label>
                    <input
                      type="text"

                      value={jenis}
                      onChange={handleJenisChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Merk:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={merk}
                      onChange={handleMerkChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Tahun:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={tahun}
                      onChange={handleTahunChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Pajak:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={pajak}
                      onChange={handlePajakChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Kategori:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={kategori_id}
                      onChange={handleKategoriIdChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Tempat Duduk:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={tempat_duduk}
                      onChange={handleTempatDudukChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Agasi:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={agasi}
                      onChange={handleAgasiChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Transmisi:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={transmisi}
                      onChange={handleTransmisiChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Bahan Bakar:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={bahan_bakar}
                      onChange={handleBahanBakarChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Deskripsi:</label>
                    <textarea
                      className="form-control"
                      value={deskripsi}
                      onChange={handleDeskripsiChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-input">
                    <label>Jumlah:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={jumlah}
                      onChange={handleJumlahChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Harga:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={harga}
                      onChange={handleHargaChange}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Gambar Mobil:</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImageChange}
                      multiple
                    />
                    <div className="image-previews">
                      {imagePreviews.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt="Preview"
                          style={{ maxWidth: '100px', margin: '10px' }}
                        />
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary login">
                    Simpan
                  </button>
                </div>
              </form>

            </div>
          </section>
        </main>
      </div>
    </div >
  )
}

export default EditMobilMitraPage
