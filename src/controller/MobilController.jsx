import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const MobilAddData = () => {
  const navigate = useNavigate()

  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [tahun, setTahun] = useState('')
  const [pajak, setPajak] = useState('')
  const [kategori_id, setKategoriId] = useState('')
  const [user_id, setUserId] = useState('')
  const [tempat_duduk, setTempatDuduk] = useState('')
  const [agasi, setAgasi] = useState('')
  const [transmisi, setTransmisi] = useState('')
  const [bahan_bakar, setBahanBakar] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [harga, setHarga] = useState('')
  const [files, setFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const handleJenisChange = (e) => setJenis(e.target.value)
  const handleMerkChange = (e) => setMerk(e.target.value)
  const handleTahunChange = (e) => setTahun(e.target.value)
  const handlePajakChange = (e) => setPajak(e.target.value)
  const handleKategoriIdChange = (e) => setKategoriId(e.target.value)
  const handleTempatDudukChange = (e) => setTempatDuduk(e.target.value)
  const handleAgasiChange = (e) => setAgasi(e.target.value)
  const handleTransmisiChange = (e) => setTransmisi(e.target.value)
  const handleBahanBakarChange = (e) => setBahanBakar(e.target.value)
  const handleDeskripsiChange = (e) => setDeskripsi(e.target.value)
  const handleJumlahChange = (e) => setJumlah(e.target.value)
  const handleHargaChange = (e) => setHarga(e.target.value)
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(selectedFiles)
    setImagePreviews(selectedFiles.map((file) => URL.createObjectURL(file)))
  }

  useEffect(() => {
    getUser()
    // getCardetail()
  })
  const getUser = async () => {
    const token = localStorage.getItem('refresh_token')
    try {
      const response = await axios.get(`http://localhost:3000/me`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      setUserId(response.data.id)
    } catch (error) {
      console.error('Error fetching sopir data:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    files.forEach((file) => {
      formData.append('images', file)
    })
    formData.append('jenis', jenis)
    formData.append('merk', merk)
    formData.append('tahun', tahun)
    formData.append('pajak', pajak)
    formData.append('kategori_id', kategori_id)
    formData.append('tempat_duduk', tempat_duduk)
    formData.append('agasi', agasi)
    formData.append('transmisi', transmisi)
    formData.append('bahan_bakar', bahan_bakar)
    formData.append('deskripsi', deskripsi)
    formData.append('jumlah', jumlah)
    formData.append('harga', harga)
    formData.append('user_id', user_id)
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
    tempat_duduk,
    agasi,
    transmisi,
    bahan_bakar,
    deskripsi,
    jumlah,
    harga,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleTempatDudukChange,
    handleAgasiChange,
    handleTransmisiChange,
    handleBahanBakarChange,
    handleDeskripsiChange,
    handleJumlahChange,
    handleHargaChange,
    handleSubmit,
    files,
    imagePreviews,
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
  const [tempat_duduk, setTempatDuduk] = useState('')
  const [agasi, setAgasi] = useState('')
  const [transmisi, setTransmisi] = useState('')
  const [bahan_bakar, setBahanBakar] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [harga, setHarga] = useState('')
  const [files, setFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const handleJenisChange = (e) => setJenis(e.target.value)
  const handleMerkChange = (e) => setMerk(e.target.value)
  const handleTahunChange = (e) => setTahun(e.target.value)
  const handlePajakChange = (e) => setPajak(e.target.value)
  const handleKategoriIdChange = (e) => setKategoriId(e.target.value)
  const handleTempatDudukChange = (e) => setTempatDuduk(e.target.value)
  const handleAgasiChange = (e) => setAgasi(e.target.value)
  const handleTransmisiChange = (e) => setTransmisi(e.target.value)
  const handleBahanBakarChange = (e) => setBahanBakar(e.target.value)
  const handleDeskripsiChange = (e) => setDeskripsi(e.target.value)
  const handleJumlahChange = (e) => setJumlah(e.target.value)
  const handleHargaChange = (e) => setHarga(e.target.value)

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(selectedFiles)
    setImagePreviews(selectedFiles.map((file) => URL.createObjectURL(file)))
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
      setTempatDuduk(mobil.tempat_duduk)
      setAgasi(mobil.agasi)
      setTransmisi(mobil.transmisi)
      setBahanBakar(mobil.bahan_bakar)
      setDeskripsi(mobil.deskripsi)
      setJumlah(mobil.jumlah)
      setHarga(mobil.harga)
      setImagePreviews(JSON.parse(mobil.urls)) // Update to parse URLs correctly
    } catch (error) {
      console.error('Error fetching mobil:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    files.forEach((file) => {
      formData.append('images', file)
    })
    formData.append('jenis', jenis)
    formData.append('merk', merk)
    formData.append('tahun', tahun)
    formData.append('pajak', pajak)
    formData.append('kategori_id', kategori_id)
    formData.append('tempat_duduk', tempat_duduk)
    formData.append('agasi', agasi)
    formData.append('transmisi', transmisi)
    formData.append('bahan_bakar', bahan_bakar)
    formData.append('deskripsi', deskripsi)
    formData.append('jumlah', jumlah)
    formData.append('harga', harga)

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
    tempat_duduk,
    agasi,
    transmisi,
    bahan_bakar,
    deskripsi,
    jumlah,
    harga,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleTempatDudukChange,
    handleAgasiChange,
    handleTransmisiChange,
    handleBahanBakarChange,
    handleDeskripsiChange,
    handleJumlahChange,
    handleHargaChange,
    handleSubmit,
    files,
    imagePreviews,
    handleImageChange,
  }
}

export const MobilAddDataMitra = () => {
  const navigate = useNavigate()

  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [tahun, setTahun] = useState('')
  const [pajak, setPajak] = useState('')
  const [kategori_id, setKategoriId] = useState('')
  const [user_id, setUserId] = useState('')
  const [tempat_duduk, setTempatDuduk] = useState('')
  const [agasi, setAgasi] = useState('')
  const [transmisi, setTransmisi] = useState('')
  const [bahan_bakar, setBahanBakar] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [harga, setHarga] = useState('')
  const [files, setFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const handleJenisChange = (e) => setJenis(e.target.value)
  const handleMerkChange = (e) => setMerk(e.target.value)
  const handleTahunChange = (e) => setTahun(e.target.value)
  const handlePajakChange = (e) => setPajak(e.target.value)
  const handleKategoriIdChange = (e) => setKategoriId(e.target.value)
  const handleTempatDudukChange = (e) => setTempatDuduk(e.target.value)
  const handleAgasiChange = (e) => setAgasi(e.target.value)
  const handleTransmisiChange = (e) => setTransmisi(e.target.value)
  const handleBahanBakarChange = (e) => setBahanBakar(e.target.value)
  const handleDeskripsiChange = (e) => setDeskripsi(e.target.value)
  const handleJumlahChange = (e) => setJumlah(e.target.value)
  const handleHargaChange = (e) => setHarga(e.target.value)
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(selectedFiles)
    setImagePreviews(selectedFiles.map((file) => URL.createObjectURL(file)))
  }

  useEffect(() => {
    getUser()
    // getCardetail()
  })
  const getUser = async () => {
    const token = localStorage.getItem('refresh_token')
    try {
      const response = await axios.get(`http://localhost:3000/me`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      setUserId(response.data.id)
    } catch (error) {
      console.error('Error fetching sopir data:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    files.forEach((file) => {
      formData.append('images', file)
    })
    formData.append('jenis', jenis)
    formData.append('merk', merk)
    formData.append('tahun', tahun)
    formData.append('pajak', pajak)
    formData.append('kategori_id', kategori_id)
    formData.append('tempat_duduk', tempat_duduk)
    formData.append('agasi', agasi)
    formData.append('transmisi', transmisi)
    formData.append('bahan_bakar', bahan_bakar)
    formData.append('deskripsi', deskripsi)
    formData.append('jumlah', jumlah)
    formData.append('harga', harga)
    formData.append('user_id', user_id)
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
      navigate('/mobilmitra')
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
    tempat_duduk,
    agasi,
    transmisi,
    bahan_bakar,
    deskripsi,
    jumlah,
    harga,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleTempatDudukChange,
    handleAgasiChange,
    handleTransmisiChange,
    handleBahanBakarChange,
    handleDeskripsiChange,
    handleJumlahChange,
    handleHargaChange,
    handleSubmit,
    files,
    imagePreviews,
    handleImageChange,
  }
}
export const MobilEditDataMitra = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [tahun, setTahun] = useState('')
  const [pajak, setPajak] = useState('')
  const [kategori_id, setKategoriId] = useState('')
  const [tempat_duduk, setTempatDuduk] = useState('')
  const [agasi, setAgasi] = useState('')
  const [transmisi, setTransmisi] = useState('')
  const [bahan_bakar, setBahanBakar] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [harga, setHarga] = useState('')
  const [files, setFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const handleJenisChange = (e) => setJenis(e.target.value)
  const handleMerkChange = (e) => setMerk(e.target.value)
  const handleTahunChange = (e) => setTahun(e.target.value)
  const handlePajakChange = (e) => setPajak(e.target.value)
  const handleKategoriIdChange = (e) => setKategoriId(e.target.value)
  const handleTempatDudukChange = (e) => setTempatDuduk(e.target.value)
  const handleAgasiChange = (e) => setAgasi(e.target.value)
  const handleTransmisiChange = (e) => setTransmisi(e.target.value)
  const handleBahanBakarChange = (e) => setBahanBakar(e.target.value)
  const handleDeskripsiChange = (e) => setDeskripsi(e.target.value)
  const handleJumlahChange = (e) => setJumlah(e.target.value)
  const handleHargaChange = (e) => setHarga(e.target.value)

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(selectedFiles)
    setImagePreviews(selectedFiles.map((file) => URL.createObjectURL(file)))
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
      setTempatDuduk(mobil.tempat_duduk)
      setAgasi(mobil.agasi)
      setTransmisi(mobil.transmisi)
      setBahanBakar(mobil.bahan_bakar)
      setDeskripsi(mobil.deskripsi)
      setJumlah(mobil.jumlah)
      setHarga(mobil.harga)
      setImagePreviews(JSON.parse(mobil.urls)) // Update to parse URLs correctly
    } catch (error) {
      console.error('Error fetching mobil:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    files.forEach((file) => {
      formData.append('images', file)
    })
    formData.append('jenis', jenis)
    formData.append('merk', merk)
    formData.append('tahun', tahun)
    formData.append('pajak', pajak)
    formData.append('kategori_id', kategori_id)
    formData.append('tempat_duduk', tempat_duduk)
    formData.append('agasi', agasi)
    formData.append('transmisi', transmisi)
    formData.append('bahan_bakar', bahan_bakar)
    formData.append('deskripsi', deskripsi)
    formData.append('jumlah', jumlah)
    formData.append('harga', harga)

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
      navigate('/mobilmitra')
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
    tempat_duduk,
    agasi,
    transmisi,
    bahan_bakar,
    deskripsi,
    jumlah,
    harga,
    handleJenisChange,
    handleMerkChange,
    handleTahunChange,
    handlePajakChange,
    handleKategoriIdChange,
    handleTempatDudukChange,
    handleAgasiChange,
    handleTransmisiChange,
    handleBahanBakarChange,
    handleDeskripsiChange,
    handleJumlahChange,
    handleHargaChange,
    handleSubmit,
    files,
    imagePreviews,
    handleImageChange,
  }
}
