<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData:
        "<h3>Hello World!</h3><h5><b>This is a simple editable area.</b></h5>",
      content: "<h1>Some initial content</h1>",
      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" },
        ],
      },
    };
  },
  components: {
    Layout,
    ckeditor: CKEditor.component,
  },
};
</script>

<template>
  <Layout :pagetitle="'Form Editors'">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Ckeditor Classic Editor</h4>
            <a
              href="https://www.npmjs.com/package/@ckeditor/ckeditor5-vue"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <div class="card-body">
            <!-- Editor -->
            <ckeditor v-model="editorData" :editor="editor"></ckeditor>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>