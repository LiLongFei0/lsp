<template>
  <div>
    <h1>编辑器</h1>
    <div id="summernote"></div>

    <el-tree
      ref="tree"
      v-loading="treeLoading"
      :style="{height:treeHeight}"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      :load="getNode"
      lazy
      @check-change="checkChange"
    ></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeLoading: false,
      treeHeight: 200,
      defaultProps: {
        isLeaf: "isLeaf",
        children: "children",
        label: "name",
        id: "id"
      }
    };
  },
  methods: {
    async getNode(node, resolve) {
      let vue = this,
        id = 0;
      if (node.level == 0) {
        vue.treeLoading = true;
      } else if (node.level > 3) {
        resolve([]);
        return false;
      } else {
        id = node.data.id;
      }
      let params = {
        id: id,
        level: node.level + 1
      };
      let res = await vue.$api.consoleSys.org(params);
      let data = res.data.list || [];
      resolve(data);
      vue.treeLoading = false;
    },
    checkChange() {}
  },
  mounted() {
    let vue = this;
    $("#summernote").summernote("code", "");
    vue.$nextTick(() => {
      initSummernote(vue);
    });
  }
};

function initSummernote(vue) {
  $.ajaxSetup({
    headers: {
      Authorization: "Bearer " + localStorage.getItem("lsp_token")
    }
  });
  $("#summernote").html("");
  //$('#summernote').summernote("destroy");
  $("#summernote").summernote({
    lang: "zh-CN",
    dialogsFade: true,
    dialogsInBody: true,
    height: 400,
    callbacks: {
      onImageUpload: function(files) {
        var data = new FormData();
        data.append("files", files[0]);
        $.ajax({
          data: data,
          type: "POST",
          url: vue.$api.consoleSys.uploadImage,
          cache: false,
          contentType: false,
          processData: false,
          success: function(res) {
            if (res.code == 0) {
              $("#summernote").summernote(
                "insertImage",
                res.data.full_path,
                "image"
              );
            } else {
            }
          }
        });
      },
      onPaste: function() {
        $("#summernote").summernote("removeFormat");
      }
    }
  });
  return Promise.resolve();
}
</script>

<style>
</style>
