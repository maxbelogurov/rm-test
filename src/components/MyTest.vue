<template>
  <div class="container">
    <h1 class="h1 text-center mt-4 mb-4">Блоки из городов</h1>
    <div class="row">
      <div v-for="(data, index) in allCities"
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
import { mapGetters } from "vuex";
export default {
  name: "MyTest",
  computed: mapGetters(['allCities'])
}
</script>

<style scoped>

</style>
