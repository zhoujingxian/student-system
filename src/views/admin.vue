<template>
  <div class="admin">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-menu
            class="el-menu-vertical-demo"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <span class="menu-title">管理员信息</span>
              </template>
              <el-menu-item index="/admin/information">基本信息</el-menu-item>
              <!-- <el-menu-item index="/admin/put-information">增改个人信息</el-menu-item> -->
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span class="menu-title">教师信息</span>
              </template>
              <el-menu-item index="/admin/teacher-list">教师列表</el-menu-item>
              <el-menu-item index="/admin/teacher-add">新增教师</el-menu-item>
            </el-submenu>
            
            <el-submenu index="3">
              <template slot="title">
                <span class="menu-title">学生信息</span>
              </template>
              <el-menu-item index="/admin/student-list">学生列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span class="menu-title">学生成绩</span>
              </template>
              <el-menu-item index="/admin/student-record">成绩查询</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="19"><div class="grid-content bg-purple-light">

        <router-view />

      </div></el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'admin',
  components: {
    
  }
}
</script>
