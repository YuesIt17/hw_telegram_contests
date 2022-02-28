import {TChartLine} from '../../../../utils/prepareData/types'

export type TTelegramChartFooter = {
  data: TChartLine[]
  onChange: (line: TChartLine, isVisible: boolean) => void
}
