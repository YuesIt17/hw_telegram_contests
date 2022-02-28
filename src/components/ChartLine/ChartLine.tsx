import React from 'react'
import {TChartLine} from './types'

export default function ChartLine({
  points,
  fill = 'none',
  stroke = '#0074d9',
  isVisible = true,
}: TChartLine) {
  if (!isVisible) return null
  return <polyline fill={fill} stroke={stroke} points={points} />
}
