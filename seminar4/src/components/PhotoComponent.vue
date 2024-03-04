<template>
    <div>
        <img :src="bigImg" width="400px">
        <div class="gallery">
            <img v-for="(cat, index) in cats" :key="index" :src="cat" alt="" @click="selectImg(cat)">
        </div>
    </div>
</template>

<script>
import img from "@/assets/img/cat3.jpg";
    export default {
        data() {
            return {
                bigImg: '',
                cats: {
                    cat1: require("@/assets/img/cat1.jpg"),
                    cat2: require("@/assets/img/cat2.jpg"),
                    cat3: img,
                }
            }
        },
        methods: {
            selectImg(cat) {
                this.bigImg = cat;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>