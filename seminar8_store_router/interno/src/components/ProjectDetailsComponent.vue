<template>
    <div class="project__banner">
        <img :src="projectDetailsBanner" alt="баннер">
    </div>
    <div class="project center">
        <div class="project__about">
            <h2 class="project__heading">Minimal Look Bedrooms</h2>
            <p class="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
                dignissim maximus.
                Aliquam
                sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in
                mi
                fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                <br><br>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc,
                mattis
                quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis
                convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                purus porttitor.</p>
        </div>
        <!-- <div class="project__slider">slider</div> -->
        <SliderComponent />
    </div>
</template>

<script>
import SliderComponent from '../components/SliderComponent.vue';

    export default {
        components: { SliderComponent },
        data() {
            return {
                projectDetailsBanner: require('@/assets/img/projects/Banner_project_details.jpg'),

            }
        },
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__banner {
    margin-bottom: 200px;

    img {
        width: 100%;
        background: #CDA274;
    }}

    &__about {
        width: 55%;
        margin-bottom: 100px;
    }
    &__heading {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
        margin-bottom: 12px;
    }
    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
    }
}

</style>