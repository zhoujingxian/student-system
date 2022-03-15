<template>
  <div class="variable">
    <h1>预选</h1>
    <div class="variable-content">
      <div class="variable-content-header header">
        <div class="variable-content-header-scope">
          <span>课程范围 </span>
          <el-select v-model="value" placeholder="请选择" size="mini" :style="{width: '140px'}">
            <el-option
              label="主修(公共任选)"
              value="1"

            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="variable-content-main">
        <div class="variable-content-main-table">
          <table style="clear:left;width:256mm;font-size:12px;"  >
            <thead>
              <tr class="H tablesorter-headerRow" style="POSITION: relative" role="row"><td width="4%" id="head_xd" data-column="0" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="选定: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">选定</div></td><td width="25%" id="head_kc" data-column="1" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="课程: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">课程</div></td><td width="5%" id="head_xf" data-column="2" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="学分: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">学分</div></td><td width="20%" id="head_lb" data-column="3" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="类别: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">类别</div></td><td width="8%" id="head_khfs_mc" data-column="4" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="考核方式: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">考核方式</div></td><td width="18%" id="head_rkjs" data-column="5" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="任课教师: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">任课教师</div></td><td width="5%" id="head_yxtj" data-column="6" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="允许调剂: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">允许<br>调剂</div></td><td width="5%" id="head_xyrs" data-column="7" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="限选人数: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">限选<br>人数</div></td><td width="5%" id="head_yxrs" data-column="8" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="已选人数: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">已选<br>人数</div></td><td width="5%" id="head_kxrs" data-column="9" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label="可选人数: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">可选<br>人数</div></td><td style="display: none; user-select: none;" id="head_kclb1_m" data-column="10" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label=": No sort applied, activate to apply an ascending sort"><div class="tablesorter-header-inner"></div></td><td style="display: none; user-select: none;" id="head_kclb2_m" data-column="11" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label=": No sort applied, activate to apply an ascending sort"><div class="tablesorter-header-inner"></div></td><td style="display: none; user-select: none;" id="head_kcdm" data-column="12" class="tablesorter-header tablesorter-headerUnSorted" tabindex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="keywords" unselectable="on" aria-sort="none" aria-label=": No sort applied, activate to apply an ascending sort"><div class="tablesorter-header-inner"></div></td></tr>
            </thead>
            <tr class="O" id="tr0" role="row"><td id="tr0_xd" name="xd" align="center"><input type="checkbox"></td><td id="tr0_kc" name="kc" align="left" title="[GX-EY-1702]《理想国》导读">[GX-EY-1702]《理想国》导读</td><td id="tr0_xf" name="xf" align="right" title="2.0">2.0</td><td id="tr0_lb" name="lb" align="center" title="人文社会科学（模块B）/理论课">人文社会科学（模块B）/理论课</td><td id="tr0_khfs_mc" name="khfs_mc" align="center" title="考查">考查</td><td id="tr0_rkjs" name="rkjs" align="center"><select style="width:85%;"><option value="">[000000]未设置任课老师</option></select></td><td id="tr0_yxtj" name="yxtj" align="center"><input type="checkbox" checked=""></td><td id="tr0_xyrs" name="xyrs" align="right" title="100">100</td><td id="tr0_yxrs" name="yxrs" align="right" title="100">100</td><td id="tr0_kxrs" name="kxrs" align="right" title="0">0</td><td id="tr0_kclb1_m" name="kclb1_m" style="display:none;" title="13">13</td><td id="tr0_kclb2_m" name="kclb2_m" style="display:none;" title="01">01</td><td id="tr0_kcdm" name="kcdm" style="display:none;" title="000407,00,28,0,0,0,03,01,02,0">000407,00,28,0,0,0,03,01,02,0</td></tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'variable',
  data() {
    return {
      value: '1'
    }
  }
}
</script>
