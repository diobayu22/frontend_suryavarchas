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

export const SopirAllData = () => {
  const [sopir, setSopir] = useState([])

  useEffect(() => {
    getSopir()
  }, [])

  const getSopir = async () => {
    try {
      const response = await axios.get('http://localhost:3000/sopir')
      setSopir(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/sopir/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      getSopir()
    } catch (error) {
      console.log(error)
    }
  }

  const SopirData = () => {
    return sopir.length
  }

  let counterid = 1
  const datatabel = sopir.map((item) => ({
    id: counterid++,
    no_id: item.no_id,
    nama: item.nama,
    no_telp: item.no_telp,
    action: '',
    item_id: item.id,
  }))

  const columns = [
    { name: 'ID', selector: 'id', sortable: true, width: '120px' },
    { name: 'No Id', selector: 'no_id', sortable: true, width: '120px' },
    { name: 'Nama', selector: 'nama', sortable: true, width: '200px' },
    { name: 'No Telp', selector: 'no_telp', sortable: true, width: '200px' },
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
    sopir,
    handleDelete,
    datatabel,
    columns,
    getSopir,
    SopirData,
  }
}

export const SopirAddData = () => {
  const [nama, setNama] = useState('')
  const [no_telp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  // const { token, refreshToken } = useTokenRefresh()

  useEffect(() => {
    // refreshToken()
  }, [])

  const handleNama = (e) => {
    setNama(e.target.value)
  }

  const handleTelpChange = (e) => {
    setNoTelp(e.target.value)
  }

  const handleAlamatChange = (e) => {
    setAlamat(e.target.value)
  }

  const handleImageChange = (e) => {
    const image = e.target.files[0]
    setFile(image)

    const previewURL = URL.createObjectURL(image)
    setImagePreview(previewURL)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    formData.append('nama', nama)
    formData.append('no_telp', no_telp)
    formData.append('alamat', alamat)
    try {
      const response = await axios.post(
        'http://localhost:3000/sopir',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: `Bearer ${token}`,
          },
        },
      )
      navigate('/sopir')
      console.log('sukses', response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
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
  }
}

export const SopirEditData = () => {
  // const { token, refreshToken } = useTokenRefresh()
  const { id } = useParams()

  const [nama, setNama] = useState('')
  const [no_telp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const navigate = useNavigate()
  const [file, setFile] = useState(null)

  useEffect(() => {
    // refreshToken()
  }, [])

  const handleNama = (e) => {
    setNama(e.target.value)
  }

  const handleTelpChange = (e) => {
    setNoTelp(e.target.value)
  }

  const handleAlamatChange = (e) => {
    setAlamat(e.target.value)
  }

  const handleImageChange = (e) => {
    const image = e.target.files[0]
    setFile(image)

    const previewURL = URL.createObjectURL(image)
    setImagePreview(previewURL)
  }

  const getSopirId = async () => {
    const response = await axios.get(`http://localhost:3000/sopir/${id}`)
    setNama(response.data.nama)
    setNoTelp(response.data.no_telp)
    setAlamat(response.data.alamat)
    setImagePreview(response.data.url)
    setFile(response.data.image)
    // setImagePreview(response.data.url)
  }

  console.log('data', setAlamat, setNama)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    formData.append('nama', nama)
    formData.append('no_telp', no_telp)
    formData.append('alamat', alamat)
    try {
      const response = await axios.put(
        `http://localhost:3000/sopir/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('sukses', response)
      navigate('/sopir')
    } catch {
      console.log('error', formData)
    }
  }

  useEffect(() => {
    getSopirId()
    // refreshToken()
  }, [])

  return {
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
  }
}

export const SopirDetail = () => {
  const [nama, setNama] = useState('')
  const [no_telp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const navigate = useNavigate()
  const [file, setFile] = useState(null)

  useEffect(() => {
    // refreshToken()
  }, [])
  const getSopirId = async (id) => {
    const response = await axios.get(`http://localhost:3000/sopir/${id}`)

    setNama(response.data.nama)
    setNoTelp(response.data.no_telp)
    setAlamat(response.data.alamat)
    setImagePreview(response.data.url)
    // setWaktu(response.data.dibuat_pada)
  }

  // const formatDate = (isoDateString) => {
  //   const date = new Date(isoDateString)
  //   const year = date.getFullYear()
  //   const month = ('0' + (date.getMonth() + 1)).slice(-2)
  //   const day = ('0' + date.getDate()).slice(-2)

  //   const formattedDate = `${day}-${month}-${year}`
  //   return formattedDate
  // }

  // const formattedDate = formatDate(waktu)

  return { nama, no_telp, alamat, getSopirId, imagePreview }
}
