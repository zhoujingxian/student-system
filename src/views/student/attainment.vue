<template>
  <div class="attainment">
    <div class="attainment-content">
      <div class="attainment-content-header header">
        <div class="attainment-content-header-year">
          <span>学年：</span>
          <el-input
            placeholder="请输入内容"
            v-model="year"
            type="number"
            size="mini"
            :style="{width: '120px'}"
          >
          </el-input>
          &nbsp;&nbsp;-&nbsp;&nbsp; 
          <el-input
            :placeholder="year - 0 + 1"
            disabled
            size="mini"
            :style="{width: '130px'}"
          >
          </el-input>
        </div>
        <div class="attainment-content-header-semester">
          <span>学期：</span>
          <el-select v-model="semester" placeholder="请选择" size="mini" :style="{width: '120px'}">
            <el-option label="第一学期" value="1">第一学期</el-option>
            <el-option label="第二学期" value="2">第二学期</el-option>
          </el-select>
        </div>
        <el-button
          size="mini"
          :style="{marginLeft: '30px'}"
        >检索</el-button>
      </div>

      <div class="attainment-content-main">
        <h2>学生成绩明细</h2>
        <div class="attainment-content-main-descriptions">
          <el-descriptions>
            <el-descriptions-item label="院(系) / 部">信息工程学院</el-descriptions-item>
            <el-descriptions-item label="行政班级">18软件工程2班</el-descriptions-item>
            <el-descriptions-item label="学号">2018112251</el-descriptions-item>
            <el-descriptions-item label="姓名">周景贤</el-descriptions-item>
            <el-descriptions-item label="学年学期">{{year}}-{{year-0+1}}学年{{semester==='1' ? '第一学期' : '第二学期'}}</el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="attainment-content-main-table">
          <table style="clear:left;width:256mm;font-size:12px;"  >
            <thead>
              <tr>
                <td width="4%">序号</td>
                <td width="37%">课程/环节</td>
                <td width="5%">学分</td>
                <td width="5%">总学时</td>
                <td width="14%">类别</td>
                <td width="7%">修读性质</td>
                <td width="7%">考核方式</td>
                <td width="7%">取得方式</td>
                <td width="7%">成绩</td>
                <td width="7%">备注</td>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td style="text-align: center;">1</td>
                <td>[16ZH113403]Oracle数据库技术与应用</td>
                <td style="text-align: right;">3.0</td>
                <td style="text-align: right;">64</td>
                <td>专业核心课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考试</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">90.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">2</td>
                <td>[16ZT113401]web程序开发</td>
                <td style="text-align: right;">2.0</td>
                <td style="text-align: right;">48</td>
                <td>专业拓展课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考试</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">82.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">3</td>
                <td>[16ZT113402]Xml原理与开发技术</td>
                <td style="text-align: right;">2.0</td>
                <td style="text-align: right;">48</td>
                <td>专业拓展课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考查</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">88.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">4</td>
                <td>[16ZX113402]图形图像处理</td>
                <td style="text-align: right;">2.0</td>
                <td style="text-align: right;">32</td>
                <td>专业课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考查</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">85.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">5</td>
                <td>[16ZH113411]移动小程序开发</td>
                <td style="text-align: right;">3.0</td>
                <td style="text-align: right;">64</td>
                <td>专业核心课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考试</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">92.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">6</td>
                <td>[16ZH113414]软件质量保证</td>
                <td style="text-align: right;">2.0</td>
                <td style="text-align: right;">32</td>
                <td>专业核心课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考试</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">86.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">7</td>
                <td>[19TB000405]毛泽东思想和中国特色社会主义理论体系概论（二）</td>
                <td style="text-align: right;">2.0</td>
                <td style="text-align: right;">32</td>
                <td>通识教育课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考试</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">81.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">8</td>
                <td>[19TB000429]形势与政策（5）</td>
                <td style="text-align: right;">0.5</td>
                <td style="text-align: right;">8</td>
                <td>通识教育课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考查</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">85.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">9</td>
                <td>[16ZX113617]数学建模</td>
                <td style="text-align: right;">2.0</td>
                <td style="text-align: right;">32</td>
                <td>专业课/必修课</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;">考查</td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">83.0</td>
                <td style="text-align: center;"></td>
              </tr>
              
              <tr>
                <td style="text-align: center;">10</td>
                <td>[16ZS110404]复杂工程项目实训一</td>
                <td style="text-align: right;">1.0</td>
                <td style="text-align: right;">0</td>
                <td>其他</td>
                <td style="text-align: center;">初修</td>
                <td style="text-align: center;"></td>
                <td style="text-align: center;">初修取得</td>
                <td style="text-align: right;">良好</td>
                <td style="text-align: center;"></td>
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
  name: 'attainment',
  data() {
    return {
      year: '2021',
      semester: '1'
    }
  }
}
</script>
