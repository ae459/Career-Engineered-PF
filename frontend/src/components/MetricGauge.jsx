import React from 'react'
import './MetricGauge.css'

const MetricGauge = ({ label, value, unit, color }) => {
  // Determine gauge color based on value
  let gaugeColor = color
  if (value > 80) gaugeColor = '#ef4444' // Red if critical
  else if (value > 60) gaugeColor = '#f59e0b' // Orange if warning

  // Calculate rotation angle for the gauge needle
  const angle = (value / 100) * 180 - 90

  return (
    <div className="gauge-card">
      <h4>{label}</h4>
      <div className="gauge-container">
        <svg viewBox="0 0 200 120" className="gauge-svg">
          {/* Background arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Colored arc (progress) */}
          <path
            d={`M 30 100 A 70 70 0 0 1 ${30 + 140 * (value / 100)} ${100 - 70 * Math.sin((value / 100) * Math.PI)}`}
            stroke={gaugeColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Needle */}
          <g transform={`translate(100, 100) rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="-55" stroke={gaugeColor} strokeWidth="3" />
            <circle cx="0" cy="0" r="4" fill={gaugeColor} />
          </g>
          {/* Center dot */}
          <circle cx="100" cy="100" r="6" fill={gaugeColor} />
        </svg>
      </div>
      <div className="gauge-value">
        <span className="value-text">{value.toFixed(1)}{unit}</span>
      </div>
    </div>
  )
}

export default MetricGauge
