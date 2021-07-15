<template>
  <div class="dashboard-container">
    <div>
      <el-tag v-permission="['admin']">admin</el-tag>
      <!-- Editor can see this -->
      <el-tag v-permission="['editor']">editor</el-tag>
    </div>
    <component :is="currentRole" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import permission from '@/directive/permission/index.js' // 权限判断指令

export default {
  name: 'Dashboard',
  directives: { permission },
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
