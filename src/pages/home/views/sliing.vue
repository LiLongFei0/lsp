<template>
  <div class="page-bg-content">
    <div class="page-main-content">
      <div class="page-main-body">
        <el-form
          :model="form"
          label-width="80px"
          class="input-dialog-form"
          size="small"
          style="margin-top:20px;"
        >
          <el-form-item label="头像">
            <div class="avatar-uploader">
              <label class="el-upload el-upload--text" for="uploads">
                <img v-if="form.avatar" :src="form.avatar_path" class="avatar" />
                <div v-else class="avatar-uploader-icon">
                  <div class="upload-icon avatar-upload_icon"></div>
                </div>
              </label>
              <input
                type="file"
                id="uploads"
                style="position:absolute; clip:rect(0 0 0 0);"
                accept="image/png, image/jpeg, image/gif, image/jpg"
                @change="uploadImg($event)"
              />
            </div>
          </el-form-item>
        </el-form>
        <div class="save-form-button">
          <el-button size="small" type="primary" :loading="saveLoading" @click="saveUserInfo">保 存</el-button>
        </div>
      </div>
      <el-dialog title="图片裁剪" :visible.sync="dialogCropper" class="avatar-cropper">
        <div>
          <vueCropper
            style="height:320px;"
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputSize"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
            :info="option.info"
            @realTime="realTime"
          ></vueCropper>
          <div style="margin:10px 0px;">头像预览：</div>
          <div
            class="show-preview"
            :style="{'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden'}"
          >
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
          <div
            class="show-preview preview-style_1"
            :style="{'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden'}"
          >
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
          <div
            class="show-preview preview-style_2"
            :style="{'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden'}"
          >
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogCropper = false">取 消</el-button>
          <el-button type="primary" :loading="uploadLoading" @click="finishImg">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";

export default {
  name: "sys_user_center",
  components: {
    VueCropper
  },
  data() {
    return {
      //用户信息编辑
      saveLoading: false,
      form: {
        id: 0,
        type: "",
        name: "",
        sex: "",
        code: "",
        mobile: "",
        nick_name: "",
        avatar: "",
        avatar_path: ""
      },

      //上传图片
      headers: {
        Authorization: "Bearer " + localStorage.getItem("lsp_token")
      },
      accept: "image/*",
      upload_data: {
        upload_type: "formData"
      },

      //上传图片裁剪
      dialogCropper: false,
      uploadLoading: false,
      previews: {},
      option: {
        img: "", //裁剪图片的地址
        size: 1,
        outputSize: "png", //裁剪生成图片的质量
        autoCrop: true,
        autoCropWidth: "180",
        autoCropHeight: "180",
        fixedBox: true,
        info: false
      }
    };
  },
  watch: {
    dialogCropper(val) {
      let vue = this;
      if (!val) {
        vue.cancelUpload();
      }
    }
  },
  methods: {
    //获取用户信息
    async getUserInfo() {
      let vue = this;
      let res = await vue.$api.home.user();
      let data = res.data;
      vue.userInit(data.base);
    },
    //保存用户信息
    async saveUserInfo() {
      let vue = this;
      if (vue.form.mobile.trim() == "") {
        vue.$message({ type: "warning", message: "请输入手机号" });
        return false;
      }
      let params = {
        mobile: vue.form.mobile,
        nick_name: vue.form.nick_name,
        avatar: vue.form.avatar
      };
      vue.saveLoading = true;
      let res = await vue.$api.home.user(params, "put", "personal");
      vue.$message({
        type: res.code == 0 ? "success" : "error",
        message: res.message
      });
      vue.saveLoading = false;
    },
    userInit(val = null) {
      let vue = this;
      vue.form = {
        id: val ? val.user_id : 0,
        type: val ? val.type_name : "",
        name: val ? val.real_name : "",
        sex: val ? val.sex_name : "",
        code: val ? val.user_code : "",
        mobile: val ? val.mobile : "",
        nick_name: val ? val.nick_name : "",
        avatar: val ? val.avatar : "",
        avatar_path: val ? val.avatar_path : ""
      };
    },
    //选择本地图片
    uploadImg(e) {
      var vue = this;
      var file = e.target.files[0];
      if (!/\.(jpg|jpeg|png|bmp|JPG|PNG)$/.test(e.target.value)) {
        vue.$message({
          message: "图片类型必须是jpeg,jpg,png,bmp中的一种",
          type: "warning"
        });
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        //监听图片上传成功事件
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        vue.option.img = data;
        vue.dialogCropper = true;
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // 转化为blob
      //reader.readAsArrayBuffer(file);
    },
    compress(img) {
      //canvas画图 压缩 返回
      let canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        initSize = img.src.length,
        width = img.width,
        height = img.height;
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);
      //进行压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.8);
      return ndata;
    },

    // //上传头像
    finishImg(type) {
      let vue = this;
      let formData = new FormData();
      vue.$refs.cropper.getCropData(data => {
        let img = new Image();
        img.src = data;
        img.onload = function() {
          let data = vue.compress(img);
          vue.uploadLoading = true;
          let params = {
            file: data,
            type: "avatar"
          };
          vue.$api.home.avatarImage(params, "post").then(res => {
            if (res.code == 0) {
              vue.form.avatar_path = res.data.full_path;
              vue.form.avatar = res.data.image_name;
              vue.uploadLoading = false;
              vue.dialogCropper = false;
            } else {
              vue.$message({ type: "error", message: res.message });
            }
          });
        };
      });
    },
    // 取消上传
    cancelUpload() {
      let f = document.getElementById("uploads");
      if (f.value) {
        try {
          f.value = ""; //for IE11, latest Chrome/Firefox/Opera...
        } catch (err) {}
        if (f.value) {
          //for IE5 ~ IE10
          var form = document.createElement("form"),
            ref = f.nextSibling,
            p = f.parentNode;
          form.appendChild(f);
          form.reset();
          p.insertBefore(f, ref);
        }
      }
    },
    realTime(data) {
      //预览
      let vue = this;
      vue.previews = data;
    }
  },
  mounted() {
    let vue = this;
    vue.user = JSON.parse(localStorage.getItem("lsp_user"));
    if (vue.user) {
      vue.getUserInfo();
    } else {
      vue.$message({
        type: "warning",
        message: "未查询到登录信息，请重新登录"
      });
    }
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

/*头像上传*/
.avatar-uploader {
  height: 120px;
}

.avatar-uploader-icon {
  border: 1px dashed #c0ccda;
  background-color: #fbfdff;
  border-radius: 6px;
  cursor: pointer;
  width: 120px;
  height: 120px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.upload-icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-top: 30px;
}

.avatar-uploader-icon:hover {
  border-color: #409eff;
}

.avatar {
  width: 120px;
  height: 120px;
  display: block;
  border-radius: 6px;
  border: 1px solid #c9d9f5;
}

.show-preview {
  display: inline-block;
  border: 1px solid #c9d9f5;
}

.preview-style_1 {
  transform: scale(0.6667);
  position: relative;
  top: 30px;
  border: 2px solid #c9d9f5;
}

.preview-style_2 {
  transform: scale(0.3334);
  position: relative;
  top: 60px;
  left: -60px;
  border: 3px solid #c9d9f5;
}
</style>