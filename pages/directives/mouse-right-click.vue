<template>
    <div>
        <layout-item title="自定义右键菜单" desc="可以使绑定指令的元素在页面加载后自动获得焦点">
            <div v-mouse-right-click="contentMenuList" style="line-height: 34px">
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
                <div>菜单撒付付付付付</div>
            </div>
        </layout-item>
    </div>
</template>

<script>
import MouseRightClick from '@/directives/mouse-right-click.js'

export default {
    directives: { MouseRightClick },
    data() {
        return {
            contentMenuList: {
                menus: [
                    {
                        command: 'delete',
                        name: '删除',
                    },
                    {
                        command: 'person',
                        name: '个人中心个人中心个人中心',
                    },
                    {
                        command: 'logout',
                        name: '退出',
                    },
                ],
                callback(item) {
                    console.log(item, '鼠标右键菜单点击事件')
                },
            },
        }
    },
}
</script>
