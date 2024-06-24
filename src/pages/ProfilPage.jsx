import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Layout from '../components/Layout'

const ProfilPage = () => {
  const navigate = useNavigate()
  const [usersData, setUsersData] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [no_telp, setTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const [file, setFile] = useState(null)
  const [iduser, setId] = useState('')

  useEffect(() => {
    fetchMobils()
  }, [])

  const fetchMobils = async () => {
    const token = localStorage.getItem('refresh_token')
    try {
      const response = await axios.get(`http://localhost:3000/me`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      setUsersData(response.data)
      setAlamat(response.data.alamat)
      setTelp(response.data.phone)
      setEmail(response.data.email)
      setName(response.data.name)
      setImagePreview(response.data.url)
      setId(response.data.id)
    } catch (error) {
      console.error('Error fetching mobils:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // Mencegah reload halaman saat form disubmit
    const token = localStorage.getItem('refresh_token')
    const formData = new FormData()
    formData.append('image', file)
    formData.append('name', name)
    formData.append('phone', no_telp)
    formData.append('alamat', alamat)
    try {
      const response = await axios.put(
        `http://localhost:3000/update/${iduser}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('sukses', response.data)
      window.location.reload()
    } catch (error) {
      console.error('Error fetching mobils:', error)
    }
  }

  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFile(file) // Menyimpan file yang dipilih ke dalam state file
  }

  const handleEditAvatarClick = () => {
    // Memicu klik pada input file saat ikon edit di klik
    fileInputRef.current.click()
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleSaveClick = async () => {
    setEditMode(false)
    await handleSubmit()
  }

  return (
    <Layout>
      <div>
        <div className="container-add">
          <aside className="sd-profile">
            <nav>
              <ul>
                <li style={{ backgroundColor: 'orangered' }}>
                  <a href="/profile">
                    <img className="logo-1" src="/images/admin/pf.svg" alt="" />{' '}
                    Akun Saya
                  </a>
                </li>
                <li>
                  <a href="/pesanan">
                    <img className="logo-1" src="/images/admin/pesanan.svg" alt="" />{' '}
                    Pesanan Saya
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">
            <section>
              <div className="profile-container">
                <form onSubmit={handleSubmit}>
                  <div className="profile-avatar">
                    <div className="avatar-circle">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Avatar"
                          className="avatar-image"
                        />
                      ) : (
                        <img
                          src="/images/admin/org.svg"
                          alt="Avatar"
                          className="avatar-image"
                        />
                      )}

                      <div
                        className="edit-avatar"
                        onClick={handleEditAvatarClick}
                      >
                        <img
                          src="/images/admin/pc.svg"
                          alt="Edit Avatar"
                          className="edit-icon"
                        />
                      </div>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                    />
                  </div>
                  <input
                    type="hidden"
                    value={iduser}
                    readOnly
                    className="input-field"
                  />
                  <div className="profile-form">
                    <div className="profile-field">
                      <label>Email</label>
                      <div className="input-group">
                        <input
                          type="email"
                          value={email}
                          readOnly
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="profile-field">
                      <label>Nama</label>
                      <div className="input-group">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          readOnly={!editMode}
                          className="input-field"
                        />
                        {!editMode && (
                          <button
                            type="button"
                            className="edit-button"
                            onClick={handleEditClick}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="profile-field">
                      <label>Alamat</label>
                      <div className="input-group">
                        <input
                          type="text"
                          value={alamat}
                          onChange={(e) => setAlamat(e.target.value)}
                          readOnly={!editMode}
                          className="input-field"
                        />
                        {!editMode && (
                          <button
                            type="button"
                            className="edit-button"
                            onClick={handleEditClick}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="profile-field">
                      <label>Phone</label>
                      <div className="input-group">
                        <input
                          type="text"
                          value={no_telp}
                          onChange={(e) => setTelp(e.target.value)}
                          readOnly={!editMode}
                          className="input-field"
                        />
                        {!editMode && (
                          <button
                            type="button"
                            className="edit-button"
                            onClick={handleEditClick}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                    {editMode && (
                      <div className="profile-buttons">
                        <button type="submit" className="save-button">
                          Simpan
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilPage
