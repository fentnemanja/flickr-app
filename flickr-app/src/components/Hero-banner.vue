<template>
    <section>
        <div class="section-hero-banner">
            <div class="hero-banner-wrapper">
                <h1>Find your inspiration.<br>
                <span class="hero-heading-span">Gifted by the world’s most generous community of photographers.</span></h1>
                <div class="form-element has-addon hero-banner-search">
                    <div class="form-element-addon">
                        <a href="javascript:;" @click="searchPhoto('search', searchBar)" >
                            <i class="font-icon-magnifier"></i>
                        </a>
                    </div>
                    <input @keyup.enter="searchPhoto('search', searchBar)" v-model="searchBar" placeholder="Search free images" type="text" name="hero-search" class="hero-search">
                    <p>{{searchBar}}</p>
                </div>
                <div class="popular-categories">
                    <span>Popular categories:</span>
                    <div class="tags-wrapper">
                        <!-- <a @click="searchPhoto('tagSearch', )" class="btn-tag" href="javascript:;">Technology</a> -->
                        <a @click="searchPhoto('tagSearch', tag)" v-for="(tag, index) in tags" :key="index" class="btn-tag" href="javascript:;">{{tag}}</a>
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

export default {
    name: 'Hero-banner',
    data() {
        return {
            recentPhotos: [],
            searchBar: '',
            searchMode: 'search',
            tags: ['Technology', 'Nature', 'iPhone', 'Dogs', 'Serbia', 'green apple'],
        }
    },

    methods: {
        searchPhoto(searchMode, content) {
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
            });
            router.push({path: 'collection'});
        }
    },

}
</script>

<style>

</style>
