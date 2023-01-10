import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill,
  RiPinterestFill,
  CoHamburgerMenu,
} from "oh-vue-icons/icons";

addIcons(RiFacebookBoxFill, RiInstagramLine, RiTwitterFill, RiPinterestFill, CoHamburgerMenu);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");
