export type Mode = 'read' | 'edit'

export interface CommonProps {
  mode: Mode
}

export type DateFormat = 'YYYY' | 'MM' | 'DD' | 'HH' | 'mm' | 'ss' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD HH:mm:ss'
export type DateType = 'date'
| 'daterange'
| 'datetime'
| 'datetimerange'
| 'week'
| 'month'
| 'year'
| 'dates'
