<template>
    <!-- <div> -->

    <!-- <img :src="projectImg" alt=""> -->
    <img class="project__img" :src="project.img" alt="" @click="changeLike(project.id)">
    <div class="project__block">
        <div>
            <h3 class="project__heading">{{ project.title }}</h3>
            <p class="project__text">{{ project.links }}</p>
        </div>
        <!-- <p>{{ project.img }}</p> -->
        <div class="project__btn"><i class="fa-solid fa-chevron-right"></i></div>
        <!-- <img v-if="project.like" class="star" :src="like" alt="" @click="project.like = !project.like"> -->
        <img v-if="project.like" class="star" :src="like" alt="" @click="changeLike(project.id)">
    </div>

    <!-- </div> -->
</template>

<script>
export default {
    emits: ['change-like'],
    props: {
        project: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            like: require('@/assets/img/projects/star.png'),
            // projectImg: this.project.src,
        }
    },
    methods: {
        changeLike(id) {
            this.$emit('change-like', id);
        }
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.project {
    &__img {
        width: 100%;
        background-color: #C4C4C4;
        margin-bottom: 24px;
    }
    &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;
    }
    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
    }
    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
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
    .star {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 2;
    }
    
        // .notSeen {
        //     display: none;
        // }
}
</style>