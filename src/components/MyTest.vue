<template>
  <div>
    <h1 class="page-title">Блоки из городов</h1>

    <div class="block-cards">
      <div 
        v-for="(data, index) in paginatedList" 
        :key="data.id"  
        :load="log(data)"
      >
            {{ index }} 
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
    paginatedList(){
      return Object.fromEntries(
        Object.entries(this.options).slice(0, 5)
        )
    }
 }
}
</script>

<style scoped>
body {
  margin: 24px;
}
.page-title {
  text-align: center;
  margin-top: 24px;
}
.block-cards {
  width:150px;
  margin: 24px;
  padding: 24px;
  border: 2px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;}
</style>
