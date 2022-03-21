<template>
  <div class="set-attainment">
    <h1>班级信息</h1>
    <div class="set-attainment-content main-padding">
      <div class="set-attainment-content-header header">
        <div class="set-attainment-content-header-class">
          <span>班级：</span>
          <el-select v-model="banji" placeholder="请选择" size="mini" :style="{width: '120px'}">
            <el-option label="第一学期" value="1">第一学期</el-option>
            <el-option label="第二学期" value="2">第二学期</el-option>
          </el-select>
        </div>
        <div class="set-attainment-content-header-set">
          <span>是否编辑：</span>
          <el-switch
            v-model="set"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </div>
      </div>
      <div class="set-attainment-content-main">
        <div class="set-attainment-content-main-table table-content">
          <table style="clear:left;width:256mm;font-size:12px;"  >
            <thead>
              <tr>
                <td style="width: 10%;">学号</td>
                <td style="width: 10%;">姓名</td>
                <td style="width: 30%;">课程 / 环节</td>
                <td style="width: 10%;">学分</td>
                <td style="width: 10%;">总学时</td>
                <td style="width: 10%;">类别</td>
                <td style="width: 10%;">成绩</td>
                <td style="width: 10%;">备注</td>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>学号</td>
                <td>姓名</td>
                <td>性别</td>
                <td>性别</td>
                <td>性别</td>
                <td>性别</td>
                <td style="padding: 5px 5px">
                  <el-input v-model="input" size="mini" style="width: 100px; background: #fff;" :disabled="!set" ></el-input>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div class="set-attainment-content-main-table-submit">

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      set: false,
      banji: ''
    }
  }
}
</script>