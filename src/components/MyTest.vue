<template>
  <div>
    <h1 class="page-title">Выберите ваш город</h1>

    <div class="multiselect">
      <multiselect
        v-model="value"
        :options="options"
        :searchable="true"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Pick a value"
      >
      </multiselect>
      <div class="select-result" ref="selected">Ваш город: {{ value }}</div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import cityTimeZones from "@/assets/timezones_russia.json";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "MyTest",
  components: {
    Multiselect,
  },
  data() {
    return {
      value: "",
      options: [cityTimeZones],
    };
  },

  methods: {
    ///
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
body {
  margin: 24px;
}
.page-title {
  text-align: center;
  margin-top: 24px;
}
.select-result {
  text-align: center;
  font-size: 24px;
  margin-top: 24px;
}
.multiselect {
  margin: auto;
  width: 25em;
  height: 2em;
  margin-top: 24px;
}
</style>
