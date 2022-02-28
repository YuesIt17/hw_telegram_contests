import {TChartLabel} from '../../utils/prepareData/types'

export type TChartAxis = {
  points: string
  typeAxis: 'x' | 'y'
  labels: TChartLabel[]
  labelPaddingX?: number
  labelPaddingY?: number
  maxDataX?: number
}
