<template>
    <HeaderComponent />
    <!-- <BlogBanner></BlogBanner> -->
    <BannerComponent :bannerInfo="bannerInfo" />
    <BlogComponent :articles=" articles"></BlogComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BlogBanner from "../components/BlogBanner.vue";
import BlogComponent from "../components/BlogComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";

    export default {
        components: { HeaderComponent, BlogBanner, BlogComponent, FooterComponent, BannerComponent },
        props: {
            articles: Array,
            bannerInfo: Object,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>