<template>
  <div class="teacher-list">
    <h1>教师信息</h1>
    <div class="teacher-list-content main-padding">
      <div class="teacher-list-content-header header">
        <span>班级：</span>
        <el-select v-model="semester" placeholder="请选择" size="mini" :style="{width: '120px'}">
          <el-option label="第一学期" value="1">第一学期</el-option>
          <el-option label="第二学期" value="2">第二学期</el-option>
        </el-select>
      </div>
      <div class="teacher-list-content-main">
        <div class="teacher-list-content-main-table table-content">
            <table style="clear:left;width:256mm;font-size:12px;"  >
              <thead>
                <tr>
                  <td>工号</td>
                  <td>姓名</td>
                  <td>性别</td>
                  <td>籍贯</td>
                  <td>民族</td>
                  <td>政治面貌</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>学号</td>
                  <td>姓名</td>
                  <td>性别</td>
                  <td>籍贯</td>
                  <td>民族</td>
                  <td>政治面貌</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  
}
</script>