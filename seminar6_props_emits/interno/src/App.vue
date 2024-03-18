<template>
    <MainPage :articles="articles"></MainPage>
    <BlogPage :articles="articles" :bannerInfo="bannerArray[0]"></BlogPage>
    <BlogDetailsPage :articles="articles"></BlogDetailsPage>
    <ProjectsPage :bannerInfo="bannerArray[1]" />
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import BlogDetailsPage from "./pages/BlogDetailsPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";

export default {
    components: { MainPage, BlogPage, BlogDetailsPage, ProjectsPage },
    data() {
        return {
            articles: [
                {
                    id: 1,
                    img: require("@/assets/img/blog/kitchen1.jpg"),
                    tag: 'Kitchen Design',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
                    date: '26 December,2022',
                },
                {
                    id: 2,
                    img: require("@/assets/img/blog/living1.jpg"),
                    tag: 'Living Design',
                    heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
                    date: '22 December,2022'
                },
                {
                    id: 3,
                    img: require("@/assets/img/blog/interior1.jpg"),
                    tag: 'Interior Design',
                    heading: 'Best For Any Office & Business Interior Solution',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
                    date: '25 December,2022'
                },
                {
                    id: 4,
                    img: require("@/assets/img/blog/kitchen2.jpg"),
                    tag: 'Kitchen Design',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
                    date: '26 December,2022'
                },
                {
                    id: 5,
                    img: require("@/assets/img/blog/living2.jpg"),
                    tag: 'Living Design',
                    heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
                    date: '22 December,2022'
                },
                {
                    id: 6,
                    img: require("@/assets/img/blog/interior2.jpg"),
                    tag: 'Interior Design',
                    heading: 'Best For Any Office & Business Interior Solution',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
                    date: '25 December,2022'
                },
                {
                    id: 7,
                    img: require("@/assets/img/blog/Architecture1.jpg"),
                    tag: 'Architecture Design',
                    heading: 'Best For Any Office & Business Architecture Solution',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
                    date: '22 December,2022'
                },
                {
                    id: 8,
                    img: require("@/assets/img/blog/Architecture2.jpg"),
                    tag: 'Architecture Design',
                    heading: 'Low Cost Latest Invented Architecture Designing \nIdeas.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
                    date: '28 December,2022'
                },
                {
                    id: 9,
                    img: require("@/assets/img/blog/bedroom1.jpg"),
                    tag: 'Bedroom Design',
                    heading: 'Latest Invented Bedroom Designing \nIdeas.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus unde quae non architecto quaerat, iure ipsum temporibus cum corrupti illo minus! Reprehenderit ab sunt libero fuga iste eveniet molestias. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident, nihil minus, atque perspiciatis obcaecati distinctio mollitia tempora molestiae non doloremque ipsa architecto quis facilis beatae. Dicta eligendi nostrum et?',
                    date: '27 December,2022'
                },
                {
                    id: 10,
                    img: require("@/assets/img/blog/bedroom2.jpg"),
                    tag: 'Bedroom Design',
                    heading: 'Design sprints are great',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum illum! Eos eaque unde natus minima odio, illo delectus non id laudantium magni voluptatem alias eveniet, ea dignissimos sint excepturi similique repellat in quam. \nAmet fuga provident vel enim beatae mollitia, pariatur itaque minima ut, consectetur corrupti eveniet repellat suscipit?',
                    date: '17 December,2022'
                },
                ],
            bannerArray: [
                { img: require("@/assets/img/blog/banner.jpg"), heading: 'Articles & News', pageName: 'Blog' },
                { img: require("@/assets/img/projects/projectBanner.jpg"), heading: 'Our Project', pageName: 'Project' },
            ]
        }
    },
}
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital,wght@0,100..900;1,100..900&display=swap");

// @font-face {
//     font-family: <name_u_choose>;
//     src: url('~@/assets/fonts/<static_font_file>.ttf');
// }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

.logo {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    &__text {
        font-family: DM Serif Display;
        font-size: 40px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
    }

    &__img {
        width: 34px;
        height: 34px;
    }
}
.breadcrumbs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &__link {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }

    &__link:not(:last-child)::after {
        content: '/';
        padding-left: 4px;
    }
}

</style>
