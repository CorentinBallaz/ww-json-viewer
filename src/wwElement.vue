<template>
  <div class="app">
    <json-viewer :value="jsonData"></json-viewer>
  </div>
</template>

<script>
import { JsonViewer } from "vue-json-viewer";
import 'vue-json-viewer/style.css';

export default {
  components: { JsonViewer },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    jsonData() {
      return {
          total: 25,
          limit: 10,
          skip: 0,
          links: {
            previous: undefined,
            next: function () {},
          },
          data: this.content.data,
        };     
      },
    },
  }
</script>


<style scoped>

</style>