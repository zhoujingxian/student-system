<template>
  <div class="put-infomation">
    <h1>增改个人信息</h1>
    <div class="put-info">
      <el-form ref="form" :model="form" label-width="80px" class="put-info-form">
        <el-form-item label="学号">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
       <el-form-item label="姓名">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="曾用名">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="籍贯">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="政治面貌">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="出生地">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
      </el-form>
      <div class="put-info-form-submit">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
