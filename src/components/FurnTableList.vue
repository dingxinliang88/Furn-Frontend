<template>
  <div>
    <el-table :data="tableData" stripe style="width: 90%">
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="name" label="家居名"> </el-table-column>
      <el-table-column prop="maker" label="厂家"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="sales" label="销量"> </el-table-column>
      <el-table-column prop="stock" label="库存"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="170px">
        <template #default="scope">
          <el-button @click="doEdit(scope.row)" type="primary">编辑</el-button>
          <el-divider direction="vertical" />
          <el-popconfirm title="确定删除吗？" @confirm="doDelete(scope.row.id)">
            <template #reference>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin: 10px 0" class="pageination">
      <el-pagination
        @size-change="handlePageSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: this.tableData,
    };
  },
  props: [tableData],
  name: "FurnTableList",
};
</script>

<style scoped></style>
