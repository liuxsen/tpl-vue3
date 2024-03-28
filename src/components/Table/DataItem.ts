export interface DataRule {
  required: boolean
  message: string
}

// TODO: 类型提示
export type FormItemProps = {
  rules: DataRule[]
} & any

export type ValueType = 'password' |
'money' |
'textarea' |
'date' | // 日期
'dateTime' | // 日期时间
'dateWeek' |
'dateMonth' |
'dateQuarter' |
'dateRange' |
'dateTimeRange' |
'time' |
'text' |
'input' |
'select' |
'checkbox' |
'rate' |
'radio' |
'radioButton' |
'progress' |
'percent' |
'digit' |
'second' |
'avatar' |
'code' |
'switch' |
'fromNow' |
'image' |
'jsonCode' |
'color' |
'jsonCode' |
'cascader' |
'segmented' |
'group' |
'formList' |
'divider' |
'enum' |
'dependency'
// | ((item: Column) => any)

// 表格渲染结构
export interface Column {
  title: string
  dataIndex: string
  copyable?: boolean
  ellipsis?: boolean
  tooltip?: string
  colSize?: number // 一个表单
  hideInSearch?: boolean // 在查询表单中不展示此项
  hideInTable?: boolean // 在 Table 中不展示此列
  valueType: ValueType
  formItemProps?: FormItemProps
}

// form表单结构
export type FormInfo = any

// 每一项结构
export interface DataBodyItem {
  id: number | string
}

// 请求返回结构
export interface DataBody<T> {
  data: T[]
  total: number
}

// 表格请求函数
export type DataRequest<T extends DataBodyItem> = (info: FormInfo) => Promise<DataBody<T>>
