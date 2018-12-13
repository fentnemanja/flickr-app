<template>
    <section>
        <div class="collection-tiles component-wrapper">
            <div class="collection-tiles-wrapper">
                <ul>
                    <li v-for="(c, index) in collections" :key="index">
                        <a @click="searchPhoto('tagSearch', c.collectionName)" href="javascript:;">
                            <div class="tile-image" :style="{backgroundImage: 'url('+c.imgUrl+')'}">
                                <h2>{{c.collectionName}}</h2>
                                <span class="font-icon-long-arrow"></span>
                            </div>
                        </a>
                    </li>
                </ul>
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
    name: 'Collection-tile',
    data() {
        return {
            collections: [
                {collectionName: 'Animals', imgUrl: 'https://images.pexels.com/photos/2971/farm-animals-horses.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Beauty', imgUrl: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Cities', imgUrl: 'https://images.pexels.com/photos/358502/pexels-photo-358502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Fitness', imgUrl: 'https://images.pexels.com/photos/868757/pexels-photo-868757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Technology', imgUrl: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Education', imgUrl: 'https://images.pexels.com/photos/1166657/pexels-photo-1166657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Around the World', imgUrl: 'https://images.pexels.com/photos/269850/pexels-photo-269850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Backgrounds', imgUrl: 'https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Celebrate', imgUrl: 'https://images.pexels.com/photos/712323/pexels-photo-712323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Business', imgUrl: 'https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Sport', imgUrl: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'School', imgUrl: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Family', imgUrl: 'https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Fashion', imgUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {collectionName: 'Nature', imgUrl: 'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
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
