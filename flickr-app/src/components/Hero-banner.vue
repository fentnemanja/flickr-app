<template>
    <section>
        <div class="section-hero-banner">
            <div class="hero-banner-wrapper">
                <h1>Find your inspiration.<br>
                <span class="hero-heading-span">Gifted by the world’s most generous community of photographers.</span></h1>
                <div class="form-element has-addon hero-banner-search">
                    <div class="form-element-addon">
                        <a href="javascript:;" @click="searchPhoto" >
                            <i class="font-icon-magnifier"></i>
                        </a>
                    </div>
                    <input v-model="searchBar" placeholder="Search free images" type="text" name="hero-search" class="hero-search">
                    <p>{{searchBar}}</p>
                </div>
                <div class="popular-categories">
                    <span>Popular categories:</span>
                    <div class="tags-wrapper">
                        <a class="btn-tag" href="javascript:;">Technology</a>
                        <a class="btn-tag" href="javascript:;">Nature</a>
                        <a class="btn-tag" href="javascript:;">Apple</a>
                        <a class="btn-tag" href="javascript:;">Dogs</a>
                        <a class="btn-tag" href="javascript:;">Ikea</a>
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
        }
    },

    methods: {
        searchPhoto() {
            FlickrApi.normalPhotoSearch(this.searchBar, 1, 17).then(response => {
                var photos = response.photos.photo;
                photos.forEach(element => {
                    FlickrApi.getPhotoInfo(element.id).then(response => {
                        this.recentPhotos.push(response.photo);
                        serverBus.$emit('test', this.recentPhotos);
                    });
                });

                
            });

            
                console.log('slike iz testa');
                console.log(this.recentPhotos);
                
                
                router.push({path: 'collection'});
        }
    },

}
</script>

<style>

</style>
