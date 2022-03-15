<template>
  <div class="arrangement">
    <h1>我的课程表</h1>
    <div class="arrangement-content">
      <div class="arrangement-content-header header">
        <div class="arrangement-content-header-year">
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
        <div class="arrangement-content-header-semester">
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
      <div class="arrangement-content-main">
        <div class="arrangement-content-main-descriptions">
          <el-descriptions :column="4">
            <el-descriptions-item label="学号">2018112251</el-descriptions-item>
            <el-descriptions-item label="姓名">周景贤</el-descriptions-item>
            <el-descriptions-item label="所在班级">18软件工程2班</el-descriptions-item>
            <el-descriptions-item label="课程门数">9</el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      <div class="arrangement-content-main-table">
        <table class="table" id="mytable" name="mytable">
          <thead></thead>
          <tbody>
            <tr class="H">
              <td class="td0" style="width:5%;padding:0px;" colspan="2"></td>
              
                <td class="td0" style="width:17%;height:20px;">
                星期一
                </td>
              
                <td class="td0" style="width:17%;height:20px;">
                星期二
                </td>
              
                <td class="td0" style="width:17%;height:20px;">
                星期三
                </td>
              
                <td class="td0" style="width:17%;height:20px;">
                星期四
                </td>
              
                <td class="td0" style="width:17%;height:20px;">
                星期五
                </td>
              
            </tr>
            
            
            <tr>
              <td class="td1" rowspan="2" valign="middle">
                <div style="background-color: white; "><b>上<br>午</b></div>
              </td>
              <td class="td1">
                  <b>一</b>
              </td>
              
              
                <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">数据结构与算法</font><br>凌军 <br>1-16[1-2]<br>实习实训楼A楼A201</div>
                
              </td>
              
                <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">概率论与数理统计</font><br>李浩 <br>1-16[1-2]<br>教学楼B楼B108</div>
                
              </td>
              
                <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">数据结构与算法</font><br>凌军 <br>1-16[1-2]<br>实习实训楼A楼A102</div>
                
              </td>
              
                <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">马克思主义基本原理</font><br>李焕 <br>1-16 双 [1-2]<br>教学楼B楼B101</div>
                
              </td>
              
                <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">马克思主义基本原理</font><br>李焕 <br>1-16[1-2]<br>教学楼B楼B203</div>
                
              </td>
              
            </tr>
            

            <tr>
              <td class="td1">
                  <b>
                    二
                  </b>
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">操作系统</font><br>高铭悦 <br>1-16[3-4]<br>实习实训楼A楼A113</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">大学体育（三）</font><br>张炳祥 <br>1-16[3-4]<br></div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">Linux操作系统</font><br>姜飞 <br>1-16[3-4]<br>工科楼B207</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">概率论与数理统计</font><br>李浩 <br>1-16 单 [3-4]<br>教学楼B楼B108</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">创新创业能力拓展</font><br>徐小雪 <br>1-16[3-4]<br>实习实训楼A楼A113</div>
                            
              </td>
              
            </tr>
            
            
            <!-- 
            </tbody>
            <tbody block="block">
            -->
            
            <tr>
              <td class="td1" rowspan="3" valign="middle">
                <div style="background-color: white;"><b>下<br>午</b></div>
              </td>
              <td class="td1">
                  <b>
                    三
                  </b>
              </td>
              
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k13">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">形势与政策（三）</font><br>徐小雪 <br>5-8[5-6]<br>实习实训楼A楼A204</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k33">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k43">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k53">
                  </div>
                            
              </td>
              
            </tr>
            
            <tr>
              <td class="td1">
                  <b>
                    四
                  </b>
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">大学英语（三）</font><br>杨琳琳 <br>1-16[7-8]<br>实习实训楼A楼A201</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">大学英语（三）</font><br>杨琳琳 <br>1-16[7-8]<br>实习实训楼A楼A201</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k34">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">数据结构与算法课程设计</font><br>凌军 <br>1-16[7-8]<br>工科楼B505</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">计算机电路</font><br>王超 <br>9-16[7-8]<br>实习实训楼A楼A104</div>
                            
              </td>
              
            </tr>
            
            <tr>
              <td class="td1">
                  <b>
                    五
                  </b>
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">计算机电路</font><br>王超 <br>9-16[9-10]<br>实习实训楼A楼A201</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">计算机电路</font><br>王超 <br>9-16[9-10]<br>实习实训楼A楼A109</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">计算机电路</font><br>王超 <br>9-16[9-10]<br>实习实训楼A楼A208</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">操作系统</font><br>高铭悦 <br>1-16[9-10]<br>实习实训楼A楼A113</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k55">
                  </div>
                            
              </td>
              
            </tr>
            
            <!-- 
            </tbody>
            <tbody block="block">
            -->
            
            
            <tr>
              <td class="td1" rowspan="1" valign="middle">
                <div style="background-color: white;"><b>晚<br>上</b></div>
              </td>
              <td class="td1">
                  <b>
                    六
                  </b>
              </td>
              
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k16">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k26">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div style="padding-bottom:5px;clear:both;"><font style="font-weight: bolder">人际沟通与公众表达</font><br>徐国庆 <br>1-8[11-12]<br>逸夫楼B楼B105</div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k46">
                  </div>
                            
              </td>
              
              <td class="td" style="width:17%;">
                
                  <div class="div_nokb" id="k56">
                  </div>
                            
              </td>
              
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'arrangement',
  data() {
    return {
      year: '2021',
      semester: '1'
    }
  }
}
</script>
