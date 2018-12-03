import Vue from "vue";
import main from "./main.vue"

let v = new Vue(main);
v.$mount('page')

export default {
    config: {
        window: 'black'
    }
}
