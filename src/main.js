import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import {createApp} from "vue";
import App from "./app.vue";
import Router from "./router.js";

const app = createApp(App);
app.use(Router).use(ElementPlus, {
    locale: zhCn
});
app.mount("#root");