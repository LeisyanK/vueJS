<template>
    <HeaderComponent/>
    <BlogBanner></BlogBanner>
    <BlogComponent :articles="articles"></BlogComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BlogBanner from "../components/BlogBanner.vue";
import BlogComponent from "../components/BlogComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

    export default {
        components: { HeaderComponent, BlogBanner, BlogComponent, FooterComponent },
        props: {
            articles: Array,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>