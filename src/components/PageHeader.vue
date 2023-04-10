<template>
  <div
    style="
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
    "
  >
    <div
      style="
        width: 200px;
        padding-left: 30px;
        font-weight: bold;
        color: dodgerblue;
      "
    >
      后台管理
    </div>
    <div style="flex: 1"></div>
    <div style="flex flex-wrap items-center">
      <el-dropdown>
        <el-button type="primary">
          More Actions<el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  name: "PageHeader",
  components: {
    ArrowDown
  }
}
</script>

<style scoped>

</style>