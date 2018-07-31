declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module "*.json" {
    const value: any;
    export default value;
}

declare module "vuex-localstorage" {
    function persist(param: any): any;

    namespace persist {
    }
    export = persist;
}

declare module "vuex-i18n" {
    const vuexI18n: any;
    export default vuexI18n;
}