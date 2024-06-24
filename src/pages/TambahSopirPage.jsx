import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { SopirAddData, SopirAllData } from '../controller/SopirController'

const AddSopirPage = () => {
  const { SopirData, datatabel, columns } = SopirAllData()

  const {
    nama,
    no_telp,
    alamat,
    handleAlamatChange,
    handleNama,
    handleTelpChange,
    handleSubmit,
    file,
    imagePreview,
    handleImageChange,
  } = SopirAddData()
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
                  Tambah Sopir
                </h3>
              </div>
              <form action="">
                <div className="form-input-group">

                  <div className="form-input">
                    <label htmlFor="nama">Nama</label>
                    <input type="text" id="nama" name="nama" value={nama}
                      onChange={handleNama} />
                  </div>

                  <div className="form-input">
                    <label htmlFor="noTelepon">No. Telp</label>
                    <input style={{ width: "100%" }} type="number"
                      name="no_telp"
                      id="no_telp"
                      className="form-control input-form"
                      placeholder="089xxxxxxx"
                      value={no_telp}
                      onChange={handleTelpChange} />
                  </div>




                  <div className="form-input">
                    <label
                      htmlFor="image"

                    >
                      Image
                    </label>

                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}

                    />
                    <br />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="mt-2 rounded-md max-w-full"
                        style={{ maxHeight: '200px' }}

                      />
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="alamat">Alamat</label>
                    <input type="text" id="alamat" name="alamat" value={alamat}
                      onChange={handleAlamatChange} />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary login"
                    onClick={handleSubmit}
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

export default AddSopirPage




