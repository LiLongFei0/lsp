<template>
  <div>
    <div class="login-header_div">
      <div class="login-bg_div"></div>
    </div>
    <div class="login-body_div" style="text-align: center;">
      <div class="login-box_div">
        <div class="login-box-scan" @click="scan = !scan">
          <img v-show="scan" src="@/assets/img/scan.png" />
          <img v-show="!scan" src="@/assets/img/pc.png" />
        </div>
        <div class="login-box_header">
          <div class="login-header_logo">
            <img :src="`/img/${DM}_logo.png`" />
          </div>
          <div class="login-header_title">
            <div class="ch">{{NAME}}</div>
            <div class="en">Wisdom Logistics Service Platfor</div>
          </div>
        </div>
        <div class="login-box_body" v-if="!scan">
          <el-tabs v-model="activeName" :stretch="true">
            <el-tab-pane label="账号登录" name="code">
              <div style="width:280px;height:180px;">
                <div class="login-body_input input_name">
                  <el-input
                    placeholder="请输入账号"
                    v-model="name"
                    @focus="nameFocus(1)"
                    @blur="nameFocus(0)"
                  >
                    <div slot="prefix" class="login-input_icon login-name"></div>
                  </el-input>
                </div>
                <div class="login-body_input input_pwd">
                  <el-input
                    placeholder="请输入密码"
                    v-model="pwd"
                    show-password
                    @focus="pwdFocus(1)"
                    @blur="pwdFocus(0)"
                    @keyup.enter.native="doLogin(0)"
                  >
                    <div slot="prefix" class="login-input_icon login-pwd"></div>
                  </el-input>
                </div>
                <div class="login-body_but_1">
                  <el-button :loading="loginLoading" type="primary" @click="doLogin(0)">登录</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="CAS登录" name="cas">
              <div style="width:280px;height:180px;">
                <div class="login-body_cas">
                  <div>
                    <img src="@/assets/img/login_cas.png" />
                  </div>
                </div>
                <div class="login-body_but_2">
                  <el-button :loading="loginLoading" type="primary">统一身份（CAS）登录</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="login-box_body" v-if="scan">
          <el-tabs v-model="activeName_2" :stretch="true">
            <el-tab-pane label="APP登录" name="app">
              <div style="width:280px;height:200px;">
                <div class="login-body_qrcode" v-loading="codeLoading">
                  <div id="app_scan"></div>
                </div>
                <div v-if="over_code" class="login-body_qrcode_over">
                  <div class="qrocde-over-text">二维码已失效</div>
                  <el-button
                    class="qrocde-over-but"
                    size="mini"
                    type="primary"
                    @click="getAppScan"
                  >请点击刷新</el-button>
                </div>
                <div v-if="!app" class="login-qrcode_text">打开APP扫码登录</div>
                <div v-if="app" class="login-qrcode_scan">
                  <div class="login-scan_success">
                    <div class="scan_icon login-success"></div>
                    <div>扫描成功</div>
                  </div>
                  <div class="login-scan_text">请在手机上确认登录</div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="微信扫码" name="wx">
              <div style="width:280px;height:200px;">
                <div class="login-body_qrcode" v-loading="codeLoading">
                  <div id="wx_scan"></div>
                </div>
                <div v-if="over_code" class="login-body_qrcode_over">
                  <div class="qrocde-over-text">二维码已失效</div>
                  <el-button
                    class="qrocde-over-but"
                    size="mini"
                    type="primary"
                    @click="getWxScan"
                  >请点击刷新</el-button>
                </div>
                <div v-if="!app" class="login-qrcode_text">打开微信扫码登录</div>
                <div v-if="app" class="login-qrcode_scan">
                  <div class="login-scan_success">
                    <div class="scan_icon login-success"></div>
                    <div>扫描成功</div>
                  </div>
                  <div class="login-scan_text">请在手机上确认登录</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div style="width: 100%;background-color: #2963B2">
      <div class="login-bottom_div">
        <div class="login-bottom_block block_1">
          <div style="margin-left: 40px;">
            <div>
              <a :href="XX_HREF">{{XX}}</a>
            </div>
            <div>
              <a :href="HQ_HREF">{{HQ}}</a>
              &nbsp;&nbsp; / &nbsp;&nbsp;TEL：{{HQ_TEL}}
            </div>
            <div>
              <a href="/">服务大厅</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="/rsp">维修服务</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="/dsp">公寓服务</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="/ssp">服务监督</a>
            </div>
          </div>
        </div>
        <div class="login-bottom_block block_2">
          <div style="margin-left: 80px;">
            <div>版权所有：{{XX}}</div>
            <span>技术支持：河南安库教育科技有限公司</span>
            <div>联系电话：0371-61283098</div>
          </div>
        </div>
        <div class="login-bottom_block block_3" style="text-align: center">
          <div class="login-bottom_qrcode qrcode_1">
            <img src="@/assets/img/app_qrcode.png" />
          </div>
          <div class="login-bottom_qrcode">
            <img src="@/assets/img/mini_qrcode.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login_index",
  data() {
    return {
      activeName: "code",
      name: "",
      pwd: "",
      loginLoading: false,
      url: "",
      path: "",
      XX: process.env.VUE_APP_XX,
      XX_HREF: process.env.VUE_APP_XX_HREF,
      NAME: process.env.VUE_APP_NAME,
      HQ: process.env.VUE_APP_HQ,
      HQ_HREF: process.env.VUE_APP_HQ_HREF,
      HQ_TEL: process.env.VUE_APP_HQ_TEL,
      DM: process.env.VUE_APP_DM,

      codeLoading: false,
      activeName_2: "app",
      bind_id: "",
      scan: false,
      app: false,
      over_time: 0,
      over_code: false,
      time: null
    };
  },
  watch: {
    scan(val) {
      let vue = this;
      if (val) {
        vue.$nextTick(() => {
          vue.getAppScan();
        });
      } else {
        clearInterval(vue.time);
      }
    },
    activeName_2(val) {
      let vue = this;
      vue.$nextTick(() => {
        if (val == "app") {
          vue.getAppScan();
        } else {
          vue.getWxScan();
        }
      });
    }
  },
  methods: {
    async doLogin(val = 0) {
      let vue = this,
        params = null;
      if (val == 0) {
        if (vue.name === "") {
          vue.$message({ type: "warning", message: "请输入账号" });
          return false;
        }
        if (vue.pwd === "") {
          vue.$message({ type: "warning", message: "请输入密码" });
          return false;
        }
        params = {
          userName: vue.name,
          password: vue.pwd
        };
      } else {
        params = {
          type: val,
          bind_key: vue.bind_id
        };
      }
      vue.loginLoading = true;
      let res = await vue.$api.consoleSys.login(params, "post");
      if (res.code == 0) {
        localStorage.setItem("lsp_token", res.data.token);
        localStorage.setItem("lsp_user", JSON.stringify(res.data.user));
        let user = res.data.user;
        if (vue.url == "rsp") {
          window.location.href =
            "http://" + window.location.host + "/" + vue.url + "#" + vue.path;
        } else if (vue.url == "repair") {
          if (user.type == 1) {
            window.location.href =
              "http://" + window.location.host + "/home#/repair";
          } else {
            window.location.href =
              "http://" + window.location.host + "/console#/rsp/repair";
          }
        } else {
          if (user.type == 1) {
            window.location.href = "http://" + window.location.host + "/home";
          } else {
            window.location.href =
              "http://" + window.location.host + "/console";
          }
        }
      } else {
        vue.$message({ type: "error", message: res.message });
      }
      vue.loginLoading = false;
    },
    async getAppScan() {
      let vue = this;
      vue.codeLoading = true;
      let res = await vue.$api.consoleSys.getAppScan();
      let data = res.data;
      vue.bind_id = data.bind_key;
      $("#app_scan").html(data.code);
      vue.codeLoading = false;
      vue.over = 0;
      vue.over_code = false;
      clearInterval(vue.time);
      vue.time = setInterval(function() {
        vue.over++;
        vue.getAppStatus();
        if (vue.over > 10) {
          clearInterval(vue.time);
          vue.over = 0;
          vue.over_code = true;
        }
      }, 1000);
    },
    async getWxScan() {
      let vue = this;
      vue.codeLoading = true;
      let res = await vue.$api.consoleSys.getWxScan();
      let data = res.data;
      vue.bind_id = data.bind_key;
      $("#wx_scan").html(data.code);
      vue.codeLoading = false;
      vue.over = 0;
      vue.over_code = false;
      clearInterval(vue.time);
      vue.time = setInterval(function() {
        vue.over++;
        vue.getWxStatus();
        if (vue.over > 10) {
          clearInterval(vue.time);
          vue.over_code = true;
        }
      }, 1000);
    },
    async getAppStatus() {
      let vue = this;
      let params = {
        bind_id: vue.bind_id
      };
      let res = await vue.$api.consoleSys.getScanStatus(params);
      if (res.code == -5) {
        vue.app = false;
      } else if (res.code == -3) {
        vue.app = true;
      } else if (res.code == 0) {
        vue.doLogin("app_scan");
      }
    },
    async getWxStatus() {
      let vue = this;
      let params = {
        bind_id: vue.bind_id
      };
      let res = await vue.$api.consoleSys.getScanStatus(params);
      if (res.code == -5) {
        vue.app = false;
      } else if (res.code == -3) {
        vue.app = true;
      } else if (res.code == 0) {
        vue.doLogin("wx_scan");
      }
    },
    nameFocus(val) {
      $(".login-name").removeClass("login-name_hover");
      val == 1 && $(".login-name").addClass("login-name_hover");
    },
    pwdFocus(val) {
      $(".login-pwd").removeClass("login-pwd_hover");
      val == 1 && $(".login-pwd").addClass("login-pwd_hover");
    }
  },
  mounted() {
    let vue = this;
    vue.url = vue.$route.query.c || "";
    vue.path = vue.$route.query.p || "";
  }
};
</script>
<style lang="scss" scoped>
.login-header_div {
  width: calc(100vw - 90px);
  height: calc(50vh - 120px);
  background-color: #2663b4;
  padding: 45px 45px 0 45px;
  min-height: 240px;
}

.login-bg_div {
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/login_bg.png) center center no-repeat;
  background-size: 100% 100%;
}

.login-body_div {
  width: 100vw;
  height: calc(50vh - 75px);
  min-height: 285px;
  position: relative;
}

.login-bottom_div {
  width: 1200px;
  height: 150px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  margin: 0 auto;
}

.login-bottom_block {
  width: 400px;
  text-align: left;
  position: relative;
  height: 100px;
  margin-top: 30px;
  float: left;
}

.login-bottom_block div {
  line-height: 30px;
}

.login-bottom_block div a {
  color: white;
  text-decoration: none;
}

.login-bottom_block div a:hover {
  opacity: 0.6;
}

.login-bottom_block:after {
  content: "";
  position: absolute;
  left: auto;
  top: auto;
  bottom: 0px;
  right: -1px;
  height: 100%;
  width: 1px;
  background-color: #0144bb;
}

.login-bottom_block:last-child:after {
  width: 0px;
}

.login-bottom_qrcode {
  width: 100px;
  height: 100px;
  display: inline-block;
}

.qrcode_1 {
  margin-right: 50px;
}

.login-bottom_qrcode img {
  width: 100%;
  height: 100%;
}

.login-box_div {
  width: 360px;
  padding: 20px;
  text-align: center;
  display: inline-block;
  box-shadow: 0px 2px 6px 0px rgba(174, 184, 199, 0.5);
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  top: -210px;
  left: calc(50vw - 200px);
}

.login-box_header {
  border-bottom: 1px solid #c9d9f5;
  padding-bottom: 35px;
}

.login-header_logo {
  height: 50px;
  display: inline-block;
  margin-top: 15px;
}

.login-header_logo img {
  width: 100%;
  height: 100%;
}

.login-header_title {
  margin-top: 15px;
}

.login-header_title .ch {
  font-size: 20px;
  color: #2963b2;
}

.login-header_title .en {
  font-size: 12px;
  color: #2963b2;
}

.login-box_body {
  display: inline-block;
  margin-top: 20px;
}

.login-body_input {
  width: 280px;
  margin-top: 20px;
}

.login-body_but_1 {
  width: 280px;
  margin-top: 25px;
}

.login-body_but_2 {
  width: 280px;
  margin-top: 31px;
}

.login-body_but_1 > button,
.login-body_but_2 > button {
  width: 100%;
}

.login-body_cas {
  margin-top: 30px;
}

.login-body_cas div {
  width: 160px;
  height: 80px;
  display: inline-block;
}

.login-body_cas img {
  width: 100%;
  height: 100%;
}

.login-input_icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  top: 9px;
}

.login-box-scan {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.login-box-scan img {
  width: 100%;
  height: 100%;
}

.login-body_qrcode {
  width: 130px;
  height: 130px;
  background-color: #f3f8ff;
  display: inline-block;
  margin-top: 5px;
}

.login-body_qrcode_over {
  width: 130px;
  height: 130px;
  background-color: #f3f8ff;
  display: inline-block;
  margin-top: 5px;
  position: absolute;
  left: 75px;
  background: rgba(243, 248, 255, 0.95);
}

.qrocde-over-text {
  color: #2f2f3a;
  font-size: 12px;
  line-height: 16px;
  margin-top: 35px;
}

.qrocde-over-but {
  margin-top: 10px;
}

.login-qrcode_text {
  font-size: 14px;
  color: #2963b2;
  margin-top: 10px;
}

.login-scan_success {
  color: #67c23a;
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
}

.login-scan_success div {
  display: inline-block;
}

.scan_icon {
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  top: 2px;
  margin-right: 5px;
}

.login-scan_text {
  color: #67c23a;
  font-size: 16px;
  line-height: 22px;
  margin-top: 5px;
}

#app_scan,
#wx_scan {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-top: 15px;
  display: inline-block;
}
</style>