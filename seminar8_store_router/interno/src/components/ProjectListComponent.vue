<template>
    <div class="projects center">
        <div class="project" v-for="project in projects" :key="project.id">
            <ProjectComponent :project="project" @change-like="changeLike" />
        </div>
    </div>
</template>

<script>
import ProjectComponent from './ProjectComponent.vue';

    export default {
        emits: ['change-like2'],
        components: { ProjectComponent },
        props: {
            projects: Array,
        },
        data() {
            return {
                // projects: [
                //     { id: 1, tag: 'bedroom', title: 'Minimal Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom1.jpg") },
                //     { id: 2, tag: 'bedroom', title: 'Classic Minimal Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom2.jpg") },
                //     { id: 3, tag: 'bedroom', title: 'Minimal Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom3.jpg") },
                //     { id: 4, tag: 'bedroom', title: 'Minimal Bedroom table', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom4.jpg") },
                //     { id: 5, tag: 'bedroom', title: 'Modern Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom5.jpg") },
                //     { id: 6, tag: 'bedroom', title: 'Modern Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom6.jpg") },
                //     { id: 7, tag: 'bedroom', title: 'System Table', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom7.jpg") },
                //     { id: 8, tag: 'bedroom', title: 'Modern Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom8.jpg") },
                //     { id: 9, tag: 'bathroom', title: 'Minimal Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom1.jpg") },
                //     { id: 10, tag: 'bathroom', title: 'Modern Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom2.jpg") },
                //     { id: 11, tag: 'bathroom', title: 'Classic Minimal Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom3.jpg") },
                //     { id: 12, tag: 'bathroom', title: 'Modern Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom4.jpg") },
                //     { id: 13, tag: 'living', title: 'Minimal Living Area', links: 'Decor / Architecture', img: require("@/assets/img/projects/living1.jpg") },
                //     { id: 14, tag: 'kitchen', title: 'Modern Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen1.jpg") },
                //     { id: 15, tag: 'kitchen', title: 'Minimal Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen2.jpg") },
                //     { id: 16, tag: 'living', title: 'Modern Living Area', links: 'Decor / Architecture', img: require("@/assets/img/projects/living2.jpg") },
                //     { id: 17, tag: 'living', title: 'Classic Minimal Living Area', links: 'Decor / Architecture', img: require("@/assets/img/projects/living3.jpg") },
                //     { id: 18, tag: 'kitchen', title: 'Classic Minimal Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen3.jpg") },
                //     { id: 19, tag: 'kitchen', title: 'Minimal Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen4.jpg") },
                //     { id: 20, tag: 'kitchen', title: 'Modern Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen5.jpg") },
                // ],
            }
        },
        methods: {
            changeLike(id) {
                this.$emit('change-like2', id);
                // console.log('2 comp');
            }
        }
    }
</script>

<style lang="scss" scoped>
.projects {
    column-count: 2;
    margin-bottom: 60px;
}
.project {
    page-break-inside: avoid;
    break-inside: avoid;
    position: relative;

    
}
</style>