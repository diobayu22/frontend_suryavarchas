import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
export const PembelianAllData = () => {
  const [pembelian, setPembelian] = useState([])

  useEffect(() => {
    getPembelian()
  }, [])

  const getPembelian = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pembayaran')
      setPembelian(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/pembayaran/${id}`, {
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

  const datatabel2 = pembelian.map((item) => ({
    id: counterid++,
    nama: item.nama,
    alamat: item.alamat,
    no_telp: item.no_telp,
    action: '',
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

  const columns2 = [
    { name: 'ID', selector: 'id', sortable: true, width: '120px' },
    {
      name: 'Nama',
      selector: 'nama',
      sortable: true,
      width: '200px',
    },
    {
      name: 'Alamat',
      selector: 'alamat',
      sortable: true,
      width: '200px',
    },
    {
      name: 'Nomor Telepon',
      selector: 'no_telp',
      sortable: true,
      width: '200px',
    },
    {
      name: 'Action',
      selector: 'action',
      sortable: false,
      cell: (row) => (
        <div>
          {/* <FontAwesomeIcon
            icon={faEdit}
            style={{ cursor: 'pointer', marginRight: '10px' }}
            onClick={() => handleEdit(row.item_id)}
          /> */}
          <a href={`sopir/${row.item_id}`}>
            <FontAwesomeIcon icon={faEdit} style={{ cursor: 'pointer' }} />
          </a>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ cursor: 'pointer', marginRight: '10px' }}
            onClick={() => handleDelete(row.item_id)}
          />
          <FontAwesomeIcon
            icon={faEye}
            style={{ cursor: 'pointer' }}
            onClick={() => handleShow(row.item_id)}
          />
        </div>
      ),
    },
  ]

  return {
    pembelian,
    handleDelete,
    datatabel,
    datatabel2,
    columns,
    columns2,
    getPembelian,
    PembelianData,
  }
}

export const PelangganAddData = () => {
  const [tipeIdentitas, setTipeIdentitas] = useState('')
  const [noIdentitas, setNoIdentitas] = useState('')
  const [nama, setNama] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [kota, setKota] = useState('')
  const [plokasi, setLokasi] = useState('')
  const [ptanggal, setTanggal] = useState('')
  const [pwaktu, setWaktu] = useState('')
  const navigate = useNavigate()
  // const { token, refreshToken } = useTokenRefresh()

  useEffect(() => {
    // refreshToken()
  }, [])

  const handleTipeIdentitas = (e) => {
    setTipeIdentitas(e.target.value)
  }

  const handleNoIdentitas = (e) => {
    setNoIdentitas(e.target.value)
  }

  const handleNama = (e) => {
    setNama(e.target.value)
  }

  const handleNoTelp = (e) => {
    setNoTelp(e.target.value)
  }

  const handleAlamat = (e) => {
    setAlamat(e.target.value)
  }

  const handleKota = (e) => {
    setKota(e.target.value)
  }

  const handleLokasi = (e) => {
    setLokasi(e.target.value)
  }

  const handleTanggal = (e) => {
    setTanggal(e.target.value)
  }

  const handleWaktu = (e) => {
    setWaktu(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      tipe_identitas: tipeIdentitas,
      no_identitas: noIdentitas,
      nama: nama,
      no_telp: noTelp,
      alamat: alamat,
      kota: kota,
      plokasi: plokasi,
      ptanggal: ptanggal,
      pwaktu: pwaktu,
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/pembayaran',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('sukses', response)
      navigate('/pelanggan')
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
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
  }
}

export const PelangganEditData = () => {
  // const { token, refreshToken } = useTokenRefresh()
  const { id } = useParams()

  const [tipeIdentitas, setTipeIdentitas] = useState('')
  const [noIdentitas, setNoIdentitas] = useState('')
  const [nama, setNama] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [kota, setKota] = useState('')
  const [plokasi, setLokasi] = useState('')
  const [ptanggal, setTanggal] = useState('')
  const [pwaktu, setWaktu] = useState('')
  const navigate = useNavigate()
  // const { token, refreshToken } = useTokenRefresh()

  useEffect(() => {
    // refreshToken()
  }, [])

  const handleTipeIdentitas = (e) => {
    setTipeIdentitas(e.target.value)
  }

  const handleNoIdentitas = (e) => {
    setNoIdentitas(e.target.value)
  }

  const handleNama = (e) => {
    setNama(e.target.value)
  }

  const handleNoTelp = (e) => {
    setNoTelp(e.target.value)
  }

  const handleAlamat = (e) => {
    setAlamat(e.target.value)
  }

  const handleKota = (e) => {
    setKota(e.target.value)
  }

  const handleLokasi = (e) => {
    setLokasi(e.target.value)
  }

  const handleTanggal = (e) => {
    setTanggal(e.target.value)
  }

  const handleWaktu = (e) => {
    setWaktu(e.target.value)
  }

  const getPelangganId = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/pembayaran/${id}`)
      setTipeIdentitas(response.data.tipe_identitas)
      setNoIdentitas(response.data.no_identitas)
      setNama(response.data.nama)
      setNoTelp(response.data.no_telp)
      setAlamat(response.data.alamat)
      setKota(response.data.kota)
      setLokasi(response.data.plokasi)
      setTanggal(response.data.ptanggal)
      setWaktu(response.data.pwaktu)
      // setImagePreview(response.data.url)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      tipe_identitas: tipeIdentitas,
      no_identitas: noIdentitas,
      nama: nama,
      no_telp: noTelp,
      alamat: alamat,
      kota: kota,
      plokasi: plokasi,
      ptanggal: ptanggal,
      pwaktu: pwaktu,
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/pembayaran/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('sukses', response)
      navigate('/pelanggan')
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    getPelangganId()
    // refreshToken()
  }, [])

  return {
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
  }
}

export const PelangganDetail = () => {
  // const { id } = useParams()
  const [tipeIdentitas, setTipeIdentitas] = useState('')
  const [noIdentitas, setNoIdentitas] = useState('')
  const [nama, setNama] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [kota, setKota] = useState('')
  const [plokasi, setLokasi] = useState('')
  const [ptanggal, setTanggal] = useState('')
  const [pwaktu, setWaktu] = useState('')
  const navigate = useNavigate()

  const getPelangganId = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/pembayaran/${id}`)
      setTipeIdentitas(response.data.tipe_identitas)
      setNoIdentitas(response.data.no_identitas)
      setNama(response.data.nama)
      setNoTelp(response.data.no_telp)
      setAlamat(response.data.alamat)
      setKota(response.data.kota)
      setLokasi(response.data.plokasi)
      setTanggal(response.data.ptanggal)
      setWaktu(response.data.pwaktu)
      // setImagePreview(response.data.url)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getPelangganId()
    // refreshToken()
  }, [])

  return {
    tipeIdentitas,
    noIdentitas,
    nama,
    noTelp,
    alamat,
    kota,
    plokasi,
    ptanggal,
    pwaktu,
    getPelangganId,
  }
}
