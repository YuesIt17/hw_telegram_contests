import React from 'react'
import {ChartCheckBox} from '../../../../components/ChartCheckBox'
import {useStyles} from './styles'
import {TTelegramChartFooter} from './types'

export const TelegramChartFooter = ({data, onChange}: TTelegramChartFooter) => {
  const styles = useStyles()

  if (!data) return null
  return (
    <div style={styles.footer}>
      {data.map((line) => (
        <ChartCheckBox
          key={line.name}
          name={line.name}
          value={line.isVisible || false}
          color={line.color}
          onChange={(field) => onChange(line, field.value)}
        />
      ))}
    </div>
  )
}
