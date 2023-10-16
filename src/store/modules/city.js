import cityTimeZones from "@/assets/timezones_russia.json";

export default {
  actions: {},
  mutations: {},
  state: {
    options: cityTimeZones,
  },
  getters: {
    allCities(state) {
      return state.options
    }
  }
}