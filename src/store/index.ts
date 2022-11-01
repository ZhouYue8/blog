import { defineStore } from "pinia";
import { getWebLog } from "../api";
import { ref } from "vue";
const useStore = defineStore("store", {
  state: () => ({
    darkMode: false,
    webLog: [],
  }),
  actions: {
    async getBlog() {
      return await getWebLog();
    },
  },
});

export default useStore;
