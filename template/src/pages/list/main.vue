<template>
    <div>
        <card v-for="(item, index) in list" :list="item" :index="index" :key="item.id" @click=""></card>
    </div>
</template>

<script type="es6">
import card from '../../components/card/card.vue'
export default {
    components: {
        card: card
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    title: 'Computed property don\'t receive component\'s instance as first argument in SSR',
                    createTime: 'about 1 hours ago',
                    questioner: 'sql'
                },
                {
                    id: 2,
                    title: 'v-enter class is removed immediately when using animation transition',
                    createTime: 'about 7 hours ago',
                    questioner: 'Tae69'
                },
                {
                    id: 3,
                    title: 'Both move and leave triggered for removed transition-group item if transition-group has display: flex',
                    createTime: '3 days ago',
                    questioner: 'dweerd'
                },
            ]
        }
    },
    methods: {

    }
}
</script>
