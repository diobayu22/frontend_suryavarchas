import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const MobilAddData = () => {
  const navigate = useNavigate()

  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [tahun, setTahun] = useState('')
  const [pajak, setPajak] = useState('')
  const [kategori_id, setKategoriId] = useState('')
  const [file, setFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleJenisChange = (e) => setJenis(e.target.value)
  const handleMerkChange = (e) => setMerk(e.target.value)
  const handleTahunChange = (e) => setTahun(e.target.value)
  const handlePajakChange = (e) => setPajak(e.target.value)
  const handleKategoriIdChange = (e) => setKategoriId(e.target.value)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    formData.append('jenis', jenis)
    formData.append('merk', merk)
    formData.append('tahun', tahun)
    formData.append('pajak', pajak)
    formData.append('kategori_id', kategori_id)
    console.log('data ', formData)
    try {
      const response = await axios.post(
        'http://localhost:3000/mobil',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('sukses', response)
      navigate('/mobil')
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
    jenis,
    merk,
    tahun,
    pajak,
    kategori_id,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleSubmit,
    file,
    imagePreview,
    handleImageChange,
  }
}
export const MobilEditData = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [tahun, setTahun] = useState('')
  const [pajak, setPajak] = useState('')
  const [kategori_id, setKategoriId] = useState('')
  const [file, setFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleJenisChange = (e) => setJenis(e.target.value)
  const handleMerkChange = (e) => setMerk(e.target.value)
  const handleTahunChange = (e) => setTahun(e.target.value)
  const handlePajakChange = (e) => setPajak(e.target.value)
  const handleKategoriIdChange = (e) => setKategoriId(e.target.value)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  useEffect(() => {
    fetchMobil()
  }, [])

  const fetchMobil = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/mobil/${id}`)
      const mobil = response.data
      setJenis(mobil.jenis)
      setMerk(mobil.merk)
      setTahun(mobil.tahun)
      setPajak(mobil.pajak)
      setKategoriId(mobil.kategori_id)
      setImagePreview(mobil.url)
    } catch (error) {
      console.error('Error fetching mobil:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    formData.append('jenis', jenis)
    formData.append('merk', merk)
    formData.append('tahun', tahun)
    formData.append('pajak', pajak)
    formData.append('kategori_id', kategori_id)

    try {
      const response = await axios.put(
        `http://localhost:3000/mobil/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log('sukses', response)
      navigate('/mobil')
    } catch (error) {
      console.error('Error updating mobil:', error)
    }
  }

  return {
    jenis,
    merk,
    tahun,
    pajak,
    kategori_id,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleSubmit,
    file,
    imagePreview,
    handleImageChange,
  }
}
