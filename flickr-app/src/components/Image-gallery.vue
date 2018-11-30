<template>
    <section>

        <!-- <ul v-for="(post, index) in test" :key="index"> -->
            <!-- <p>{{post}}</p> -->

            <!-- <img :src="'http://farm'+post.farm+'.staticflickr.com/'+post.server+'/'+post.id+'_'+post.secret+'.jpg'" alt=""> -->

            <!-- <p>http://farm{{post.farm}}.staticflickr.com/{{post.server}}/{{post.id}}_{{post.secret}}.jpg</p> -->
        <!-- </ul> -->

        <ul>
            <li v-for="(photo, index) in recentPhotos" :key="index">

                <p>{{photo}}</p>
            </li>
        </ul>

        <a href="javascript:;" @click="loadMorePhotos(page++)">Load more photos</a>

        <div class="image-gallery component-wrapper">
            <div class="gallery-grid">
                <div class="image-tile" v-for="(photo, index) in recentPhotos" :key="index">
                    <div class="image-tile-header">
                        <div class="author-image"></div>
                        <div class="image-tile-header__info">
                            <span class="author-name">Nemanja Fent</span>
                            <span class="image-date">April 05, 2018</span>
                        </div>
                    </div>
                    <a href="javascript:;" @click="openLightbox(photo.farm, photo.server, photo.id, photo.secret)">
                        <div class="image-tile-img" :style="{backgroundImage: 'url('+'http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg'+')'}">
                        </div>
                    </a>
                    <div class="image-tile-info">
                        <div class="image-title">
                            <h4>{{photo.title}}</h4>
                        </div>
                        <div class="image-stats">
                            <ul>
                                <li><i class="font-icon-heart"></i><span>46</span></li>
                                <li><i class="font-icon-comment"></i><span>12</span></li>
                                <li><i class="font-icon-eye"></i><span>134k</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shot-overlay js-shot-overlay" :class="{hidden: isShotLightboxOpen}">
            <a @click="openLightbox" href="javascript:;" class="close-shot-lightbox">
                <span class="font-icon-x"></span>
            </a>
            <div class="overlay-content">
                <div class="shot-header">
                    <div class="shot-info-wrapper">
                        <a href="javascript:;">
                            <div class="author-image"></div>
                        </a>
                        <div class="shot-header-info">
                            <h3 class="shot-title">Simpler Times</h3>
                            <div class="shot-info">
                                <p>by <a class="image-author" href="javascript:;">Nemanja Fent</a></p>
                                <p>on <span class="image-date">10 September, 2018</span></p>
                            </div>
                        </div>
                        <div class="shot-header-cta">
                            <a href="javascript:;" class="btn btn-icon">
                                <span class="font-icon-heart"></span>
                                Like
                            </a>
                        </div>
                    </div>
                </div>
                <div class="shot-image">
                    <img :src="'http://farm'+this.lightboxPhoto.farm+'.staticflickr.com/'+this.lightboxPhoto.server+'/'+this.lightboxPhoto.id+'_'+this.lightboxPhoto.secret+'.jpg'" alt="">
                    <!-- <img src="https://images.pexels.com/photos/1472854/pexels-photo-1472854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"> -->
                    <!-- <img src="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"> -->
                </div>
                <div class="shot-footer-wrapper">
                    <div class="shot-comment-section">
                        <p class="photo-description">Working on a new identity for Swedish metal workshop</p>

                        <div class="comments-wrapper">
                            <h3>Responses</h3>

                            <ul>
                                <li class="comment">
                                    <div class="user-image"></div>
                                    <div class="user-info">
                                        <a href="javascript:;" class="username">Joe Dawson</a>
                                        <p class="user-comment">Loving the way you illustrated the motion lines! But, I'm also curious about the Teletubbies look ;)</p>
                                        <span class="comment-date">18 September, 2018</span>
                                    </div>
                                </li>

                                <li class="comment">
                                    <div class="user-image"></div>
                                    <div class="user-info">
                                        <a href="javascript:;" class="username">Joe Dawson</a>
                                        <p class="user-comment">Loving the way you illustrated the motion lines! But, I'm also curious about the Teletubbies look ;)</p>
                                        <span class="comment-date">18 September, 2018</span>
                                    </div>
                                </li>
                            </ul>
                            <div class="form-element">
                                <h3>Add new comment</h3>
                                <textarea class="comment-textbox" name="imagecomment"></textarea>
                                <a class="btn" href="javascript:;">Post comment</a>
                            </div>
                        </div>
                    </div>
                    <div class="shot-information-section">
                        <ul>
                            <li>
                                <div class="icon">
                                    <span class="font-icon-tag"></span>
                                </div>
                                <div class="shot-info">
                                    <a class="btn btn-tag" href="javascript:;">branding</a>
                                    <a class="btn btn-tag" href="javascript:;">logo</a>
                                    <a class="btn btn-tag" href="javascript:;">nature</a>
                                    <a class="btn btn-tag" href="javascript:;">dog</a>
                                    <a class="btn btn-tag" href="javascript:;">hobby</a>
                                </div>
                            </li>

                            <li class="shot-view-stats">
                                <div class="icon">
                                    <span class="font-icon-eye"></span>
                                </div>
                                <div class="shot-info">
                                    <span>1,893 views</span>
                                </div>
                            </li>

                            <li class="shot-like-stats">
                                <div class="icon">
                                    <span class="font-icon-heart"></span>
                                </div>
                                <div class="shot-info">
                                    <span>137 likes</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import FlickrApi from '@/services/api/flickr'

export default {
    name: 'Image-gallery',

    data() {
        return {
            isShotLightboxOpen: true,
            posts: null,
            recentPhotos: null,
            lightboxPhoto: [],
            page: 1,
        }
    },

    methods: {
        openLightbox(farm, server, id, secret) {
            this.lightboxPhoto = {farm:farm, server:server, id:id, secret:secret};
            
            this.isShotLightboxOpen = !this.isShotLightboxOpen;
            if(document.body.classList.contains('overflow-hidden')) {
                document.body.classList.remove('overflow-hidden');
            } else {
                document.body.classList.add('overflow-hidden');
            }
        },

        loadMorePhotos(page) {
            // console.log(this.page);

            // console.log(typeof[this.posts]);

            // console.log(this.posts);

            FlickrApi.getRecentPhotos(this.page, 10).then(response => {
                var photoArray = response.photos.photo;
                photoArray.forEach(element => {
                    this.recentPhotos.push(element);
                });

                // this.test.push(posts.photos.photo);
                console.log('posle update-a');
                console.log(this.recentPhotos);
            })
            
        }
    },

    created() {
        FlickrApi.getRecentPhotos(1, 10)
        .then(response => {
            this.posts = response
        console.log(this.posts);
            this.recentPhotos = response.photos.photo
        });
    }
}
</script>

<style>

</style>
