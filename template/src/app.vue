<template>
    <div>hello world</div>
</template>
<script type="es6">
export default {
    data() {
        return {
            name: 'xuchaozheng'
        }
    },
    config: {
        "pages":[
            "pages/home/main",
            "pages/list/main",
            "pages/qa/main"
        ],
        "window":{
            "backgroundTextStyle":"light",
            "navigationBarBackgroundColor": "#fff",
            "navigationBarTitleText": "DUV",
            "navigationBarTextStyle":"black"
        }
    }
}
</script>
<style>
    @import "common/base.css";
</style>
