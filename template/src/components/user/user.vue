<template>
    <div>
        <button v-show="!hasAuthorize" open-type="getUserInfo" @click="onGotUserInfo">登陆</button>
        <div class="user">
            <img class="page-title-img" :src="headImg" />
            <div class="page-title-text">\{{name}}</div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        name: "user",
        data: function () {
            return {
                name: '',
                headImg:'',
                hasAuthorize: false
            }
        },
        props: {
            tapname: String
        },
        created: function () {
            const self = this
            duv.checkSession({
                success: res => {
                    duv.showToast({
                        title: '您已登录'
                    });
                    duv.getUserInfo({
                        success: function (res) {
                            self.hasAuthorize = true
                            self.name = res.userInfo.nickName
                            self.headImg = res.userInfo.avatarUrl
                        },
                        fail: function (err) {
                            console.log(err)
                        }
                    })
                },
                fail: err => {
                    duv.login({
                        success: res => {
                            duv.showToast({
                                title: '登录成功'
                            });
                        },
                        fail: err => {
                            duv.showToast({
                                title: '登录失败'
                            });
                        }
                    });
                }
            });
        },
        methods: {
            authorize: function () {
                const self = this
                duv.authorize({
                    scope: 'scope.userInfo',
                    success: function (res) {
                        duv.getUserInfo({
                            success: function (res) {
                                self.hasAuthorize = true
                                self.name = res.userInfo.nickName
                                self.headImg = res.userInfo.avatarUrl
                                console.log('用户名', res.userInfo.nickName);
                            },
                            fail: function (err) {
                                console.log(err)
                            }
                        })
                    },
                    fail: function (err) {
                        console.log(err)
                    }
                });
            },
            onGotUserInfo: function (res) {
                const self = this
                self.hasAuthorize = true
                self.name = res.detail.userInfo.nickName
                self.headImg = res.detail.userInfo.avatarUrl
            }
        }
    }

</script>

<style>
    .user{
        width: 100%;
        text-align: center;
    }
    .page-title-img{
        width: 200rpx;
        height: 200rpx;
        margin: 0 auto 50rpx;
        display: block;
        border-radius: 50%;
    }
    .page-title-text{
        font-size: 21px;
    }
</style>
