<template>
    <div>
        <layout-item title="Highlight 语法高亮">
            <ivy-highlight lang="javascript">
                function toLower(str){ return str.toLowerCase() }; let str = 'UPLOAD'; const tmp = toLower(str);
                console.log(tmp)
            </ivy-highlight>
        </layout-item>
    </div>
</template>

<script>
import IvyHighlight from '@/components/highlight/index.js'

export default {
    components: { IvyHighlight },
    data() {
        return {}
    },
}
</script>
