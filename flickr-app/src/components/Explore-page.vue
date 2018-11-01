<template>
    <section>
        <div class="explore-page">
            <CategorySlider/>
            <FeatureComponent/>
            <InspirationCategory/>
            <SliderComponent/>
        </div>
    </section>
</template>

<script>
import SliderComponent from '@/components/Slider-component';
import InspirationCategory from '@/components/Inspiration-category';
import CategorySlider from '@/components/Category-slider';
import FeatureComponent from '@/components/Feature-component';

export default {
    name: 'Explore-page',

    components: {
        SliderComponent: SliderComponent,
        InspirationCategory: InspirationCategory,
        CategorySlider: CategorySlider,
        FeatureComponent: FeatureComponent
    },

    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
