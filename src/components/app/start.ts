import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import template from "./start.template.vue";
import BaseComponent from "./base";

@Component({
    name: "StartComponent",
    mixins: [template],
    components: {}
})

export default class StartComponent extends BaseComponent {

    mounted() {

    }

    created() {
        // call from extended some action or some getter, call getter directly on view
    }

}
