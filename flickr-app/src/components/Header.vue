<template>
    <header class="main-header">
        <div class="layout-wrapper">
            <nav class="main-navigation">
                <div class="header-nav-logo">
                    <a href="javascript:;">
                        <!-- <img src="../assets/logo.svg" alt="nav-logo"> -->
                    </a>
                </div>
                <div class="header-navigation-search form-element has-addon">
                    <div class="form-element-addon">
                        <a href="javascript:;" @click="searchPhoto('search', searchBar)">
                            <i class="font-icon-magnifier"></i>
                        </a>
                    </div>
                    <input @keyup.enter="searchPhoto('search', searchBar)" v-model="searchBar" placeholder="Search free images" class="header-search" type="text" name="header-search">
                </div>
                <div class="navigation-cta" :class="{open: isMobileNavOpen}">
                    <ul class="navigation-items">
                        <li class="expandable"><router-link :to="{ name: 'Collections' }">Collections</router-link>
                            <div class="navigation-item-foldout">
                                <ul class="foldout-list">

                                    <li class="item-foldout" v-for="(c, index) in collections" :key="index">
                                        <a href="javascript:;">{{c}}</a>
                                    </li>

                                </ul>
                                <div class="all-collections">
                                    <router-link :to="{ name: 'Collections' }">Explore all collections <span class="font-icon-menu"></span></router-link>
                                </div>
                            </div>
                        </li>
                        <li><router-link :to="{ name: 'Explore' }">Explore</router-link></li>
                    </ul>
                    <a href="javascript:;" class="btn outlined">Login</a>
                    <a class="close-mobile-nav hide-above-mobile" @click="openMobileNav" href="javascript:;"><i class="font-icon-x"></i></a>
                </div>
                <a @click="openMobileNav" class="open-mobile-nav hide-above-mobile" href="javascript:;">
                    <i class="font-icon-menu-horizontal"></i>
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
import axios from 'axios'
import {serverBus} from '../main'
import router from '../router'
import FlickrApi from '@/services/api/flickr'

export default {
    name: 'Header',
    data() {
        return {
            collections: ['Animals', 'Around the World', 'Arts', 'Backgrounds', 'Beauty', 'Business', 'Celebrate', 'Cinematography', 'Cities', 'Education', 'Family', 'Fashion', 'Fitness', 'Flowers', 'Recreation', 'Technology'],
            isMobileNavOpen: false,
            recentPhotos: [],
            searchBar: '',
            searchMode: 'search',
        }
    },

    methods: {
        openMobileNav() {
            this.isMobileNavOpen = !this.isMobileNavOpen;
        },

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
            });
            router.push({path: 'collection'});
        }
    }
}
</script>

<style>

</style>
