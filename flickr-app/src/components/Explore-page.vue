<template>
    <section>
        <div class="explore-page">
            <CategorySlider/>
            <InspirationCategory/>
            <SliderComponent/>
        </div>
    </section>
</template>

<script>
import SliderComponent from '@/components/Slider-component';
import InspirationCategory from '@/components/Inspiration-category';
import CategorySlider from '@/components/Category-slider';

export default {
    name: 'Explore-page',

    components: {
        SliderComponent: SliderComponent,
        InspirationCategory: InspirationCategory,
        CategorySlider: CategorySlider
    },

    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
