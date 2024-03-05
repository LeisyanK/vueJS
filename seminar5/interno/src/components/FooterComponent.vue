<template>
    <footer class="footer center">
            <div class="about">
                <div class="logo">
                    <img class="logo__img" :src="logo" alt="логотип">
                    <p class="logo__text">Interno</p>
                </div>
                <p class="about__text">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div class="pages">
                <h2 class="pages__heading">Pages</h2>
                <a href="#" class="pages__link">Home</a>
                <a href="#" class="pages__link">Project</a>
                <a href="#" class="pages__link">Blog</a>
            </div>
            <div class="contacts">
                <h2 class="contacts__heading">Contact</h2>
                <p class="contacts__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="contacts__text">contact@interno.com</p>
                <p class="contacts__text">(123) 456 - 7890</p>
            </div>
        </footer>
</template>

<script>
    export default {
        data() {
            return {
                logo: require("@/assets/img/Logo.png"),
            }
        },
    }
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: start;
    // flex-direction: column;

    .about {
        width: 33%;

        &__text {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #4D5053;
            margin-top: 18px;
            margin-bottom: 30px;
        }
    }

    .icons {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 54px;
    }

    .pages,
    .contacts {
        width: 28%;
        padding-left: 2%;

        &__heading {
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            line-height: 31px;
            letter-spacing: 0em;
            text-align: left;
            color: #292F36;
            margin-bottom: 66px;
        }

        &__link,
        &__text {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #292F36;
            margin-bottom: 66px;
        }
    }

    .pages__link {
        display: block;
    }
}
</style>