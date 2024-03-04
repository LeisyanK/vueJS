<template>
    <HeaderComponent/>
    <BlogBanner></BlogBanner>
    <BlogComponent></BlogComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BlogBanner from "../components/BlogBanner.vue";
import BlogComponent from "../components/BlogComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

    export default {
        components: { HeaderComponent, BlogBanner, BlogComponent, FooterComponent }
    }
</script>

<style scoped>

</style>