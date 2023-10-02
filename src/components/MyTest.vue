<template>
  <div class="container">
    <h1 class="h1">Блоки из городов</h1>
    <div class="row">
      <div v-for="(data, index) in options"
           :key="index"
           class="col-12 col-md-3 col-lg-2">
        <div class="card mb-3">
          <div class="card-body">
            {{ index }}<br>
            <span class="text-muted">{{ data.timezone }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityTimeZones from "@/assets/timezones_russia.json";

export default {
  name: "MyTest",
  data() {
    return {
      options: cityTimeZones,
    };
  },
  methods: {
    log(data) {
      console.log(data)
    }
  },
  computed: {
    paginatedList() {
      return Object.fromEntries(
        Object.entries(this.options).slice(0, 5)
        )
    }
 }
}
</script>

<style scoped>

</style>
