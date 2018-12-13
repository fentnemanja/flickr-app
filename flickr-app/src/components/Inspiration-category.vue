<template>
    <section>
        <div class="inspiration-category component-wrapper">
            <div class="inspiration-category-wrapper">
                <div class="header-section">
                    <h2>Food that will blow your mind</h2>
                    <a @click="searchPhoto('tagSearch', category)" href="javascript:;">Show all from this category
                        <span class="font-icon-double-arrow"></span>
                    </a>
                </div>
                <div class="category-tile-wrapper">
                    <div class="category-tile-row">
                        <div class="category-tile" v-for="(i, index) in items" :key="index">
                            <a @click="searchPhoto('tagSearch', i.title)" href="javascript:;">
                                <div class="tile-image" :style="{backgroundImage: 'url('+i.imgUrl+')'}"></div>
                                <div class="tile-image-detail">
                                    <h3 class="tile-title">{{i.title}}</h3>
                                    <span class="tile-description">{{i.description}}</span>
                                </div>
                            </a>
                        </div>
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
    name: 'Inspiration-category',

    data() {
        return {
            category: 'food',
            items: [
                {title: 'Meal', description: 'Food', imgUrl: 'https://images.unsplash.com/photo-1541401154946-62f8d84bd284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
                {title: 'Cakes', description: 'Desert', imgUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
                {title: 'Pizza', description: 'Fast food', imgUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
            ]
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
