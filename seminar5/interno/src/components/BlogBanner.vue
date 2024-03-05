<template>
    <section class="blog-banner">
        <img :src="blogBannerImg" alt="баннер">
        <div class="blog-banner_align">
            <div class="intro">
                <h1 class="intro__heading">Articles & News</h1>
                <div class="breadcrumbs">
                    <a class="breadcrumbs__link" href="index.html">Home</a>
                    <a class="breadcrumbs__link" href="blog.html">Blog</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                blogBannerImg: require("@/assets/img/blog/banner.jpg"),
            }
        },
    }
</script>

<style lang="scss" scoped>
.blog-banner {
    margin-bottom: 200px;

    img {
        width: 100%;
        background: #CDA274;
    }

    &_align {
        display: flex;
        justify-content: center;
        align-items: flex-end;

    }

    .intro {
        max-width: 503px;
        max-height: 178px;
        background-color: #FFF;
        border-radius: 50px 50px 0 0;
        margin-top: -178px;
        position: relative;
        z-index: 1;
        padding: 41px 78px;
        text-align: center;
        // margin-left: ;

        &__heading {
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 63px;
            letter-spacing: 0em;
            // text-align: left;
            color: #292F36;
        }
    }
}
</style>