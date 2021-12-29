let Vue;
class VueRouter{
    constructor(options){
        //1 处理选项
        this.$options = options

        //2 需要响应式的current
        const initial = window.location.hash.slice(1) || "/";
        Vue.util.defineReactive(this,"current",initial)
        
        //3 监控url变化
        window.addEventListener('hashchange',this.onhashChange.bind(this))

    }
    onhashChange(){
        this.current = window.location.hash.slice(1)
    }



}

VueRouter.install = function(_vue){
    Vue = _vue
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router
            }
        }
    })

    Vue.component('router-link', {
        props:{
            to:{
                type:String,
                require:true,
            }
        },
        render(h){
            return h('a',{ attrs : {href:'#'+this.to} }, this.$slots.default)
        }
    })
    Vue.component('router-view',{
        render(h) {
            let component = null
            const route = this.$router.$options.routes.find(route => route.path == this.$router.current)
            if(route){
                component = route.component
            }
            return h(component);
        }
    })
}

export default VueRouter