<script lang="ts" setup>
</script>

<script lang="ts">
export default {
  name: 'Home',
}
</script>

<template>
  <div class="m-1">
    <i class="ri-admin-line" />
    <i class="ri-admin-fill" />
    <el-space direction="vertical" alignment="left">
      <el-card shadow="never">
        中午好 test，忙碌了一上午，记得吃午饭哦。

        最近更新：🎉 Vue Admin Plus 累计完成6种布局、9种主题，覆盖绝大多数业务场景。 📦 update️： vue v3.x最新版本； element-plus最新版本； 横向布局重构； 语音合成demo； vscode代码智能提醒 v1.2.0； 组件按需自动导入。 315特惠，Max版本买1得4，Plus版本买1得2： 点我购买
      </el-card>
      <el-row :gutter="10">
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-card shadow="never">
            <template #header>
              Yummy hamburger
            </template>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            >
          </el-card>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-card shadow="never">
            <template #header>
              Yummy hamburger
            </template>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            >
          </el-card>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-card shadow="never">
            <template #header>
              Yummy hamburger
            </template>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            >
          </el-card>
        </el-col>
      </el-row>
    </el-space>
  </div>
</template>
