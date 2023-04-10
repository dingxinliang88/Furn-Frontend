<template>
    <div class="home-page">
      <el-page-header @back="handleBack" :content="headerContent"></el-page-header>
      <el-container>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">内容区域</div>
          </el-card>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        headerContent: '主页',
      };
    },
    methods: {
      handleBack() {
        console.log('back');
      },
      handleSelect(index) {
        console.log(index);
      },
    },
  });
  </script>
  
  <style scoped>
  .home-page {
    height: 100%;
    width: 100%;
  }
  
  .el-menu-vertical-demo {
    width: 100%;
  }
  
  .box-card .item {
    padding: 20px;
  }
  </style>
  