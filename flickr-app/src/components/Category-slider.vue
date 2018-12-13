<template>
    <section>
        <div class="category-slider component-wrapper">
            <div class="category-slider-wrapper">
                <div class="category-slider-header">
                    <h2>{{categoryTitle}}</h2>
                    <a @click="searchPhoto('search', categoryTitle)" href="javascript:;">Show all from this category <span class="font-icon-double-arrow"></span></a>
                </div>
                <div class="category-slider-slick">
                    <slick ref="slick" :options="slickOptions">
                        <a @click="searchPhoto('tagSearch', c.title)" v-for="(c, index) in category" :key="index" href="javascript:;" class="category-tile">
                            <div class="category-image" :style="{backgroundImage: 'url('+c.imgUrl+')'}">
                                <h3>{{c.title}}</h3>
                                <span class="tile-description">{{c.description}}</span>
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
import axios from 'axios'
import {serverBus} from '../main'
import router from '../router'
import FlickrApi from '@/services/api/flickr'
import Slick from 'vue-slick'

export default {
    name: 'Category-slider',

    components: {
        Slick
    },

    data() {
        return {
            slickOptions: {
                // slidesToShow: 5,
                variableWidth: true,
                swipeToSlide: true,
                prevArrow: document.getElementsByClassName('js-category-slider-left'),
                nextArrow: document.getElementsByClassName('js-category-slider-right'),
                infinite: false
            },

            category: [
                {title: 'Dog', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71d59cd22de21da8d2939bc203617983&auto=format&fit=crop&w=360&q=80'},
                {title: 'Cat', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=334&q=80'},
                {title: 'Horse', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ef77da895de0b5656a159d6914882bb&auto=format&fit=crop&w=334&q=80'},
                {title: 'Monkey', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1537871285173-eb73c57c6ef4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8417116425cd53d3b6bf15226804ebe5&auto=format&fit=crop&w=352&q=80'},
                {title: 'Shark', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1525219884637-43180fbb6455?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1371a6e37f839a85982134a23263a570&auto=format&fit=crop&w=695&q=80'},
                {title: 'Giraffe', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1527720324130-db5f4d6abf8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79f276de46757e03ef6063d54399528f&auto=format&fit=crop&w=334&q=80'},
                {title: 'Bird', description: 'Animals', imgUrl: 'https://images.unsplash.com/photo-1484704324500-528d0ae4dc7d?ixlib=rb-0.3.5&s=d1fb90f7e75d55aea6019988f168cff3&auto=format&fit=crop&w=750&q=80'},
            ],

            categoryTitle: 'Animals'
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
