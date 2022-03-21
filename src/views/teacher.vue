<template>
  <div class="teacher">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-menu
            class="el-menu-vertical-demo"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <span class="menu-title">教师信息</span>
              </template>
              <el-menu-item index="/teacher/information">基本信息</el-menu-item>
              <el-menu-item index="/teacher/put-information">增改个人信息</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span class="menu-title">班级学生信息</span>
              </template>
              <el-menu-item index="/teacher/class-info">查看信息</el-menu-item>
            </el-submenu>
            
            <el-submenu index="3">
              <template slot="title">
                <span class="menu-title">班级成绩</span>
              </template>
              <el-menu-item index="/teacher/set-attainment">成绩录入</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span class="menu-title">教学安排</span>
              </template>
              <el-menu-item index="/teacher/required">课程安排</el-menu-item>
              <!-- <el-menu-item index="/teacher/elective">选修课程</el-menu-item> -->
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light">
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

</script>
