<template>
    <div class="list-item" :style="index ? styleObject : ''">
        <span class="meta">#\{{list.id}}</span>
        <strong class="list-item-title">
            \{{list.title}}
        </strong>
        <span class="byline">
            Opened by<strong class="byline-name">\{{list.questioner}}</strong>\{{list.createTime}}
        </span>
    </div>
</template>

<script type="es6">
    export default {
        name: "card",
        props: ['list','index'],
        data: function () {
            return {
              styleObject: 'border-top: 1px solid #eaecef'
            }
        }
    }

</script>

<style>
    @import "card.css";
</style>
