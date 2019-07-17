<template>
  <div>
    <div id="summernote"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
