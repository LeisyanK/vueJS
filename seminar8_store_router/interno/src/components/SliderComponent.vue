<template>
    <div class="slider">
        <div class="imgBox">
            <img class="img" :src="currentImg" :class="{ resize: resizeFlag }" @dblclick="resizeFlag = !resizeFlag">
        </div>
        <!-- <div class=" buttons">
            <button id="prev">НАЗАД</button>
            <button id="next">ВПЕРЕД</button>
        </div> -->
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // projectImages: [require("@/assets/img/projects/bedroom1.jpg"), require("@/assets/img/projects/bedroom2.jpg"), require("@/assets/img/projects/bedroom3.jpg")],
                currentImg: require("@/assets/img/projects/Photo.png"),
                resizeFlag: false,
            }
        },        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 200px;
}

.img {
    border-radius: 50px;
    margin-bottom: 16px;
}

.resize {
    width: 100vw;
}

.dots {
    display: flex;
    justify-content: center;
}

.dot {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: solid 1px $headingColor;
    margin: 4px;
    cursor: pointer;
}

.dot-current {
    background-color: $headingColor;
}

#prev,
#next {
    background-color: $headingColor;
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
}

</style>