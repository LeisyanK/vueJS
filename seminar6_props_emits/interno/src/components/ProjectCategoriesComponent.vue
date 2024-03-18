<template>
    <div class="categories-block center">
        <div class="categories">
            <div class="categories__item" v-for="tag in projectTags" :key="tag.id" :class="{ active: tag.active }" @click="changeTag(tag)">
                {{ tag.text }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['change-tag'],
        data() {
            return {
                projectTags: [
                    { text: "Bathroom", active: false },
                    { text: "Bedroom", active: true },
                    { text: "Kitchen", active: false },
                    { text: "Living Area", active: false },
                ],
                selectedTag: '',    // текст на кнопке
            }
        },
        methods: {
            changeTag(tag) {
                this.projectTags.forEach(tag => {
                    tag.active = false;
                });
                tag.active = true;
                this.selectedTag = tag.text;
                // console.log(this.selectedTag);
                this.$emit('change-tag', this.selectedTag);
            }
        },
        created() {
            // находим активный тег, чтобы передать родителю
            const selectedTags = this.projectTags.filter(tag => tag.active == true)
            // console.log(typeof(selectedTags));
            // console.log(selectedTags[0].text);
            this.selectedTag = selectedTags[0].text;
            this.$emit('change-tag', this.selectedTag);
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

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
    }
    .active {
        background: #CDA274;
        border-radius: 10px;
        color: #FFF;
    }
}
</style>