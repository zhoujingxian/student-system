<template>
  <div class="home">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-menu
            class="el-menu-vertical-demo"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <span class="menu-title">学生信息</span>
              </template>
              <el-menu-item index="information">基本信息</el-menu-item>
              <el-menu-item index="put-information">增改个人信息</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span class="menu-title">学业成绩</span>
              </template>
              <el-menu-item index="attainment">查看成绩</el-menu-item>
            </el-submenu>
            
            <el-submenu index="3">
              <template slot="title">
                <span class="menu-title">教学安排</span>
              </template>
              <el-menu-item index="arrangement">我的课表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span class="menu-title">网上选课</span>
              </template>
              <el-menu-item index="variable">预选</el-menu-item>
              <el-menu-item index="variable-results">选课结果</el-menu-item>
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
  name: 'Home',
  components: {
    
  }
}
</script>
