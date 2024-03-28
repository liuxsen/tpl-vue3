<script lang="ts" setup generic="T extends DataBodyItem">
import { computed, onMounted, ref, toRefs } from 'vue'
import type { Column, DataBodyItem, DataRequest, FormInfo } from './DataItem'
import type { PageInfo } from './PageInfo'
import Value from '~/components/Value/index.vue'

export interface Props<T extends DataBodyItem> {
  autoHeight?: boolean
  columns?: Column[]
  immediate?: boolean
  triggerOnChange?: boolean // 当搜索条件变化，是否触发搜索
  // request: <T>(formInfo: FormInfo) => Promise<DataBody<T>>
  request: DataRequest<T>
}

const props = withDefaults(defineProps<Props<T>>(), {
  autoHeight: true,
  immediate: true,
  triggerOnChange: true,
})
const { columns } = toRefs(props)
const formColumns = computed(() => {
  return columns.value?.filter((item) => {
    return item.hideInSearch !== true
  })
})
const tableColumns = computed(() => {
  return columns.value?.filter((item) => {
    return item.hideInTable !== true
  })
})

const pageInfo = ref<PageInfo>({
  currentPage: 1,
  pageSize: 20,
  total: 0,
})
function handleSizeChange(size: number) {
  pageInfo.value.currentPage = 1
  pageInfo.value.pageSize = size
  onSearch()
}
function handleCurrentChange(pn: number) {
  pageInfo.value.currentPage = pn
  onSearch()
}
function setColumnFormValue(value: any, column: Column) {
  column.formItemProps = {
    ...column.formItemProps,
    value,
  }
}

// search
const loading = ref(false)
const dataList = ref<any[]>([])
function getFormInfo(): FormInfo {
  const search = formColumns.value?.reduce((prev, next) => {
    prev[next.dataIndex] = next.formItemProps.value
    return prev
  }, {})
  return search
}
async function onSearch() {
  if (loading.value) {
    return
  }
  const formInfo = getFormInfo()
  try {
    loading.value = true
    const { data, total } = await props.request(formInfo)
    loading.value = false
    pageInfo.value.total = total
    dataList.value = data
  }
  catch (error) {
    loading.value = false
  }
}
onMounted(() => {
  if (props.immediate) {
    onSearch()
  }
})

function onReset() {
  formColumns.value?.forEach((column) => {
    column.formItemProps.value = ''
  })
  onSearch()
}

function onChange() {
  if (props.triggerOnChange) {
    pageInfo.value.pageSize = 1
    onSearch()
  }
}

defineExpose({
  trigerSearch: onSearch,
})
</script>

<script lang="ts">
export default {
  name: 'VTable',
}
</script>

<template>
  <div class="vex-table-box">
    <div class="form-box">
      <el-card shadow="never">
        <el-form inline>
          <el-form-item v-for="(column) in formColumns" :key="column.dataIndex" :label="column.title">
            <Value
              :name="column.valueType"
              :modelValue="column.formItemProps.value"
              mode="edit"
              v-bind="column.formItemProps"
              clearable
              @update:modelValue="val => setColumnFormValue(val, column)"
              @change="onChange"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="onReset">
              重置
            </el-button>
            <el-button type="primary" @click="onSearch">
              确定
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="vxe-table-box-inner">
      <vxe-table
        :loading="loading"
        :auto-resize="true"
        :resize-config="{ refreshDelay: 33 }"
        :column-config="{ resizable: true, minWidth: '120' }"
        class="vxe-table-box"
        :data="dataList"
        height="auto"
      >
        <!-- <vxe-column type="seq" width="60" /> -->
        <vxe-column
          v-for="(column) in tableColumns"
          :key="column.dataIndex" :title="column.title" :field="column.dataIndex"
        >
          <template #default="{ row }">
            <Value
              :name="column.valueType"
              :modelValue="row[column.dataIndex]"
              mode="read"
              @update:modelValue="val => setColumnFormValue(val, column)"
            />
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <div class="flex flex-right">
      <el-pagination
        v-model:current-page="pageInfo.currentPage"
        v-model:page-size="pageInfo.pageSize"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="less">
.vex-table-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(var(--app-content-inner-height));
  .vxe-table-box-inner {
    height: 0;
    flex: 1;
  }
  .form-box {
    .el-form {
      display: inline-flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .el-form--inline .el-form-item {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
}
</style>
