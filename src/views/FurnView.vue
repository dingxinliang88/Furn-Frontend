<template>
  <div>
    <div style="margin: 10px 0">
      <el-button type="primary" @click="doAdd" round>新增</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-input
        v-model="searchText"
        placeholder="请输入关键字"
        style="width: 30%"
      ></el-input>
      <el-button
        style="margin-left: 10px"
        type="primary"
        @click="listPage"
        round
        >查询</el-button
      >
    </div>
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
    <el-dialog title="提示" v-model="dialogVisible" width="30%">
      <el-form
        v-model="form"
        :rules="rules"
        ref="form"
        label-width="120px"
        show-message="false"
      >
        <el-form-item label="家居名" prop="name">
          <el-input v-model="form.name" style="width: 50%"></el-input>
          {{ validMsg.name }}
        </el-form-item>
        <el-form-item label="厂商" prop="maker">
          <el-input v-model="form.maker" style="width: 50%"></el-input>
          {{ validMsg.maker }}
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="form.price" style="width: 50%"></el-input>
          {{ validMsg.price }}
        </el-form-item>
        <el-form-item label="销量" prop="sales">
          <el-input v-model="form.sales" style="width: 50%"></el-input>
          {{ validMsg.sales }}
        </el-form-item>
        <el-form-item label="库存" prop="stock">
          <el-input v-model="form.stock" style="width: 50%"></el-input>
          {{ validMsg.stock }}
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="doDataChange">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import myAxios from "@/plugins/myAxios";

export default {
  name: "FurnView",
  components: {},
  data() {
    return {
      validMsg: {},
      currentPage: 1,
      pageSize: 5,
      total: 10,
      form: {},
      dialogVisible: false,
      searchText: "",
      tableData: [],
      rules: {
        name: [{ required: true, message: "请输入家居名", trigger: "trigger" }],
        maker: [
          { required: true, message: "请输入称制造商", trigger: "trigger" },
        ],
        price: [
          { required: true, message: "请输入价格", trigger: "trigger" },
          {
            pattern: /^(([1-9]\d*)|(0))(\.\d+)?$/,
            message: "请输入数字",
            trigger: "trigger",
          },
        ],
        sales: [
          { required: true, message: "请输入销量", trigger: "trigger" },
          {
            pattern: /^(([1-9]\d*)|(0))$/,
            message: "请输入数字",
            trigger: "trigger",
          },
        ],
        stock: [
          { required: true, message: "请输入库存", trigger: "trigger" },
          {
            pattern: /^(([1-9]\d*)|(0))$/,
            message: "请输入数字",
            trigger: "trigger",
          },
        ],
      },
    };
  },
  /**
   * 拉取初始数据
   */
  created() {
    this.listPage();
  },
  methods: {
    /**
     * 处理每页显示数据数变化
     * @param {int} pageSize 每页数据数
     */
    handlePageSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.listPage();
    },
    /**
     * 处理页码变化时
     * @param {int} pageNum 页码
     */
    handleCurrentChange(pageNum) {
      this.currentPage = pageNum;
      this.listPage();
    },
    /**
     * 执行删除
     * @param {int} id furn id
     */
    async doDelete(id) {
      const res = await myAxios.delete(`/furn/delete/${id}`);
      if (res) {
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.listPage();
      } else {
        this.$message({
          type: "error",
          message: "删除失败",
        });
      }
    },
    /**
     * 分页查询
     */
    listPage() {
      const queryParams = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        searchText: this.searchText,
      };
      myAxios.post("/furn/list/query", queryParams).then((res) => {
        console.log("res=", res);
        this.tableData = res.records;
        this.total = res.total;
      });
    },
    async doDataChange() {
      // 修改
      if (this.form.id) {
        const res = await myAxios.put("/furn/update", this.form);
        if (res) {
          this.$message({
            type: "success",
            message: "更新成功",
          });
        } else {
          this.$message({
            type: "error",
            message: "更新失败",
          });
        }
        this.listPage();
        this.dialogVisible = false;
      }
      // 添加
      else {
        this.$refs.form.validate((valid) => {
          if (valid) {
            myAxios.post("/furn/save", this.form).then((res) => {
              if (res > 0) {
                this.dialogVisible = false;
                this.listPage();
                this.$message({
                  type: "success",
                  message: "新增成功",
                });
              } else if (res === -1) {
                this.validMsg.name = res.data.name;
                this.validMsg.maker = res.data.maker;
                this.validMsg.price = res.data.price;
                this.validMsg.sales = res.data.sales;
                this.validMsg.stock = res.data.stock;
              }
            });
          } else {
            this.$message({
              type: "error",
              message: "验证没有通过, 不提交",
            });
            return false;
          }
        });
      }
    },
    /**
     * 修改
     * @param {object} row 行数据
     */
    doEdit(row) {
      // 深拷贝，保证数据独立
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;
    },
    /**
     * 新增
     */
    doAdd() {
      this.dialogVisible = true;
      this.doReset();
    },
    /**
     * 重置表单
     */
    doReset() {
      //清空表单数据
      this.form = {};
      //将上次表单验证的信息清空
      this.$refs.form.resetFields();
      //将上次后端返回的校验信息清空
      this.validMsg = {};
    },
  },
};
</script>

<style scoped>
.pageination {
  display: flex;
  justify-content: center;
}
</style>
