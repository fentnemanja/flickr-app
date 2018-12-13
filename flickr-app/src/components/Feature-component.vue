<template>
    <section class="feature-section">
        <div class="feature-component component-wrapper">
            <div class="feature-wrapper">
                <div class="image-column">
                    <div class="image-section">
                        <div v-for="(i, index) in items" :key="index" :class="i.class + ' ' + 'feature-image'" :style="{backgroundImage: 'url('+i.imgUrl+')'}"></div>
                    </div>
                    <div class="image-section">
                        <div v-for="(i, index) in items2" :key="index" :class="i.class + ' ' + 'feature-image'" :style="{backgroundImage: 'url('+i.imgUrl+')'}"></div>
                    </div>
                </div>
                <div class="cta-column">
                    <h2>Features</h2>
                    <span class="feature-details">
                        Learn anything from anywhere of the world
                        and see the result for the best DIY
                    </span>
                    <span class="feature-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tenetur voluptatem molestiae cupiditate fuga deleniti explicabo voluptatibus voluptates laboriosam aut provident.
                    </span>
                    <a @click="searchPhoto('tagSearch', seeMoreBtn)"  href="javascript:;" class="round-btn green">See moree</a>
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
    name: 'Feature-component',

    data() {
        return {
            items: [
                {class: 'feature-image_first', imgUrl: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-0.3.5&s=fa2252ecf523b90b4a61074109cb691c&auto=format&fit=crop&w=334&q=80'},
                {class: 'feature-image_second', imgUrl: 'https://images.unsplash.com/photo-1540984258085-d788ce19df68?ixlib=rb-0.3.5&s=f07ad6a6038fe8545ce2b3e66b6a10dd&auto=format&fit=crop&w=334&q=80'}
            ],

            items2: [
                {class: 'feature-image_forth', imgUrl: 'https://images.unsplash.com/photo-1541052752014-5eaacd6ca38a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28058a5ec56d3bf2adf0eb1cbf2d626b&auto=format&fit=crop&w=334&q=80'},
                {class: 'feature-image_fifth', imgUrl: 'https://images.unsplash.com/photo-1541019656903-0df423a131cd?ixlib=rb-0.3.5&s=6a896a292d79ba444f4ae79ffd578d70&auto=format&fit=crop&w=401&q=80'}
            ],

            seeMoreBtn: 'Landscape'
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

</style>
