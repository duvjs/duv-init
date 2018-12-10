<template>
    <!--支持内联样式-->
    <div style="margin-top: 100rpx">
        <!--组件调用-->
        <user></user>
        <button class="btn" @click="toList">查看</button>
        <button class="btn" type="primary" @click="toQa">提问</button>
    </div>
</template>

<script type="es6">
    import user from '../../components/user/user.vue'
    export default {
        components: {
            user: user
        },
        data() {
            return {
                listUrl: '/pages/list/main',
                qaUrl: '/pages/qa/main'
            }
        },
        methods: {
            toList: function () {
                const self = this
                duv.navigateTo({
                    url: self.listUrl
                })
            },
            toQa: function () {
                const self = this
                duv.navigateTo({
                    url: self.qaUrl
                })
            }
        }
    }
</script>

<style lang="sass">
    @import "./main.sass";
</style>
