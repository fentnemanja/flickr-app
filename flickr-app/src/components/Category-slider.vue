<template>
    <section>
        <div class="category-slider component-wrapper">
            <div class="category-slider-wrapper">
                <div class="category-slider-header">
                    <h2>Guides</h2>
                    <a href="javascript:;">Show all from this category <span class="font-icon-double-arrow"></span></a>
                </div>
                <div class="category-slider-slick">
                    <slick ref="slick" :options="slickOptions">

                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>
                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>
                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>
                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>
                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>
                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>
                        <a href="javascript:;" class="category-tile">
                            <div class="category-image" style="background-image: url('https://images.pexels.com/photos/1536809/pexels-photo-1536809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')">
                                <span class="category">Sea food</span>
                                <h3>Tour de France</h3>
                                <span class="tile-description">Some description</span>
                            </div>
                        </a>

                    </slick>
                    <div class="slider-controlls">
                        <a href="javascript:;" class="arrow-back font-icon-arrow-left js-category-slider-left"></a>
                        <a href="javascript:;" class="arrow-next font-icon-arrow-right js-category-slider-right"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Slick from 'vue-slick'

export default {
    name: 'Category-slider',

    components: {
        Slick
    },

    data() {
        return {
            slickOptions: {
                slidesToShow: 5,
                variableWidth: true,
                prevArrow: document.getElementsByClassName('js-category-slider-left'),
                nextArrow: document.getElementsByClassName('js-category-slider-right')
            }
        }
    }
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';
</style>
