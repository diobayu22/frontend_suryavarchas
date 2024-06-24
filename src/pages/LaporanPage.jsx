import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const LaporanPage = () => {
  const navigate = useNavigate()
  const [penjadwalans, setPenjadwalans] = useState([])
  const [selectedPenjadwalan, setSelectedPenjadwalan] = useState(null)

  useEffect(() => {
    fetchPenjadwalans()
  }, [])

  const fetchPenjadwalans = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pembayaran')
      setPenjadwalans(response.data)
    } catch (error) {
      console.error('Error fetching penjadwalans:', error)
    }
  }

  const transformData = (data) => {
    return data.map((item) => ({
      month: new Date(item.createdAt).toLocaleString('default', {
        month: 'long',
      }),
      week: new Date(item.createdAt).toLocaleString('default', {
        week: 'numeric',
      }),
      date: new Date(item.createdAt).toLocaleDateString(),
      total: parseFloat(item.total) * 10, // Contoh: Persentase total harga diperbesar 10 kali
      percentage: Math.floor(Math.random() * 100), // Persentase diacak untuk contoh
    }))
  }

  const formattedData = transformData(penjadwalans)

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login')
  }

  const months = [
    'All Months',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const years = [2021, 2022, 2023, 2024]

  const [selectedMonth, setSelectedMonth] = useState('All Months')
  const [selectedYear, setSelectedYear] = useState(2024)
  const [data, setData] = useState(formattedData)

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value
    setSelectedMonth(selectedMonth)
    if (selectedMonth === 'All Months') {
      setData(formattedData)
    } else {
      setData(formattedData.filter((item) => item.month === selectedMonth))
    }
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
    // Handle data fetching or update based on year if needed
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.text('Monthly and Weekly Rental Data', 10, 10)

    const tableData = []
    for (const dataItem of data) {
      tableData.push([
        dataItem.month,
        dataItem.week,
        dataItem.date,
        dataItem.total,
        `${dataItem.percentage}%`,
      ])
    }

    doc.autoTable({
      head: [['Month', 'Week', 'Date', 'Total Rentals', 'Percentage']],
      body: tableData,
    })

    doc.save('report.pdf')
  }

  const chartData = {
    labels: data.map((d) => `Week ${d.week}`),
    datasets: [
      {
        label: 'Total Rentals',
        data: data.map((d) => d.total),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Rental Data for ${selectedMonth} ${selectedYear}`,
      },
    },
    maintainAspectRatio: false,
  }

  const chartContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '400px',
  }

  return (
    <div>
      <div className="container-admin">
        <aside className="sidebar">
          <img src="/images/admin/logo.png" className="logo" alt="Logo" />
          <nav>
            <ul>
              <li>
                <a href="/admin">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Home
                </a>
              </li>
              <li>
                <a href="/sopir">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-1.svg"
                    alt=""
                  />{' '}
                  Sopir
                </a>
              </li>
              <li>
                <a href="/mobil">
                  <img
                    className="logo-1"
                    src="/images/admin/mobil.svg"
                    alt=""
                  />{' '}
                  Mobil
                </a>
              </li>
              <li>
                <a href="/pelanggan">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-2.svg"
                    alt=""
                  />{' '}
                  Pelanggan
                </a>
              </li>
              <li>
                <a href="/penjadwalan">
                  <img
                    className="logo-1"
                    src="/images/admin/penjadwalan.svg"
                    alt=""
                  />{' '}
                  Penjadwalan
                </a>
              </li>
              <li>
                <a href="/laporan" style={{ backgroundColor: 'orangered' }}>
                  <img
                    className="logo-1"
                    src="/images/admin/logo-4.svg"
                    alt=""
                  />{' '}
                  Laporan
                </a>
              </li>
              <div className="logout-admin">
                <li>
                  <a className="logout" href="#" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </aside>
        <main className="main-content" style={{ width: '70%' }}>
          <header className="navbar-admin">
            <div className="navbar-icons">
              <img src="/images/admin/gg_profile.svg" />
            </div>
          </header>
          <section>
            <div
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Detail Pendapatan
                </h3>
              </div>
              <div className="month-selector" style={{ marginBottom: '20px' }}>
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  style={{ marginRight: '10px' }}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select value={selectedMonth} onChange={handleMonthChange}>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div style={chartContainerStyle}>
                <Line data={chartData} options={options} />
              </div>
              <button onClick={generatePDF} style={{ marginTop: '20px' }}>
                Download PDF
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default LaporanPage
