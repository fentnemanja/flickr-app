<template>
    <section class="inspiration-component">
        <div class="inspiration-component-wrapper">
            <div class="inspiration-component-content">
                <div class="inspiration-info">
                    <div class="inspiration-info-wrapper">
                        <span>Explore</span>
                        <h2>Top cities to visit</h2>
                        <p>Our Scandinavian roots inspire our philosophy: classic shoe forms refined and made with exceptional quality. Explore more about our inspiration, innovation & old-world craftsmanship.</p>
                        <a href="javascript:;" class="round-btn green">Explore all</a>
                    </div>
                </div>
                <div class="inspiration-slider">
                    <slick
                    ref="slick"
                    :options="slickOptions">
                        <a href="javascript:;">
                            <div class="slider-image" style="background-image: url('https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')">
                                <span>Amsterdam</span>
                            </div>
                        </a>
                        <a href="javascript:;">
                            <div class="slider-image" style="background-image: url('https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')">
                                <span>Greece</span>
                            </div>
                        </a>
                        <a href="javascript:;">
                            <div class="slider-image" style="background-image: url('https://images.pexels.com/photos/597930/pexels-photo-597930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')">
                                <span>Spain</span>
                            </div>
                        </a>
                        <a href="javascript:;">
                            <div class="slider-image" style="background-image: url('https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')">
                                <span>London</span>
                            </div>
                        </a>
                        <a href="javascript:;">
                            <div class="slider-image" style="background-image: url('https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')">
                                <span>New York</span>
                            </div>
                        </a>
                    </slick>
                    <div class="slider-controlls">
                        <a class="arrow-back font-icon-arrow-left js-insp-slider-prev" href="javascript:;">
                        </a>
                        <a class="arrow-next font-icon-arrow-right js-insp-slider-next" href="javascript:;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Slick from 'vue-slick'

export default {
    name: 'Slider-component',

    components: {
        Slick
    },

    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                variableWidth: true,
                prevArrow: document.getElementsByClassName('js-insp-slider-prev'),
                nextArrow: document.getElementsByClassName('js-insp-slider-next'),
            }
        }
    }
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';
</style>
