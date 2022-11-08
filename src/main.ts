/*
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 14:45:18
 * @LastEditors: wss
 * @LastEditTime: 2022-08-07 17:59:47
 * @FilePath: \vue-blog\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./index.css";
import "animate.css";
import 'nprogress/nprogress.css'
import { createPinia } from "pinia";
const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount("#app");
