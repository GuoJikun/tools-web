import Highlight from './src/highlight.vue'

Highlight.install = (Vue) => {
    Vue.component(Highlight.name, Highlight)
}

export default Highlight
