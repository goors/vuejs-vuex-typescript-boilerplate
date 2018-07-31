import Vue from "vue";
import { Watch } from "vue-property-decorator";
import * as user from "./../../store/modules/user";

export default class BaseComponent extends Vue {

    // computed
    get user() {
        return user.getUser(this.$store);
    }
    // some method on user mutation
    set_user () {
        let object = {
            "name": "Some name"
        };
        user.updateUser(this.$store, object);
    }

    // some actions on user
    some_Action () {
        let object = {
            "name": "Some name"
        };
        user.someAction(this.$store, object);
    }
}
