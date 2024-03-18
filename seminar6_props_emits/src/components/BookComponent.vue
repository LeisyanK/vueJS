<!-- Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет
отображать информацию о книге, такую как название, автор и год
издания. Компонент "Книга" должен иметь возможность отображать
дополнительные детали о книге по требованию пользователя. Также
необходимо создать компонент "Список книг" (BookList), который
будет отображать список книг из переданного массива -->
<template>
    <div>
        <h2>Название: {{ book.title }}</h2>
        <p>Автор: {{ book.author }}</p>
        <p>Год: {{ book.year }}</p>
        <button @click="showMore">{{ isShow ? "Скрыть детали" : "Показать детали"}}</button>
        <div v-if="isShow">
            <p>Жанр: {{ book.genre }}</p>
            <p>Описание: {{ book.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            book: Object,
        },
        data() {
            return {
                isShow: false,
            }
        },
        methods: {
            showMore() {
                this.isShow = !this.isShow;
            }
        },
        
    }
</script>

<style scoped>

</style>