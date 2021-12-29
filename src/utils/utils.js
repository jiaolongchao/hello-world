import Vue from "vue";

export default function create(compon,props){
    // 方法1： extend => Ctor => new Ctor
    // 方法2： 借鸡生蛋
    const vm = new Vue({
        render(h){
          return h(compon,{props})
        }
    }).$mount()

    document.body.appendChild(vm.$el)

    const comp = vm.$children[0]
    comp.remove = ()=>{
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp;
}