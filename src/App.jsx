import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GaragePage from './pages/GaragePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import CheckoutPage from './pages/CheckoutPage'
import CarDetailPage from './pages/CarDetailPage'
import AdminPage from './pages/AdminPage'
import SopirPage from './pages/SopirPage'
import AddSopirPage from './pages/TambahSopirPage'
import EditSopirPage from './pages/EditSopirPage'
import PelangganPage from './pages/PelangganPage'
import AddPelangganPage from './pages/TambahPelanggan'
import EditPelangganPage from './pages/EditPelangganPage'
import MobilPage from './pages/MobilPage'
import AddMobilPage from './pages/TambahMobil'
import EditMobilPage from './pages/EditMobil'
import PenjadwalanPage from './pages/PenjadwalanPage'
import AddPenjadwalanPage from './pages/TambahPenjadwalan'
import EditPenjadwalanPage from './pages/EditPenjadwalan'
function PageNotfound() {
  return (
    <p className="error-message">
      Sorry, The page you are looking for is Not found!
    </p>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/garasi" element={<GaragePage />} />
        <Route exact path="/pembelian/:id" element={<CheckoutPage />} />
        <Route exact path="/masuk" element={<SignInPage />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/daftar" element={<SignUpPage />} />
        <Route exact path="/detail/:id" element={<CarDetailPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/sopir" element={<SopirPage />} />
        <Route exact path="/sopiradd" element={<AddSopirPage />} />
        <Route exact path="/sopiredit/:id" element={<EditSopirPage />} />
        <Route exact path="/pelanggan" element={<PelangganPage />} />
        <Route exact path="/pelangganadd" element={<AddPelangganPage />} />
        <Route
          exact
          path="/pelangganedit/:id"
          element={<EditPelangganPage />}
        />
        <Route exact path="/mobil" element={<MobilPage />} />
        <Route exact path="/mobiladd" element={<AddMobilPage />} />
        <Route exact path="/mobiledit/:id" element={<EditMobilPage />} />
        <Route exact path="/penjadwalan" element={<PenjadwalanPage />} />
        <Route exact path="/penjadwalan" element={<AddPenjadwalanPage />} />
        <Route
          exact
          path="/penjadwalan/:id"
          element={<EditPenjadwalanPage />}
        />
        <Route
          exact
          path="/pelangganedit/:id"
          element={<EditPelangganPage />}
        />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </BrowserRouter>
  )
}
