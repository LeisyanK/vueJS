<template>
    <section class="blog-banner">
        <img :src="blogDetailsBanner" alt="баннер">
    </section>
    <section class="blog_flex center" id="app">
        <div class="blog-details">
            <div v-for="article in filteredArticle" :key="article.id" class="blog-details__article">
                <div class="blog-details__text">
                    <h2 class="blog-details__heading">{{ article.heading }}</h2>
                </div>
                <div class="blog-details__textBox">
                    <p class="blog-details__text"> {{ article.tag }}
                    </p>
                </div>
                <div class="blog-details__img">
                    <img :src="article.img" alt="статья">
                </div>
                <div class="blog-details__block">
                    <p class="blog-details__date">{{ article.date }}</p>
                    <div class="blog-details__date">Interior / Home / Decore</div>
                </div>
                <div class="blog-details__textBox">
                    <p class="blog-details__text"> {{ article.text }}
                    </p>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <h3 class="sidebar__heading">Tags</h3>
            <div class="sidebar__tags">
                <div class="tag" v-for="tag in tags" :key="tag.id" :class="{ active: tag.active }"
                    @click="findArticles(tag, $event)">{{ tag.text }}</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            blogDetailsBanner: require('@/assets/img/blog/Banner_blog_details.jpg'),
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
            filteredArticle: [],
            tags: [
                { text: "Kitchen", active: false },
                { text: "Bedroom", active: false },
                { text: "Living", active: false },
                { text: "Architecture", active: false },
                { text: "Kitchen Planning", active: false },
                { text: "Bedroom", active: false },
            ],
        }
    },
    methods: {
        findArticles(tag, $event) {
            console.log(tag);
            console.log($event.target.textContent);
            this.tags.forEach(tag => {
                tag.active = false;
            });
            tag.active = true;
            this.filteredArticle = this.articles.filter((article) => {
                return article.tag.includes(tag.text);
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.blog-banner {
    margin-bottom: 200px;

    img {
        width: 100%;
        background: #CDA274;
    }
}

.blog_flex {
    display: flex;
    margin-bottom: 96px;
}

.blog-details {
    width: 65%;

    &__img img {
        border-radius: 50px;
        width: 100%;
        margin-bottom: 46px;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
        margin-bottom: 16px;
    }

    &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* margin-bottom: 48px; */
    }

    &__text,
    &__date {
        white-space: pre-line;
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        margin-bottom: 48px;
        color: #4D5053;
    }

    &__text {
        text-align: justify;

        &_span {
            font-family: DM Serif Display;
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0.02em;
            text-align: left;
            color: #CDA274;
        }
    }

    &__item {
        display: flex;
        gap: 11px;
    }
}

.sidebar {
    position: sticky;
    top: 20%;
    width: 30%;
    margin-left: 4%;
    margin-bottom: 10%;
    /* float: right; */

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
        margin-bottom: 24px;
    }

    &__tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
}

.tag {
    border-radius: 10px;
    padding: 1rem 2rem;
    background: #F4F0EC;
    color: #292F36;
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;

    &:hover,
    .active {
        background: #292F36;
        color: #FFF;
    }
}

.active {
    background: #292F36;
    color: #FFF;
}
</style>