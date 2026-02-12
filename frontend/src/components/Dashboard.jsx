import React, { useState, useEffect } from 'react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { io } from 'socket.io-client'
import MetricGauge from './MetricGauge'
import './Dashboard.css'

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null)
  const [history, setHistory] = useState([])
  const [socket, setSocket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Initialize WebSocket connection
  useEffect(() => {
    const newSocket = io('http://localhost:5000', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    })

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket')
      newSocket.emit('request_metrics')
    })

    newSocket.on('metrics_update', (data) => {
      setMetrics(data)
      setHistory(prev => [...prev, data].slice(-100)) // Keep last 100 entries
    })

    newSocket.on('error', (err) => {
      setError('WebSocket error: ' + err)
    })

    setSocket(newSocket)

    return () => newSocket.disconnect()
  }, [])

  // Fetch initial metrics on mount
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/metrics')
        if (!response.ok) throw new Error('Failed to fetch metrics')
        const data = await response.json()
        setMetrics(data)

        // Fetch historical data
        const historyResponse = await fetch('/api/metrics/history?hours=6')
        if (historyResponse.ok) {
          const historyData = await historyResponse.json()
          setHistory(historyData)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  // Manual collect button
  const handleCollectMetrics = async () => {
    try {
      const response = await fetch('/api/metrics/collect', { method: 'POST' })
      if (!response.ok) throw new Error('Failed to collect metrics')
      const data = await response.json()
      setMetrics(data)
    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) return <div className="dashboard-loading">Loading dashboard...</div>
  if (error) return <div className="dashboard-error">Error: {error}</div>
  if (!metrics) return <div className="dashboard-loading">Waiting for metrics...</div>

  // Prepare data for gauges
  const gaugeData = [
    { label: 'CPU Usage', value: metrics.cpu_usage, unit: '%', color: '#3b82f6' },
    { label: 'Memory Usage', value: metrics.memory_usage, unit: '%', color: '#10b981' },
    { label: 'Disk Usage', value: metrics.disk_usage, unit: '%', color: '#f59e0b' },
  ]

  // Prepare pie chart data for resource distribution
  const resourceData = [
    { name: 'CPU Available', value: 100 - metrics.cpu_usage },
    { name: 'CPU Used', value: metrics.cpu_usage },
  ]

  const COLORS = ['#e5e7eb', '#3b82f6']

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Infrastructure Monitor</h1>
        <p>Real-Time System Metrics Dashboard</p>
        <button onClick={handleCollectMetrics} className="collect-btn">Collect Metrics Now</button>
      </div>

      {/* Metric Gauges */}
      <div className="gauges-container">
        {gaugeData.map(gauge => (
          <MetricGauge key={gauge.label} {...gauge} />
        ))}
      </div>

      {/* Historical Charts */}
      <div className="charts-container">
        
        {/* CPU Usage Over Time */}
        <div className="chart-card">
          <h3>CPU Usage Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={history}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cpu_usage" stroke="#3b82f6" name="CPU (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Memory Usage Over Time */}
        <div className="chart-card">
          <h3>Memory Usage Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={history}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="memory_usage" fill="#10b981" stroke="#059669" name="Memory (%)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Disk Usage Over Time */}
        <div className="chart-card">
          <h3>Disk Usage Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={history}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="disk_usage" fill="#f59e0b" name="Disk (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* CPU Distribution Pie Chart */}
        <div className="chart-card">
          <h3>CPU Resource Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={resourceData} cx="50%" cy="50%" outerRadius={100} label>
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics Summary Table */}
      <div className="summary-container">
        <h3>Current System Status</h3>
        <table className="metrics-table">
          <tbody>
            <tr>
              <td className="label">CPU Usage:</td>
              <td className="value">{metrics.cpu_usage.toFixed(2)}%</td>
            </tr>
            <tr>
              <td className="label">Memory Usage:</td>
              <td className="value">{metrics.memory_usage.toFixed(2)}%</td>
            </tr>
            <tr>
              <td className="label">Disk Usage:</td>
              <td className="value">{metrics.disk_usage.toFixed(2)}%</td>
            </tr>
            <tr>
              <td className="label">Network In:</td>
              <td className="value">{(metrics.network_in / 1024 / 1024).toFixed(2)} MB</td>
            </tr>
            <tr>
              <td className="label">Network Out:</td>
              <td className="value">{(metrics.network_out / 1024 / 1024).toFixed(2)} MB</td>
            </tr>
            <tr>
              <td className="label">Last Updated:</td>
              <td className="value">{new Date(metrics.timestamp).toLocaleTimeString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
