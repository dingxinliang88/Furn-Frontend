<template>
  <div>
    <el-menu
      style="width: 200px"
      default-active="2"
      class="el-menu-vertical-demo"
      router="true"
    >
      <el-sub-menu index="1-4">
        <template #title>管理员</template>
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="furn">家具管理</el-menu-item>
        <el-menu-item index="1-4-3">坑位</el-menu-item>
        <el-menu-item index="1-4-4">坑位</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>坑位二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>坑位三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>坑位四</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "PageAside",
};
</script>

<style scoped></style>
