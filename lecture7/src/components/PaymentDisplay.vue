<template>
    <div>
        <!-- {{ items }}
        {{ info }} -->
        Сумма всех платежей {{ getFP }}
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
        computed: {
            getFP() {
                // обращение к store напрямую
                return this.$store.getters.getFullPayment
            }
        }
        
    }
</script>

<style scoped>

</style>