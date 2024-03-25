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
            selectedProjectTag: '',
            projectTags: [
                { text: "Bathroom", active: false },
                { text: "Bedroom", active: true },
                { text: "Kitchen", active: false },
                { text: "Living Area", active: false },
            ],
            
            projects: [
                { 
                    id: 1, 
                    tag: 'Bedroom', 
                    title: 'Minimal Bedroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom1.jpg"), require("@/assets/img/projects/bedroom2.jpg"), require("@/assets/img/projects/bedroom3.jpg")], 
                    like: true, 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquamsem vitae turpis dignissim maximus.Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.Dojrices gravida dignissim.Praesent at nibh in mi fringilla mattis.Phasellus ut dolor odio.Aenean in the ipsum vel lectus bibendum commodo. \nIn nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.' 
                },
                { 
                    id: 2, 
                    tag: 'Bedroom', 
                    title: 'Classic Minimal Bedroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom2.jpg"), require("@/assets/img/projects/bedroom3.jpg"), require("@/assets/img/projects/bedroom4.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam vel aspernatur placeat aperiam eum dolorem distinctio nesciunt, esse eos?' 
                },
                { 
                    id: 3, 
                    tag: 'Bedroom', 
                    title: 'Minimal Bedroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom3.jpg"), require("@/assets/img/projects/bedroom4.jpg"), require("@/assets/img/projects/bedroom5.jpg")], 
                    like: false, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.' 
                },
                { 
                    id: 4, 
                    tag: 'Bedroom', 
                    title: 'Minimal Bedroom table', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom4.jpg"), require("@/assets/img/projects/bedroom5.jpg"), require("@/assets/img/projects/bedroom6.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus debitis sunt dolor! Cum quos facere animi ad tempore totam, alias dolorum temporibus, debitis quisquam minus eveniet exercitationem? Quidem, voluptas!' 
                },
                { 
                    id: 5, 
                    tag: 'Bedroom', 
                    title: 'Modern Bedroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom5.jpg"), require("@/assets/img/projects/bedroom6.jpg"), require("@/assets/img/projects/bedroom7.jpg")], 
                    like: false, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis autem nemo animi provident error est hic accusamus eaque tempora aliquam! Ad commodi unde aliquam perferendis aperiam. Debitis, distinctio itaque.' 
                },
                { 
                    id: 6, 
                    tag: 'Bedroom', 
                    title: 'Modern Bedroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom6.jpg"), require("@/assets/img/projects/bedroom7.jpg"), require("@/assets/img/projects/bedroom8.jpg")], 
                    like: true, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.' 
                },
                { 
                    id: 7, 
                    tag: 'Bedroom', 
                    title: 'System Table', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom7.jpg"), require("@/assets/img/projects/bedroom8.jpg"), require("@/assets/img/projects/bedroom1.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quae ducimus voluptatibus rem! Id, eius. Consequuntur eligendi tempora cumque quos, fugit pariatur! Praesentium tenetur sint, nostrum ea officia iusto! Illo.' 
                },
                { 
                    id: 8, 
                    tag: 'Bedroom', 
                    title: 'Modern Bedroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bedroom8.jpg"), require("@/assets/img/projects/bedroom1.jpg"), require("@/assets/img/projects/bedroom2.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia labore praesentium sed, similique, itaque expedita, optio exercitationem est odio quas rem nulla maiores laboriosam harum distinctio iste numquam iure.' 
                },
                { 
                    id: 9, 
                    tag: 'Bathroom', 
                    title: 'Minimal Bathroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bathroom1.jpg"), require("@/assets/img/projects/bathroom2.jpg"), require("@/assets/img/projects/bathroom3.jpg")], 
                    like: false,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.' 
                },
                { 
                    id: 10, 
                    tag: 'Bathroom', 
                    title: 'Modern Bathroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bathroom2.jpg"), require("@/assets/img/projects/bathroom3.jpg"), require("@/assets/img/projects/bathroom4.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia labore praesentium sed, similique, itaque expedita, optio exercitationem est odio quas rem nulla maiores laboriosam harum distinctio iste numquam iure.' 
                },
                { 
                    id: 11, 
                    tag: 'Bathroom', 
                    title: 'Classic Minimal Bathroom', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/bathroom3.jpg"), require("@/assets/img/projects/bathroom4.jpg"), require("@/assets/img/projects/bathroom1.jpg")], 
                    like: true, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis autem nemo animi provident error est hic accusamus eaque tempora aliquam! Ad commodi unde aliquam perferendis aperiam. Debitis, distinctio itaque.' 
                },
                { 
                    id: 12, 
                    tag: 'Bathroom', 
                    title: 'Modern Bathroom', 
                    links: 'Decor / Architecture', img: [require("@/assets/img/projects/bathroom4.jpg"), require("@/assets/img/projects/bathroom2.jpg"), require("@/assets/img/projects/bathroom3.jpg")], 
                    like: false, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.' 
                },
                { 
                    id: 13, 
                    tag: 'Living', 
                    title: 'Minimal Living Area', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/living1.jpg"), require("@/assets/img/projects/living2.jpg"), require("@/assets/img/projects/living3.jpg")], 
                    like: true, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.' 
                },
                { 
                    id: 14, 
                    tag: 'Kitchen', 
                    title: 'Modern Kitchen', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/kitchen1.jpg"), require("@/assets/img/projects/kitchen2.jpg"), require("@/assets/img/projects/kitchen3.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia labore praesentium sed, similique, itaque expedita, optio exercitationem est odio quas rem nulla maiores laboriosam harum distinctio iste numquam iure.' 
                },
                { 
                    id: 15, 
                    tag: 'Kitchen', 
                    title: 'Minimal Kitchen', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/kitchen2.jpg"), require("@/assets/img/projects/kitchen3.jpg"), require("@/assets/img/projects/kitchen4.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quae ducimus voluptatibus rem! Id, eius. Consequuntur eligendi tempora cumque quos, fugit pariatur! Praesentium tenetur sint, nostrum ea officia iusto! Illo.' 
                },
                { 
                    id: 16, 
                    tag: 'Living', 
                    title: 'Modern Living Area', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/living2.jpg"), require("@/assets/img/projects/living3.jpg"), require("@/assets/img/projects/living1.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quae ducimus voluptatibus rem! Id, eius. Consequuntur eligendi tempora cumque quos, fugit pariatur! Praesentium tenetur sint, nostrum ea officia iusto! Illo.' 
                },
                { 
                    id: 17, 
                    tag: 'Living', 
                    title: 'Classic Minimal Living Area', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/living3.jpg"), require("@/assets/img/projects/living2.jpg"), require("@/assets/img/projects/living1.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.' 
                },
                { 
                    id: 18, 
                    tag: 'Kitchen', 
                    title: 'Classic Minimal Kitchen', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/kitchen2.jpg"), require("@/assets/img/projects/kitchen3.jpg"), require("@/assets/img/projects/kitchen4.jpg")], 
                    like: true, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis autem nemo animi provident error est hic accusamus eaque tempora aliquam! Ad commodi unde aliquam perferendis aperiam. Debitis, distinctio itaque.' 
                },
                { 
                    id: 19, 
                    tag: 'Kitchen', 
                    title: 'Minimal Kitchen', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/kitchen3.jpg"), require("@/assets/img/projects/kitchen4.jpg"), require("@/assets/img/projects/kitchen5.jpg")], 
                    like: false, 
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.' 
                },
                { 
                    id: 20, 
                    tag: 'Kitchen', 
                    title: 'Modern Kitchen', 
                    links: 'Decor / Architecture', 
                    img: [require("@/assets/img/projects/kitchen4.jpg"), require("@/assets/img/projects/kitchen5.jpg"), require("@/assets/img/projects/kitchen1.jpg")], 
                    like: false, 
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.' 
                },
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