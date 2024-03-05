<template>
    <form v-if="isAuth">
        <input type="text" placeholder="login">
        <input type="password" placeholder="password">
        <button>Отправить</button>
    </form>
    <div v-else>
        <h3>Вы успешно зарегистрированы</h3>
    </div>
</template>

<script>
    export default {
        props: {
            isAuth: Boolean
        }
    }
</script>

<style scoped>

</style>