<template>
  <div>
    <h1 class="page-title">Выберите ваш город</h1>

    <div class="select">
      <select
        v-model="value"
        :searchable="true"
        :close-on-select="false"
        :show-labels="false"
        placeholder="Pick a value"
      >
        <option
          v-for="(data, index) in options"
          :key="data.id"
          class="optionStyle"
        >
          "{{ index }}" ({{ data.timezone }})
        </option>
      </select>
      <div class="select-result" ref="selected">Ваш город: {{ value }}</div>
    </div>
  </div>
</template>

<script>
import cityTimeZones from "@/assets/timezones_russia.json";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "MyTest",
  data() {
    return {
      value: "",
      options: cityTimeZones,
    };
  },
};
</script>

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

select {
  margin: auto;
  padding-left: 12px;
  width: 30em;
  height: 3em;
  display: block;
  border: 1px solid lightgrey;
  margin-top: 24px;
}
</style>
