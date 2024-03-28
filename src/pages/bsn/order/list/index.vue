<script lang="ts" setup>
import { ref } from 'vue'
import VTable from '~/components/Table/index.vue'
import type { Column, DataBody, FormInfo } from '~/components/Table/DataItem'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
])
const columns = ref<Column[]>([
  {
    title: '表格展示1',
    dataIndex: 'name',
    valueType: 'text',
    hideInSearch: true,
    formItemProps: { value: 'bbb', className: 'ri-add-box-line' },
  },
  {
    title: '日期',
    dataIndex: 'time',
    valueType: 'date',
    formItemProps: { value: '2024-02-11 22:22:22' },
  },
  {
    title: '日期间隔',
    dataIndex: 'aaaaa',
    valueType: 'date',
    formItemProps: { format: 'YYYY-MM', valueFormat: 'YYYY-MM-DD HH:mm', type: 'daterange' },
  },
  {
    title: '日期时间',
    dataIndex: 'baaa',
    valueType: 'date',
    formItemProps: { format: 'YYYY-MM-DD HH:mm', valueFormat: 'YYYY-MM-DD', type: 'datetime' },
  },
  {
    title: '日期时间段',
    dataIndex: 'baaac',
    valueType: 'date',
    formItemProps: { format: 'YYYY-MM-DD HH:mm:ss', valueFormat: 'YYYY-MM-DD HH:mm:ss', type: 'datetimerange' },
  },
  { title: '都有', dataIndex: 'text', valueType: 'input', formItemProps: { value: 'aaa' } },
])
interface OrderItem {
  id: number
  name: string
  time: Date
  text: string
  baaac: string[]
}

function onRequest(info: FormInfo): Promise<DataBody<OrderItem>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Array.from({ length: 1000 }).fill('').map(() => {
          return {
            id: 1,
            name: 'aa',
            time: new Date(),
            text: '22',
            baaac: ['2024-02-11 22:22:22', '2024-02-11 22:22:22'],
          }
        }),
        total: 1,
      })
    }, 300)
  })
}
</script>

<script lang="ts">
export default {
  name: 'OrderList',
}
</script>

<template>
  <VTable :columns="columns" :data="tableData" :request="onRequest" />
</template>
