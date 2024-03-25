<template>
    <HeaderComponent></HeaderComponent>
    <BlogDetailsComponent :articles="articles"></BlogDetailsComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BlogDetailsComponent from "../components/BlogDetailsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";


    export default {
        props: { articles: Array },
        components: { HeaderComponent, BlogDetailsComponent, FooterComponent }
    }
</script>

<style scoped>

</style>