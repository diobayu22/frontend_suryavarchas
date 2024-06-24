import { useState } from 'react'

export default function Search({ setSearchParams, setIsSearchClicked }) {
  const [lokasiPenjemputan, setLokasiPenjemputan] = useState('')
  const [tanggalPengambilan, setTanggalPengambilan] = useState('')
  const [waktuPengambilan, setWaktuPengambilan] = useState('')
  const [lokasiDropoff, setLokasiDropoff] = useState('')
  const [tanggalDropoff, setTanggalDropoff] = useState('')
  const [waktuDropoff, setWaktuDropoff] = useState('')

  const onSearchCar = (e) => {
    e.preventDefault()
    setSearchParams({
      lokasiPenjemputan,
      tanggalPengambilan,
      waktuPengambilan,
      lokasiDropoff,
      tanggalDropoff,
      waktuDropoff,
    })
    setIsSearchClicked(true) // Set search clicked to true
  }

  return (
    <section>
      <div className="search-section">
        <div className="container">
          <form onSubmit={onSearchCar}>
            <div className="inner">
              <div className="row">
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      name="lokasiPenjemputan"
                      className="form-control"
                      placeholder="Lokasi Penjemputan"
                      value={lokasiPenjemputan}
                      onChange={(e) => setLokasiPenjemputan(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="date"
                      name="tanggalPengambilan"
                      className="form-control"
                      placeholder="Tanggal Pengambilan"
                      value={tanggalPengambilan}
                      onChange={(e) => setTanggalPengambilan(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group mb-0">
                    <input
                      type="time"
                      name="waktuPengambilan"
                      className="form-control"
                      placeholder="Jam"
                      value={waktuPengambilan}
                      onChange={(e) => setWaktuPengambilan(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      name="lokasiDropoff"
                      className="form-control"
                      placeholder="Lokasi Dropoff"
                      value={lokasiDropoff}
                      onChange={(e) => setLokasiDropoff(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="date"
                      name="tanggalDropoff"
                      className="form-control"
                      placeholder="Tanggal Dropoff"
                      value={tanggalDropoff}
                      onChange={(e) => setTanggalDropoff(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group mb-0">
                    <input
                      type="time"
                      name="waktuDropoff"
                      className="form-control"
                      placeholder="Jam"
                      value={waktuDropoff}
                      onChange={(e) => setWaktuDropoff(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
