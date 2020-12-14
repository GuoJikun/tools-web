<template>
    <pre>
        <code :class="[`language-${lang}`]">
            <slot></slot>
        </code>
    </pre>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
export default {
    name: 'Highlight',
    props: {
        lang: {
            type: String,
            default: 'markup',
        },
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            Prism.highlightAll()
        },
    },
}
</script>

<style lang="scss">
.ivy-highlight {
    display: block;
    position: relative;
    &-hide {
        display: auto;
    }
}
</style>
