<template>
    
    <header class="header center">
            <div class="header__left">
                <div class="logo">
                    <img class="logo__img" :src="logo" alt="логотип">
                    <p class="logo__text">Interno</p>
                </div>
            </div>
            <div class="header__right">
                <div class="menubar">
                    <a class="menu" href="index.html">Home</a>
                    <a class="menu" href="project.html">Project</a>
                    <a class="menu" href="blog.html">Blog</a>
                </div>
            </div>
        </header>
        
</template>

<script>
    export default {
        data() {
            return {
                logo: require("@/assets/img/Logo.png"),
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 8px 0;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 57px;
}

.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 44px;
}

.menu {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: $headingColor;
}

</style>