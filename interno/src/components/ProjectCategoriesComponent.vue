<template>
    <div class="categories-block center">
        <div class="categories">
            <div class="categories__item" v-for="tag in getProjectTags" :key="tag.id" :class="{ active: tag.active }"
                @click="changeTag(tag.text)">
                {{ tag.text }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapState(['projectTags']),
            ...mapGetters(['getProjectTags']),
        },
        methods: {
            ...mapActions(['changeTag']),
        }
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.categories-block {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
}

.categories {
    border: 1px solid #CDA274;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    width: max-content;

    &__item {
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        color: $headingColor;
        padding: 1rem 2rem;
        cursor: pointer;
    }

    .active {
        background: #CDA274;
        border-radius: 8px;
        color: #FFF;
    }
}
</style>