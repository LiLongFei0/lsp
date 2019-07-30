<template>
  <div class="page-bg-content">
    <el-cascader
      v-if="form.type==1"
      placeholder="请选择用户所属机构"
      class="input-dialog-select"
      size="small"
      v-model="org_ids"
      :options="orgs"
      @active-item-change="handleItemChange"
      :props="cascaderProps"
    ></el-cascader>
  </div>
</template>
<script>
export default {
  name: "sys_user_edit",
  data() {
    return {
      //用户编辑
      saveLoading: false,
      form: {
        id: 0,
        type: "1",
        name: "",
        sex: "1",
        code: "",
        role_id: "",
        mobile: "",
        title: "",
        job: "",
        hire_date: "",
        leave_date: "",
        id_card: "",
        nation: "",
        birthday: "",
        school_year: "",
        leave_year: "",
        is_leave: "0",
        type_id: "",
        remarks: "",
        orgs: []
      },
      //所属机构
      orgs: [],
      org_ids: [],
      cascaderProps: {
        children: "children",
        label: "name",
        value: "id"
      }
    };
  },
  methods: {
    //获取用户信息
    async getUserInfo() {
      let vue = this;
      let params = {
        id: vue.form.id,
        type: vue.form.type
      };
      let res = await vue.$api.consoleSys.user(params, "get", params.id);
      let data = res.data.info;
      data.baseInfo.type == 1
        ? vue.studentInit(params.id, data.more, data.baseInfo)
        : vue.teacherInit(params.id, data.more, data.baseInfo);
      if (data.baseInfo.type == 2) {
        //取出编辑时教师所属机构
        vue.org_ids = data.more.org_id;
      }
    },
    async handleItemChange(val) {
      let vue = this;
      vue.org_ids = val;
      await vue.getOrgList(vue.org_ids);
    },
    async orgChange() {
      let vue = this;
      for (let i = 0, l = vue.form.orgs.length; i < l; i++) {
        vue.org_ids.push(vue.form.orgs[i]);
        if (i != vue.form.orgs.length - 1) {
          await vue.getOrgList(JSON.parse(JSON.stringify(vue.org_ids)));
        }
      }
      //map 同步不起作用
      /*vue.form.orgs.map((v, k) => {
                    vue.org_ids.push(v);
                    if(k != vue.form.orgs.length - 1){
                        vue.getOrgList(JSON.parse(JSON.stringify(vue.org_ids)));
                    }
                })*/
    },
    selChange(val) {
      //教师所属机构选择时
      this.form.orgs = [];
      this.form.orgs.push(val);
    },
    //获取组织机构
    async getOrgList(val = []) {
      let vue = this;
      let params = {
        level: val.length + 1,
        id: val.length > 0 ? val[val.length - 1] : 0
      };
      let res = await vue.$api.consoleSys.org(params);
      if (this.form.type == 2) {
        this.options = res.data.list;
        return false;
      }
      vue.orgs = vue.orgResole(vue.orgs, res.data.list, val, 0);
    },
    orgResole(item, child, val, key) {
      let vue = this;
      if (val.length == key) {
        return child;
      }
      item.map(v => {
        if (v.id == val[key]) {
          v.children = vue.orgResole(v.children, child, val, key + 1);
        }
      });
      return item;
    },

    //保存用户信息
    async saveUserInfo() {
      let vue = this;
      if (vue.form.name.trim() == "") {
        vue.$message({ type: "warning", message: "请输入用户姓名" });
        return false;
      }
      if (vue.form.code.trim() == "") {
        vue.$message({ type: "warning", message: "请输入学/工号" });
        return false;
      }
      if (vue.form.mobile.trim() == "") {
        vue.$message({ type: "warning", message: "请输入手机号" });
        return false;
      }
      if (this.form.type == 1) {
        vue.form.orgs = vue.org_ids;
      }

      if (vue.form.orgs.length == 0) {
        vue.$message({ type: "warning", message: "请选择用户所属机构" });
        return false;
      }
      vue.form.hire_date == "" ||
        (vue.form.hire_date = new Date(vue.form.hire_date).format(
          "yyyy-MM-dd"
        ));
      vue.form.leave_date == "" ||
        (vue.form.leave_date = new Date(vue.form.leave_date).format(
          "yyyy-MM-dd"
        ));
      vue.form.birthday == "" ||
        (vue.form.birthday = new Date(vue.form.birthday).format("yyyy-MM-dd"));
      vue.form.school_year == "" ||
        (vue.form.school_year = new Date(vue.form.school_year).format(
          "yyyy-MM"
        ));
      vue.form.leave_year == "" ||
        (vue.form.leave_year = new Date(vue.form.leave_year).format("yyyy-MM"));
      let params = vue.form;
      vue.saveLoading = true;
      let method = params.id ? "put" : "post";
      let res = await vue.$api.consoleSys.user(params, method);
      vue.$message({
        type: res.code == 0 ? "success" : "error",
        message: res.message
      });
      if (res.code == 0) {
        vue.form.id = res.data.id;
        vue.$router.push(this.path);
      }
      vue.saveLoading = false;
    },
    userInit() {
      let vue = this;
      vue.form = {
        id: 0,
        type: "1",
        name: "",
        sex: "1",
        code: "",
        role_id: "",
        mobile: "",
        title: "",
        job: "",
        hire_date: "",
        leave_date: "",
        id_card: "",
        nation: "",
        birthday: "",
        school_year: "",
        leave_year: "",
        is_leave: "0",
        type_id: "",
        remarks: "",
        orgs: []
      };
      vue.org_ids = [];
    },
    studentInit(id, val, info) {
      let vue = this;
      vue.form = {
        id: id,
        type: "1",
        name: val.name,
        sex: val.sex.toString(),
        code: val.code,
        role_id: parseInt(info.role_id),
        mobile: val.mobile,
        title: "",
        job: "",
        hire_date: "",
        leave_date: "",
        id_card: val.id_card,
        nation: val.nation,
        birthday: val.birthday,
        school_year: "",
        leave_year: "",
        is_leave: val.is_leave.toString(),
        type_id: parseInt(val.type_id),
        remarks: val.remarks,
        orgs: []
      };
      val.school_year == "" ||
        (vue.form.school_year = new Date(
          parseInt(val.school_year) * 1000
        ).format("yyyy-MM"));
      val.leave_year == "" ||
        (vue.form.leave_year = new Date(parseInt(val.leave_year) * 1000).format(
          "yyyy-MM"
        ));
      val.l_department == 0 || vue.form.orgs.push(val.l_department);
      val.l_faculty == 0 || vue.form.orgs.push(val.l_faculty);
      val.l_major == 0 || vue.form.orgs.push(val.l_major);
      val.l_class == 0 || vue.form.orgs.push(val.l_class);
      vue.orgChange();
    },
    teacherInit(id, val, info) {
      let vue = this;
      vue.form = {
        id: id,
        type: "2",
        name: val.name,
        sex: val.sex.toString(),
        code: val.code,
        role_id: parseInt(info.role_id),
        mobile: val.mobile,
        title: val.title,
        job: val.job,
        hire_date: "",
        leave_date: "",
        id_card: "",
        nation: "",
        birthday: "",
        school_year: "",
        leave_year: "",
        is_leave: val.is_leave.toString(),
        type_id: "",
        remarks: "",
        orgs: []
      };
      val.hire_date == "" ||
        (vue.form.hire_date = new Date(parseInt(val.hire_date) * 1000).format(
          "yyyy-MM-dd"
        ));
      val.leave_date == "" ||
        (vue.form.leave_date = new Date(parseInt(val.leave_date) * 1000).format(
          "yyyy-MM-dd"
        ));
      val.l_department == 0 || vue.form.orgs.push(val.l_department);
      val.l_faculty == 0 || vue.form.orgs.push(val.l_faculty);
      val.l_major == 0 || vue.form.orgs.push(val.l_major);
      val.l_class == 0 || vue.form.orgs.push(val.l_class);
      // vue.orgChange();
    }
  },
  mounted() {
    let vue = this;
    vue.form.id = parseInt(vue.$route.query.id) || 0;
    vue.form.type = vue.$route.query.type == 2 ? "2" : "1";
    if (vue.form.type == 2) {
      vue.form.role_id = 2;
    } else {
      vue.form.role_id = 3;
    }

    // vue.getOrgList().then(() => {
    //   !vue.form.id || vue.getUserInfo();
    // });
    this.getOrgList();
    if (this.form.type == 2) {
      this.getOrgList();
    }
    this.path = this.form.type == 1 ? "/sys/userStu" : "/sys/userTea";
  }
};
</script>
<style lang="scss" scoped>
.input-dialog-form {
  width: 600px;
  margin-left: 5%;
}

.save-form-button {
  width: 520px;
  display: inline-block;
  margin-left: 134px;
  margin-top: 20px;
  padding: 15px;
  text-align: center;
}
</style>