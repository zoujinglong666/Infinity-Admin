import {createApp} from "vue";
import "./style.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import Routes from "@/routes";
import * as Icons from "@element-plus/icons-vue";

const app = createApp ( App );
app.use ( Routes );
app.use ( ElementPlus )
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});
app.mount ( "#app" )
