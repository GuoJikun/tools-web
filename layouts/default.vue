<template>
    <div class="layout">
        <div class="sidebar">
            <div class="sa-menu">
                <div class="sa-menu-group">
                    <div class="sa-menu-group-title">
                        <!-- <mx-icon v-if="item.icon" :name="item.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>CSS</span>
                    </div>

                    <nuxt-link to="/shadow" tag="div" class="sa-menu-item">
                        <!-- <mx-icon v-if="child.icon" :name="child.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>阴影生成器</span>
                    </nuxt-link>
                </div>
                <div class="sa-menu-group">
                    <div class="sa-menu-group-title">
                        <!-- <mx-icon v-if="item.icon" :name="item.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>Vue Directive</span>
                    </div>

                    <nuxt-link to="/directives" tag="div" class="sa-menu-item">
                        <!-- <mx-icon v-if="child.icon" :name="child.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>focus</span>
                    </nuxt-link>
                    <nuxt-link to="/directives/mouse-right-click" tag="div" class="sa-menu-item">
                        <!-- <mx-icon v-if="child.icon" :name="child.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>右键菜单</span>
                    </nuxt-link>
                </div>
                <div class="sa-menu-group">
                    <div class="sa-menu-group-title">
                        <!-- <mx-icon v-if="item.icon" :name="item.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>Vue Component</span>
                    </div>

                    <nuxt-link to="/components" tag="div" class="sa-menu-item">
                        <!-- <mx-icon v-if="child.icon" :name="child.icon" class="sa-menu-icon"></mx-icon> -->
                        <span>Highlight 语法高亮</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="main">
            <Nuxt />
        </div>
    </div>
</template>

<style lang="scss">
html {
    font-family: 'Helvetica Neue', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial,
        sans-serif;
    font-size: 14px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
body {
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
.layout {
    width: 100vw;
    height: 100vh;
    display: flex;
}
.sidebar {
    width: 240px;
    flex: 0 0 240px;
    border-right: 1px solid #dedede;
    height: 100%;
}
.main {
    flex: auto;
    padding: 20px;
}

.sa-menu {
    flex: auto;
    width: 100%;
    height: 100%;
    background-color: #053340;
    color: #ffffff;
    &-icon {
        margin-right: 12px;
    }
    &-line {
        width: 180px;
        height: 1px;
        background-color: #197992;
        margin: 12px auto 0;
    }
    &-group {
        &-title {
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            padding: 0 15px;
            color: #197992;
        }
    }
    &-sub {
        &-arrow {
            transition: transform 0.3s;
            transform: rotate(0);
        }

        &-open &-arrow {
            transform: rotate(90deg);
        }
        &-title {
            display: flex;
            justify-content: space-between;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            padding: 0 15px;
            cursor: default;
            &:hover {
                background-color: #124958;
            }
        }
        &-content .sa-menu-item {
            padding: 0 15px 0 27px;
        }
    }
    &-item {
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding: 0 15px;
        cursor: pointer;
        &:hover {
            background-color: #124958;
        }
        &-active {
            background-color: #409eff;
            &:hover {
                background-color: #409eff;
            }
        }
    }
}
</style>
