import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserAllData = () => {
  const [userD, setUser] = useState([])
  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user')
      setUser(response.data)

      console.log('data refresh token', response.data)

      // Extract the refresh_token from the response
      if (response.data && response.data.length > 0) {
        setRefreshToken(response.data[0].refresh_token)
        localStorage.setItem('refresh_token', response.data[0].refresh_token)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      getPembelian()
    } catch (error) {
      console.log(error)
    }
  }

  const UserData = () => {
    return userD.length
  }

  let counterid = 1
  const datatabel = userD.map((item) => ({
    id: counterid++,
    plokasi: item.plokasi,
    ptanggal: item.ptanggal,
    status: item.status,
    // action: '',
    item_id: item.id,
  }))

  const columns = [
    { name: 'ID', selector: 'id', sortable: true, width: '120px' },
    {
      name: 'Lokasi Penjemputan',
      selector: 'plokasi',
      sortable: true,
      width: '200px',
    },
    {
      name: 'Tanggal Penjemputan',
      selector: 'ptanggal',
      sortable: true,
      width: '200px',
    },
    { name: 'Status', selector: 'status', sortable: true, width: '200px' },
  ]

  return {
    userD,
    handleDelete,
    datatabel,
    columns,
    getUser,
    UserData,
    refreshToken,
  }
}

export const SopirDetail = () => {
  const [nama, setNama] = useState('')
  const [no_telp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Optional: Check for token or other initial actions
  }, [])

  const getSopirId = async (id) => {
    const token = localStorage.getItem('refresh_token')
    try {
      const response = await axios.get(`http://localhost:3000/me`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      setNama(response.data.nama)
      setNoTelp(response.data.no_telp)
      setAlamat(response.data.alamat)
      setImagePreview(response.data.url)
    } catch (error) {
      console.error('Error fetching sopir data:', error)
    }
  }

  return { nama, no_telp, alamat, getSopirId, imagePreview }
}

export default SopirDetail
