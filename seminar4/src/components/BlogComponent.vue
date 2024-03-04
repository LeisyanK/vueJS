<template>
    <section class="blog center blog_margin">
        <div class="blog__header_left">
            <div class="blog__header">
                <h2 class="blog__heading">Latest Post</h2>
            </div>
        </div>
        <div class="articles">
            <LatestPost></LatestPost>
            <!-- <div class="latestArticle article">
                <img :src="latestArticle" alt="статья">
                <div class="latestArticle__textBlock">
                    <div>
                        <div class="article__text">
                            <h2 class="article__heading">Low Cost Latest Invented Interior Designing Ideas</h2>
                        </div>
                        <p class="article__content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpis dignissim
                            maximus.posuere in.Contrary to popular
                            belief.
                        </p>
                        <p class="article__content">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    </div>

                    <div class="article__block">
                        <p class="article__date">26 December,2022</p>
                        <div class="article__btn"><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="blog__header_left">
            <div class="blog__header">
                <h2 class="blog__heading">Articles & News</h2>
            </div>
        </div>

        <div class="articles">
            <div v-for="article in articles.slice(0, 6)" :key="article.id" class="article article_small">
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
        <div class="pagination">
            <div class="pagination__btn pagination__btn_active">01</div>
            <div class="pagination__btn">02</div>
            <div class="pagination__btn">03</div>
            <div class="pagination__btn"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    </section>
</template>

<script>
import LatestPost from './LatestPost.vue';

    export default {
        components: { LatestPost },
        data() {
            return {
                latestArticle: require('@/assets/img/blog/latestArticle.jpg'),
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
            gap: 8px; 
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
        color: #292F36;;
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
        column-gap: 8%;
        row-gap: 56px;
    }
}
.articles {
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
        width: 85%;
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
        white-space: pre-line; 
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
.pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 51px;

    &__btn {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #FFF;
        color: #292F36;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #CDA274;

        &_active {
            background: #F4F0EC;
            border: 1px solid #F4F0EC;
        }
    }
}
</style>