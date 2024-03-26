<template>
    <div>
        <!-- {{ items }}
        {{ info }} -->
        <div v-for="item in items" :key="item.id">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['items', 'info'],
        props: {
            items: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods: {
            
        }
        
    }
</script>

<style scoped>

</style>