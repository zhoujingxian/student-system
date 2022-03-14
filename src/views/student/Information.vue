<template>
  <div class="information">
    <h1>基本信息</h1>
    <div class="table">
      <table id="tablesid" cellpadding="0" cellspacing="0" align="center" style="border: 1px solid rgb(229, 229, 229);">
				<thead>
					<tr class="H">
						<td colspan="6">
							&ensp;
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="width: 15%; border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								学&ensp;&ensp;&ensp;&ensp;号
							</div>
						</td>
						<td id="xh" style="width: 14%; border: 1px solid rgb(229, 229, 229);">2018112251</td>
						<td style="width: 15%; border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								姓&ensp;&ensp;&ensp;&ensp;名
							</div>
						</td>
						<td id="xm" colspan="2" style="border: 1px solid rgb(229, 229, 229);">周景贤</td>
						<td rowspan="6" style="overflow: hidden; vertical-align: middle; border: 1px solid rgb(229, 229, 229);">
							<table style="float:clear" width="100%" height="100%">
								<tbody><tr>
									<td style="border:none;width:33%;text-align:center;">
										
									</td>
									<td style="border:0;width:33%;text-align:center;">
										
									</td>
									<td style="border:0;width:33%;text-align:center;">
										
									</td>
								</tr>
								<tr>
									<td style="text-align:center;">
										<label>高考招生照片</label>
									</td>
									<td style="text-align:center;">
										<label>入学后照片</label>
									</td>
									<td style="text-align:center;">
										<label>毕业照片</label>
									</td>
								</tr>
								<tr class="sfzzp" hidden="">
									<td colspan="3">
									
									</td>
								</tr>
								<tr class="sfzzp" hidden="">
									<td height="20px" colspan="3">
										<label style="margin-left:20px;">身份证照片（正面）</label>
										<label style="margin-left:40px;">身份证照片（背面）</label>
									</td>
								</tr>
								<tr>
									<td colspan="3" style="text-align:center;margin-top:-10px"><a id="sfzzpA" onclick="showSfzzp()">查看身份证照片</a></td>
								</tr>																			
							</tbody></table>
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								曾 用 名
							</div>
						</td>
						<td id="cym" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								姓名拼音(英文名)
							</div>
						</td>
						<td id="ywm" colspan="2" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								性&ensp;&ensp;&ensp;&ensp;别
							</div>
						</td>
						<td id="xb" style="border: 1px solid rgb(229, 229, 229);">男</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								身份证号
							</div>
						</td>
						<td id="sfzh" colspan="2" style="border: 1px solid rgb(229, 229, 229);">342522200003023614</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								出生日期
							</div>
						</td>
						<td id="csrq" style="border: 1px solid rgb(229, 229, 229);">2000-03-02</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								民&ensp;&ensp;&ensp;&ensp;族
							</div>
						</td>
						<td id="mz" colspan="2" style="border: 1px solid rgb(229, 229, 229);">汉族</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								籍&ensp;&ensp;&ensp;&ensp;贯
							</div>
						</td>
						<td id="jg" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								政治面貌
							</div>
						</td>
						<td id="zzmm" colspan="2" style="border: 1px solid rgb(229, 229, 229);">共青团员</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入团时间
							</div>
						</td>
						<td id="rtsj" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								出 生 地
							</div>
						</td>
						<td id="csd" colspan="2" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								户籍类别
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								宿 舍 号
							</div>
						</td>
						<td id="ss_mc" style="width: 13%; border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="width: 12%; border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								宿舍电话
							</div>
						</td>
						<td id="ssdh" style="width: 25%; border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								港澳台代码
							</div>
						</td>
						<td id="gat" style="border: 1px solid rgb(229, 229, 229);"></td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								联 系 人
							</div>
						</td>
						<td id="lxr" style="border: 1px solid rgb(229, 229, 229);">周景贤</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								邮政编码
							</div>
						</td>
						<td id="yzbm" style="border: 1px solid rgb(229, 229, 229);">241100</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								档案行号
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								联系地址
							</div>
						</td>
						<td id="txdz" colspan="3" style="border: 1px solid rgb(229, 229, 229);">安徽省芜湖市芜湖县京师实验学校高三（四）班</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								档案页号
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								联系电话
							</div>
						</td>
						<td id="dh" colspan="3" style="border: 1px solid rgb(229, 229, 229);">13966191522</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								招生季节
							</div>
						</td>
						<td id="zsjj" style="border: 1px solid rgb(229, 229, 229);">秋季</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								电子邮箱
							</div>
						</td>
						<td id="dzyx" colspan="3" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								准考证号
							</div>
						</td>
						<td id="gkzkzh" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								考 生 号
							</div>
						</td>
						<td id="gkksh" style="border: 1px solid rgb(229, 229, 229);">18340221110121</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								考生类别
							</div>
						</td>
						<td id="kslb" style="border: 1px solid rgb(229, 229, 229);">农村应届</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								健康状况
							</div>
						</td>
						<td id="jkzk" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								考生特征
							</div>
						</td>
						<td colspan="3" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入学文化程度
							</div>
						</td>
						<td id="whcd" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								生源省份
							</div>
						</td>
						<td id="sysf" colspan="3" style="border: 1px solid rgb(229, 229, 229);">安徽省</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								毕业类别
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								生源地区
							</div>
						</td>
						<td id="syd" colspan="3" style="border: 1px solid rgb(229, 229, 229);">芜湖县</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								科类代码
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
	
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								毕业中学
							</div>
						</td>
						<td id="sydw" colspan="3" style="border: 1px solid rgb(229, 229, 229);">芜湖京师实验学校</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入学前学历
							</div>
						</td>
						<td id="rxqxl" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								户口性质
							</div>
						</td>
						<td id="hkxz" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								是否家庭困难
							</div>
						</td>
						<td id="sfpk" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								家庭困难类型
							</div>
						</td>
						<td id="jtpklx" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								资助申请类型
							</div>
						</td>
						<td id="zzsqlx" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								家庭年总收入（元）
							</div>
						</td>
						<td id="nzsr" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								家庭人均收入（元）
							</div>
						</td>
						<td id="rjsr" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								家庭经济来源
							</div>
						</td>
						<td id="srly" colspan="3" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入学成绩
							</div>
						</td>
						<td id="whcj" style="border: 1px solid rgb(229, 229, 229);">264</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								获知学校信息途径
							</div>
						</td>
						<td id="hztj" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								特&ensp;&ensp;&ensp;&ensp;长
							</div>
						</td>
						<td id="kstc" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入学时间
							</div>
						</td>
						<td id="bdtime" style="border: 1px solid rgb(229, 229, 229);">2018-07-19</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								录取专业
							</div>
						</td>
						<td id="lqzy" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								学&ensp;&ensp;&ensp;&ensp;制
							</div>
						</td>
						<td id="xz" style="border: 1px solid rgb(229, 229, 229);">4</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入学年份
							</div>
						</td>
						<td id="rxnj" style="border: 1px solid rgb(229, 229, 229);">2018</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								入学方式
							</div>
						</td>
						<td id="rxfs" style="border: 1px solid rgb(229, 229, 229);">普通入学</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								学习形式
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								培养类别
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								培养对象
							</div>
						</td>
						<td id="pydx" style="border: 1px solid rgb(229, 229, 229);">01</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								培养层次
							</div>
						</td>
						<td id="pycc" style="border: 1px solid rgb(229, 229, 229);">本科</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								办学类别
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								办学形式
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								学习年限
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								其它办学形式
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								主修外语语种
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								主修外语级别
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								院(系)/部
							</div>
						</td>
						<td id="yxb" style="border: 1px solid rgb(229, 229, 229);">信息工程学院</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								行政班级
							</div>
						</td>
						<td id="bjmc" style="border: 1px solid rgb(229, 229, 229);">18软件工程2（对口）</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								专业方向
							</div>
						</td>
						<td id="zyfxmc" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								主修计算机能力等级
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								辅导员
							</div>
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								辅修专业
							</div>
						</td>
						<td id="fxzy" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
					<tr>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								辅修年级
							</div>
						</td>
						<td id="fxnj" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
						<td style="border: 1px solid rgb(229, 229, 229);">
							<div align="center">
								备&ensp;&ensp;&ensp;&ensp;注
							</div>
						</td>
						<td id="p" colspan="3" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr class="H">
						<td colspan="6" style="border: 1px solid rgb(229, 229, 229);">
							&ensp;
						</td>
					</tr>
				</tfoot>
			</table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

