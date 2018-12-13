<template>
    <section class="inspiration-component">
        <div class="inspiration-component-wrapper">
            <div class="inspiration-component-content">
                <div class="inspiration-info">
                    <div class="inspiration-info-wrapper">
                        <span>Explore</span>
                        <h2>Top cities to visit</h2>
                        <p>Our Scandinavian roots inspire our philosophy: classic shoe forms refined and made with exceptional quality. Explore more about our inspiration, innovation & old-world craftsmanship.</p>
                        <a @click="searchPhoto('search', exploreAll)"  href="javascript:;" class="round-btn green">Explore all</a>
                    </div>
                </div>
                <div class="inspiration-slider">
                    <slick
                    ref="slick"
                    :options="slickOptions">
                        <a @click="searchPhoto('tagSearch', i.title)" href="javascript:;" v-for="(i, index) in items" :key="index">
                            <div class="slider-image" :style="{backgroundImage: 'url('+i.imgUrl+')'}">
                                <span>{{i.title}}</span>
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
import axios from 'axios'
import {serverBus} from '../main'
import router from '../router'
import FlickrApi from '@/services/api/flickr'
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
                swipeToSlide: true,
                prevArrow: document.getElementsByClassName('js-insp-slider-prev'),
                nextArrow: document.getElementsByClassName('js-insp-slider-next'),
            },

            items: [
                {title: 'Amsterdam', imgUrl: 'https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
                {title: 'Novi Sad', imgUrl: 'https://c1.staticflickr.com/8/7521/16277973692_91ffa97703_k.jpg'},
                {title: 'Greece', imgUrl: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
                {title: 'Spain', imgUrl: 'https://images.pexels.com/photos/597930/pexels-photo-597930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
                {title: 'London', imgUrl: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
            ],

            exploreAll: 'Cities'
        }
    },

    methods: {
        searchPhoto(searchMode, content) {
            this.recentPhotos = [];

            if(searchMode == 'search') {
                this.searchMode = searchMode;
            } else if (searchMode == 'tagSearch') {
                this.searchMode = searchMode;
            }
            FlickrApi.search(content, 1, 17, searchMode).then(response => {
                
            var photos = response.photos.photo;
            photos.forEach(element => {
                    FlickrApi.getPhotoInfo(element.id).then(response => {
                        this.recentPhotos.push(response.photo);
                    });
                });
                serverBus.$emit('test', this.recentPhotos);
                serverBus.$emit('searchMode', this.searchMode);
                serverBus.$emit('searchTerm', content);
                serverBus.$emit('resetPageNumber', 1);
            });

            if(this.$route.path == 'search') {
                return;
            } else {
                router.push({path: 'search'});
            }
        }
    }
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';
</style>
