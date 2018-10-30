<template>
    <section>
        <div class="explore-page">
            <SliderComponent/>
        </div>
    </section>
</template>

<script>
import SliderComponent from '@/components/Slider-component';

export default {
    name: 'Explore-page',

    components: {
        SliderComponent: SliderComponent
    },

    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
