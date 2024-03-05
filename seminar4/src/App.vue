<template>
  <!-- <h1>Привет</h1> -->
  <!-- <HelloComponent/>
  <PhotoComponent/> -->
  <MainPage></MainPage>
  <BlogPage></BlogPage>
  <BlogDetailsPage></BlogDetailsPage>
</template>

<script>
// import HelloComponent from "./components/HelloComponent.vue";
import HelloComponent from "./components/HelloComponent.vue";
import PhotoComponent from "./components/PhotoComponent.vue";
import MainPage from "./pages/MainPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import BlogDetailsPage from "./pages/BlogDetailsPage.vue";

export default {
    components: { HelloComponent, PhotoComponent, MainPage, BlogPage, BlogDetailsPage }
}
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital,wght@0,100..900;1,100..900&display=swap");

// @font-face {
//     font-family: <name_u_choose>;
//     src: url('~@/assets/fonts/<static_font_file>.ttf');
// }
$widthSite: 1200px;
$headingColor: #292F36;
$textColor: #4D5053;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

.logo {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    &__text {
        font-family: DM Serif Display;
        font-size: 40px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
    }

    &__img {
        width: 34px;
        height: 34px;
    }
}
.breadcrumbs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &__link {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }

    &__link:not(:last-child)::after {
        content: '/';
        padding-left: 4px;
    }
}

</style>
