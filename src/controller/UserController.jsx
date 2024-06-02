import { useEffect, useState } from 'react'
import axios from 'axios'

export const UserAllData = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user')
      setUser(response.data)
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

  const PembelianData = () => {
    return pembelian.length
  }

  let counterid = 1
  const datatabel = pembelian.map((item) => ({
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
    pembelian,
    handleDelete,
    datatabel,
    columns,
    getPembelian,
    PembelianData,
  }
}
