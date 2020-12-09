<template>
    <div class="layout-item" title="">
        <p class="layout-item-title">
            <slot name="title">{{ title }}</slot>
        </p>
        <p class="layout-item-desc">
            <slot name="desc">{{ desc }}</slot>
        </p>
        <div class="layout-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutItem',
    props: {
        title: {
            type: String,
            default: '',
        },
        desc: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
.layout-item {
    background-color: #ffffff;
    line-height: 1.6em;
    &-title {
        font-size: 1.4em;
        color: #333;
        line-height: 2em;
    }
    &-desc {
        color: #666;
    }
    &-content {
        margin-top: 16px;
    }
    & + & {
        margin-top: 20px;
    }
}
</style>
