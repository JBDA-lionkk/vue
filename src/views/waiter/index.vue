<template>
  <div class="app-container">
    <el-table :data="list" style="width: 100%" height="250">
      <el-table-column fixed prop="createTime" label="创建日期" width="150">
      </el-table-column>
      <el-table-column prop="updateTime" label="修改日期" width="120">
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total = "total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  </div>
</template>

<script>
import {
  fetchList,
  fetchPv,
  createArticle,
  updateArticle,
} from "@/api/article";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: "CN", display_name: "China" },
  { key: "US", display_name: "USA" },
  { key: "JP", display_name: "Japan" },
  { key: "EU", display_name: "Eurozone" },
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

import agination from '@/components/Pagination'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      listLoading: false
    }
  },
  computed: {
    ...mapState("waiter", ["title", "list","total","listQuery"]),
  },
  created() {
    this.fetchData();
  },
  components : {Pagination},
  methods: {
    ...mapActions("waiter", ["fetchData"]),
  }
};
</script>