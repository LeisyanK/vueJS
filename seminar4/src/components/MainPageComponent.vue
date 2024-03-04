<template>
    <div class="banner center">
        <!-- <img class="banner__img" src="img/index/Photo.jpg" alt=""> -->
        <div class="banner__block">
            <h1 class="banner__heading">Let Your Home Be Unique</h1>
            <p class="banner__text">There are many variations of the passages of
                lorem Ipsum from available, majority.</p>
            <button class="banner__btn">Get Started
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        <img class="banner__img" :src="banner" alt="">
    </div>
    <section class="projects center">
        <div class="projects__header_center">
            <div class="projects__header_size">
                <h2 class="projects__heading">Follow Our Projects</h2>
                <p class="projects__text">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</p>
            </div>
        </div>
        <div class="projects__box">
            <div class="project" v-for="project in projects" :key="project.id">
                <img class="project__img right-top-corner" v-if="project.id % 4 === 1" :src="project.img" alt="project1">
                <img class="project__img left-top-corner" v-else-if="project.id % 4 === 2" :src="project.img" alt="project1">
                <img class="project__img right-bottom-corner" v-else-if="project.id % 4 === 3" :src="project.img" alt="project1">
                <img class="project__img left-bottom-corner" v-else-if="project.id % 4 === 0" :src="project.img" alt="project1">
                
                <div class="project__textBox">
                    <div>
                        <h3 class="project__heading">{{ project.heading }}</h3>
                        <p class="project__text">{{ project.text }}</p>
                    </div>
                    <div class="project__btn"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    </section>
    <section class="counter center">
        <div class="counter__box">
            <div class="counter__item">
                <h2 class="counter__heading">12</h2>
                <p class="counter__text">Years Of Experiance</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__heading">85</h2>
                <p class="counter__text">Success Project</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__heading">15</h2>
                <p class="counter__text">Active Project</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__heading">95</h2>
                <p class="counter__text">Happy CUstomers</p>
            </div>
        </div>

    </section>
    <section class="blog center">
            <div class="blog__header_center">
                <div class="blog__header_size">
                    <h2 class="blog__heading">Articles & News</h2>
                    <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
                </div>
            </div>
            <div class="articles">
                <div v-for="article in articles.slice(0, 3)" :key="article.id" class="article article_small">
                    
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
            </div>
    </section>
</template>

<script>
import SingleArticle from "./SingleArticle.vue";

    export default {
        components: { SingleArticle },
        data() {
            return {
                banner: require("@/assets/img/index/banner.jpg"),
                projects: [
                    {
                        id: 1,
                        img: require("@/assets/img/index/project1.jpg"),
                        heading: "Modern Kitchen",
                        text: "Decor / Artchitecture",
                    },
                    {
                        id: 2,
                        img: require("@/assets/img/index/project2.jpg"),
                        heading: "Modern Kitchen",
                        text: "Decor / Artchitecture",
                    },
                    {
                        id: 3,
                        img: require("@/assets/img/index/project3.jpg"),
                        heading: "Modern Kitchen",
                        text: "Decor / Artchitecture",
                    },
                    {
                        id: 4,
                        img: require("@/assets/img/index/project4.jpg"),
                        heading: "Modern Kitchen",
                        text: "Decor / Artchitecture",
                    },
                ],
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
            }
        },
    }
</script>

<style lang="scss" scoped>
.banner {
    // background-color: #F4F0EC;
    // border-radius: 10px;
    position: relative;
    margin-bottom: 96px;

    &__img {
        border-radius: 50px;
        background-color: #F4F0EC;
    }

    &__block {
        position: absolute;
        width: 434px; //36%;
        margin-top: 208px;
        margin-bottom: 208px;
        margin-left: 52px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 65px;
        font-weight: 400;
        line-height: 81px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }

    &__btn {
        border-radius: 18px;
        padding: 1rem 2rem;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #FFFFFF;
        background-color: #292F36;
        max-width: 50%;
    }

    i {
        color: #CDA274;

    }
}

.projects,
.blog {
    margin-bottom: 96px;

    &__header {
        &_center {
            text-align: center;
            margin-bottom: 93px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px; //93px;
        }

        &_size {
            width: 61%;
        }

        &_left {
            margin-bottom: 27px;
        }
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        color: #292F36;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        color: #4D5053;
    }

    &__box {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(548px, 1fr));
        column-gap: 8%; //104px; // 8%;
        row-gap: 56px;
    }
}

.project {
    // width: 46%;

    &__img {
        background-color: #C4C4C4;
        margin-bottom: 24px;
    }

    &__textBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__btn {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #F4F0EC;
        color: #292F36;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }
}

.right-top-corner {
    border-radius: 0 50px 0 0;
}

.right-bottom-corner {
    border-radius: 0 0 50px 0;
}

.left-top-corner {
    border-radius: 50px 0 0 0;
}

.left-bottom-corner {
    border-radius: 0 0 0 50px;
}
.counter {
    background-color: #F4F0EC;
    margin-bottom: 96px;

    &__box {
        display: flex;
        justify-content: space-between;
        padding: 151px 0;
    }

    &__item {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    &__item:not(:last-child) {
        border-right: 1px solid #CDA274;
        // width: 25%;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 85px;
        font-weight: 400;
        line-height: 106px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #CDA274;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }
}

.articles {
    // display: grid;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
}

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
        color: #4D5053;
        background-color: #FFF;
        border-radius: 5px 5px 5px 0;
    }

    &__text {
        width: 85%;//80%;
        // margin-bottom: 20px;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
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
        color: #4D5053;
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
        color: #292F36;
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