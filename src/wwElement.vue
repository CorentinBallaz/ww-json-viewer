<template>
  <div class="app">
    <JsonViewer :value="content.data" :expanded="content.expanded" :expand-depth="content.expand_depth"></JsonViewer>
  </div>
</template>

<script>
import JsonViewer from "vue-json-viewer";
import 'vue-json-viewer/style.css';

export default {
  components: { JsonViewer },
  props: {
    content: { type: Object, required: true },
  },
}
</script>