import Vue from "vue";
Vue.filter("utf8", function (el: any) {

    let parser = new DOMParser();
    return parser.parseFromString(el, "text/html").body.innerText;
});
import store from "./store";
import { Component } from "vue-property-decorator";
import template from "./main.vue";
import vuexI18n from "vuex-i18n";

Vue.use(vuexI18n.plugin, store);

Vue["i18n"].add("en", require("./locales/en.json"));
Vue["i18n"].add("de", require("./locales/de.json"));
Vue["i18n"].add("fr", require("./locales/fr.json"));
Vue["i18n"].add("it", require("./locales/it.json"));

Vue["i18n"].set("de");

import Start from "./components/app/start";

@Component({
    mixins: [template],
    store,
    components: {
        Start
    }
})
class App extends Vue {
    mounted() {


    }
}

export const app = new App().$mount("#app");
