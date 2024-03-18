<template>
    <div>
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
        
    }
</script>

<style scoped>

</style>