<template>
    <HeaderComponent />
    <BannerComponent :bannerInfo="bannerInfo" />
    <ProjectCategoriesComponent @change-tag="findProjects" />
    <ProjectListComponent :projects="filteredProjects" @change-like2="changeLike" />
    <!-- <ProjectListComponent :projects="filteredProjects" /> -->
    <PaginationComponent />
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ProjectListComponent from "@/components/ProjectListComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import ProjectCategoriesComponent from "@/components/ProjectCategoriesComponent.vue";

export default {
    components: { HeaderComponent, BannerComponent, ProjectCategoriesComponent, ProjectListComponent, PaginationComponent, FooterComponent },
    props: {
        bannerInfo: Object,
    },
    data() {
        return {
            // selectedProjectTag: '',
            // projectTags: [
            //     { text: "Bathroom", active: false },
            //     { text: "Bedroom", active: true },
            //     { text: "Kitchen", active: false },
            //     { text: "Living Area", active: false },
            // ],
            projects: [
                { id: 1, tag: 'Bedroom', title: 'Minimal Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom1.jpg"), like: true },
                { id: 2, tag: 'Bedroom', title: 'Classic Minimal Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom2.jpg"), like: false },
                { id: 3, tag: 'Bedroom', title: 'Minimal Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom3.jpg"), like: false },
                { id: 4, tag: 'Bedroom', title: 'Minimal Bedroom table', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom4.jpg"), like: false },
                { id: 5, tag: 'Bedroom', title: 'Modern Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom5.jpg"), like: false },
                { id: 6, tag: 'Bedroom', title: 'Modern Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom6.jpg"), like: true },
                { id: 7, tag: 'Bedroom', title: 'System Table', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom7.jpg"), like: false },
                { id: 8, tag: 'Bedroom', title: 'Modern Bedroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bedroom8.jpg"), like: false },
                { id: 9, tag: 'Bathroom', title: 'Minimal Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom1.jpg"), like: false },
                { id: 10, tag: 'Bathroom', title: 'Modern Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom2.jpg"), like: false },
                { id: 11, tag: 'Bathroom', title: 'Classic Minimal Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom3.jpg"), like: true },
                { id: 12, tag: 'Bathroom', title: 'Modern Bathroom', links: 'Decor / Architecture', img: require("@/assets/img/projects/bathroom4.jpg"), like: false },
                { id: 13, tag: 'Living', title: 'Minimal Living Area', links: 'Decor / Architecture', img: require("@/assets/img/projects/living1.jpg"), like: true },
                { id: 14, tag: 'Kitchen', title: 'Modern Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen1.jpg"), like: false },
                { id: 15, tag: 'Kitchen', title: 'Minimal Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen2.jpg"), like: false },
                { id: 16, tag: 'Living', title: 'Modern Living Area', links: 'Decor / Architecture', img: require("@/assets/img/projects/living2.jpg"), like: false },
                { id: 17, tag: 'Living', title: 'Classic Minimal Living Area', links: 'Decor / Architecture', img: require("@/assets/img/projects/living3.jpg"), like: false },
                { id: 18, tag: 'Kitchen', title: 'Classic Minimal Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen3.jpg"), like: true },
                { id: 19, tag: 'Kitchen', title: 'Minimal Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen4.jpg"), like: false },
                { id: 20, tag: 'Kitchen', title: 'Modern Kitchen', links: 'Decor / Architecture', img: require("@/assets/img/projects/kitchen5.jpg"), like: false },
            ],
            filteredProjects: [],
        }
    },
    methods: {
        findProjects(tag) {
            this.filteredProjects = this.projects.filter(project => tag.includes(project.tag)); 
            // console.log('ProjectPage:', tag);
            // this.selectedProjectTag = tag;
            // this.filteredProjects = this.projects.filter(project => {
            //     // console.log(project.tag.toLowerCase);
            //     return tag.includes(project.tag)}); // project.tag == tag);
            //     // return project.tag.includes(tag)}); // project.tag == tag);
        },
        changeLike(id) {
            this.projects.forEach( project => {
                if (project.id == id) {
                    project.like = !project.like;
                    console.log(project.like);
                }
            });
            // console.log();
        }
    }

    }
</script>

<style scoped></style>