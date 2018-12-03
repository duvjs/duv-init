<template>
    <div>
        <picker @change="bindPickerChange" value="selected" range="array">
            <view class="picker">
                小程序：\{{array[selected]}}
            </view>
        </picker>
        <p>问题</p>
        <input class="ipt" v-model="title" type="text" placeholder="请输入问题" />
        <p>标签</p>
        <input class="ipt" v-model="tag" type="text" placeholder="请输入tag" />

        <div v-show="title || tag">
            <p>form内容:</p>
            <p>\{{array[selected]}}</p>
            <p>\{{ title }}</p>
            <p>\{{ tag }}</p>
        </div>
        <button class="btn" type="primary" @click="submitData">提交</button>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                selected: 0,
                array: ['百度小程序', '微信小程序', '支付宝小程序'],
                title: '',
                tag: '',
            }
        },
        methods: {
            bindPickerChange: function(e) {
                console.log('picker发送选择改变，携带值为', e.detail.value)
                this.setData({
                    'selected': e.detail.value
                })
            },
            submitData: function () {
                duv.showToast({
                    title: '提交成功'
                });
            }
        },
    }
</script>
<style>
    @import "main.css";
</style>
