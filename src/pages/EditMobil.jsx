import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { MobilEditData } from '../controller/MobilController'

const EditMobilPage = () => {
  const navigate = useNavigate()
  const {
    jenis,
    merk,
    tahun,
    pajak,
    kategori_id,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleSubmit,
    file,
    imagePreview,
    handleImageChange,
  } = MobilEditData()

  const [categories, setCategories] = useState([])

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
              <li style={{ backgroundColor: 'orangered' }}>
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
              <form action="" className="form sign-up" onSubmit={handleSubmit}>
                <div className="login-wrapper my-auto">
                  <div className="form-group">
                    <label htmlFor="jenis">Jenis</label>
                    <input
                      type="text"
                      name="jenis"
                      id="jenis"
                      className="form-control input-form"
                      placeholder="Jenis Mobil"
                      value={jenis}
                      onChange={handleJenisChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="merk">Merk</label>
                    <input
                      type="text"
                      name="merk"
                      id="merk"
                      className="form-control input-form"
                      placeholder="Merk Mobil"
                      value={merk}
                      onChange={handleMerkChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tahun">Tahun</label>
                    <input
                      type="number"
                      name="tahun"
                      id="tahun"
                      className="form-control input-form"
                      placeholder="Tahun Pembuatan"
                      value={tahun}
                      onChange={handleTahunChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pajak">Pajak</label>
                    <input
                      type="date"
                      name="pajak"
                      id="pajak"
                      className="form-control input-form"
                      placeholder="Pajak Mobil"
                      value={pajak}
                      onChange={handlePajakChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="kategori_id">Kategori</label>
                    <select
                      name="kategori_id"
                      id="kategori_id"
                      className="form-control input-form"
                      value={kategori_id}
                      onChange={handleKategoriIdChange}
                    >
                      <option value="">Pilih Kategori</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.namakategori}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <label
                      htmlFor="image"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="mt-2 rounded-md max-w-full"
                        style={{ maxHeight: '200px' }}
                      />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary login"
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default EditMobilPage
