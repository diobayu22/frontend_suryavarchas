import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { SopirEditData } from '../controller/SopirController'

const EditSopirPage = () => {
  const {
    nama,
    no_telp,
    alamat,
    handleAlamatChange,
    handleNama,
    handleTelpChange,
    handleSubmit,
  } = SopirEditData()

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
                  <a className="logout" href="#">
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
                  Edit Sopir
                </h3>
              </div>
              <form action="" className="form sign-up">
                <div className="login-wrapper my-auto">
                  <div className="form-group">
                    <label htmlFor="nama">Nama</label>
                    <input
                      type="text"
                      name="nama"
                      id="nama"
                      className="form-control input-form"
                      placeholder="TesyaEriana"
                      value={nama}
                      onChange={handleNama}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="no_telp">No Telp</label>
                    <input
                      type="number"
                      name="no_telp"
                      id="no_telp"
                      className="form-control input-form"
                      placeholder="089xxxxxxx"
                      value={no_telp}
                      onChange={handleTelpChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="alamat">Alamat</label>
                    <br />
                    <textarea
                      id="alamat"
                      name="alamat"
                      style={{
                        width: '400px',
                        height: '200px',
                      }}
                      className="border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
                      value={alamat}
                      onChange={handleAlamatChange}
                    />
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

export default EditSopirPage
