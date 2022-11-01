import { App } from "vue";
import Card from "./Card/Card.vue";
export default {
  install(app: App) {
    app.component("ws-Card", Card);
  },
};
