import { PelangganAddData } from '../controller/PembelianController'
import { SopirAddData, SopirAllData } from '../controller/SopirController'

const AddPelangganPage = () => {
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
  } = PelangganAddData()
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
              <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Tipe Identitas:</label>
                  <select
                    value={tipeIdentitas}
                    onChange={handleTipeIdentitas}
                    style={inputStyle}
                  >
                    <option value="">Pilih Tipe Identitas</option>
                    <option value="KTP">KTP</option>
                    <option value="SIM">SIM</option>
                    <option value="KARTU PELAJAR">KARTU PELAJAR</option>
                  </select>
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>No Identitas:</label>
                  <input
                    type="text"
                    value={noIdentitas}
                    onChange={handleNoIdentitas}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Nama:</label>
                  <input
                    type="text"
                    value={nama}
                    onChange={handleNama}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>No Telp:</label>
                  <input
                    type="text"
                    value={noTelp}
                    onChange={handleNoTelp}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Alamat:</label>
                  <input
                    type="text"
                    value={alamat}
                    onChange={handleAlamat}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Kota:</label>
                  <input
                    type="text"
                    value={kota}
                    onChange={handleKota}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Lokasi:</label>
                  <input
                    type="text"
                    value={plokasi}
                    onChange={handleLokasi}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Tanggal:</label>
                  <input
                    type="date"
                    value={ptanggal}
                    onChange={handleTanggal}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Waktu:</label>
                  <input
                    type="time"
                    value={pwaktu}
                    onChange={handleWaktu}
                    style={inputStyle}
                  />
                </div>
                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AddPelangganPage

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
}

const formGroupStyle = {
  marginBottom: '15px',
}

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '4px',
}

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
}
