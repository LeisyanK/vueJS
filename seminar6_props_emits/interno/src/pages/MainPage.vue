<template>
    <HeaderComponent></HeaderComponent>
    <MainPageComponent :articles="articles"></MainPageComponent>
    <FooterComponent></FooterComponent>
    
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MainPageComponent from "../components/MainPageComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

    export default {
        props: {
            articles: Array,
        },
        components: { HeaderComponent, MainPageComponent, FooterComponent }

    }
</script>

<style scoped>

</style>