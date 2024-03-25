<template>
    <div v-bind="$attrs" class="article article_small">
        <div class="article__img">
            <img :src="article.img" alt="статья">
            <p class="article__tag">{{ article.tag }}</p>
        </div>
        <div class="article__text">
            <h2 class="article__heading">{{ article.heading }}</h2>
        </div>
        <div class="article__block">
            <p class="article__date">{{ article.date }}</p>
            <div class="article__btn"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
    inheritAttrs: false,
        props: {
            article: Object,
            default: {
                id: 1,
                img: require("@/assets/img/blog/kitchen1.jpg"),
                tag: 'Kitchen Design',
                heading: 'Let’s Get Solution For Building Construction Work',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
                date: '26 December,2022',
            },
        }
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.article {
    padding: 20px;
    border: 1px solid #E7E7E7;
    border-radius: 50px;

    &_small {
        width: 32%;
    }

    &__img {
        position: relative;
        margin-bottom: 20px;
    }

    &__img img {
        border-radius: 40px 40px 0 0;
        background-color: #EAEAEA;
    }

    &__tag {
        position: absolute;
        left: 20px;
        bottom: 20px;
        font-family: Jost;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
        padding: 0.5rem 1rem;
        color: $textColor;
        background-color: #FFF;
        border-radius: 5px 5px 5px 0;
    }

    &__text {
        width: 85%; //80%;
        // margin-bottom: 20px;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
        margin-bottom: 20px;
        white-space: pre-line; // используем, чтобы отображались переносы строк
    }

    &__content {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
        margin-bottom: 41px;
    }

    &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    &__date {
        font-family: Jost;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
    }

    &__btn {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #F4F0EC;
        color: $headingColor;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.article:hover {
    background-color: #F4F0EC;
}

.article:hover .article__btn {
    background-color: #FFF;
}
</style>