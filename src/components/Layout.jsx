import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Periksa apakah ada refresh token di local storage
    const refreshToken = localStorage.getItem('refresh_token')
    if (refreshToken) {
      // Jika ada, set isAuthenticated menjadi true
      setIsAuthenticated(true)
    }
  }, []) // Kode ini hanya dijalankan sekali setelah komponen dipasang
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      {children}
      <Footer />
    </>
  )
}
