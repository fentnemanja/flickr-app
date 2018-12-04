<template>
    <section>

        <!-- <ul v-for="(post, index) in test" :key="index"> -->
            <!-- <p>{{post}}</p> -->

            <!-- <img :src="'http://farm'+post.farm+'.staticflickr.com/'+post.server+'/'+post.id+'_'+post.secret+'.jpg'" alt=""> -->

            <!-- <p>http://farm{{post.farm}}.staticflickr.com/{{post.server}}/{{post.id}}_{{post.secret}}.jpg</p> -->
        <!-- </ul> -->

        <!-- <ul>
            <li v-for="(photo, index) in recentPhotos" :key="index">

                <p>{{photo}}</p>
                <br/>
            </li>
        </ul>
 -->
        <div class="image-gallery component-wrapper">
            <div class="title">
                <h2>Recent photos</h2>
            </div>
            <div class="gallery-grid">
                <div class="image-tile" v-for="(photo, index) in recentPhotos" :key="index">
                    <div class="image-tile-header">
                        <div class="author-image"
                            :style="{backgroundImage: 'url('+'http://farm'+photo.owner.iconfarm+'.staticflickr.com/'+photo.owner.iconserver+'/buddyicons/'+photo.owner.nsid+'.jpg'+')'}"></div>
                        <div class="image-tile-header__info">
                            <span class="author-name">{{photo.owner.username}}</span>
                            <span class="image-date">{{photo.dates.taken}}</span>
                        </div>
                    </div>
                    <a href="javascript:;" @click="openLightbox(photo)">
                        <div class="image-tile-img" :style="{backgroundImage: 'url('+'http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg'+')'}">
                        </div>
                    </a>
                    <div class="image-tile-info">
                        <div class="image-title">
                            <h4>{{photo.title._content}}</h4>
                        </div>
                        <div class="image-stats">
                            <ul>
                                <li><i class="font-icon-heart"></i><span>46</span></li>
                                <li><i class="font-icon-comment"></i><span>{{photo.comments._content}}</span></li>
                                <li><i class="font-icon-eye"></i><span>{{photo.views}}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="load-more">
                <a href="javascript:;" class="round-btn green" @click="loadMorePhotos(page++)">Load more photos</a>
            </div>

        </div>

        <div v-if="displayLightbox" class="shot-overlay js-shot-overlay" :class="{hidden: isShotLightboxOpen}">
            <a @click="closeLightbox" href="javascript:;" class="close-shot-lightbox">
                <span class="font-icon-x"></span>
            </a>
            <div class="overlay-content">
                <div class="shot-header">
                    <div class="shot-info-wrapper">
                        <a href="javascript:;">
                            <div class="author-image"
                                :style="{backgroundImage: 'url('+'http://farm'+this.lightboxPhoto.owner.iconfarm+'.staticflickr.com/'+this.lightboxPhoto.owner.iconserver+'/buddyicons/'+this.lightboxPhoto.owner.nsid+'.jpg'+')'}"></div>
                        </a>
                        <div class="shot-header-info">
                            <h3 class="shot-title">{{this.lightboxPhoto.title._content}}</h3>
                            <div class="shot-info">
                                <p>by <a class="image-author" href="javascript:;">{{this.lightboxPhoto.owner.username}}</a></p>
                                <p>on <span class="image-date">{{this.lightboxPhoto.dates.taken}}</span></p>
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
                        <h3>Description</h3>
                        <p v-html="lightboxPhoto.description._content" class="photo-description"></p>

                        <div class="comments-wrapper">
                            <h3>Comments</h3>

                            <ul>
                                <li class="comment" v-for="(comment, index) in photoComments" :key="index">
                                    <div class="user-info">
                                        <div class="user-image"
                                        :style="{backgroundImage: 'url('+'http://farm'+comment.iconfarm+'.staticflickr.com/'+comment.iconserver+'/buddyicons/'+comment.author+'.jpg'+')'}"></div>
                                        <a href="javascript:;" class="username">{{comment.authorname}}</a>
                                    </div>
                                    <div class="comment-info">
                                        <p v-html="comment._content" class="user-comment"></p>
                                        <!-- <span class="comment-date">18 September, 2018</span> -->
                                    </div>
                                </li>
                            </ul>
                            <!-- <div class="form-element">
                                <h3>Add new comment</h3>
                                <textarea class="comment-textbox" name="imagecomment"></textarea>
                                <a class="btn" href="javascript:;">Post comment</a>
                            </div> -->
                        </div>
                    </div>
                    <div class="shot-information-section">
                        <ul>
                            <li>
                                <div class="icon">
                                    <span class="font-icon-tag"></span>
                                </div>
                                <div class="shot-info">
                                    <a class="btn btn-tag" href="javascript:;" v-for="(tag, index) in this.lightboxPhoto.tags.tag" :key="index">{{tag.raw}}</a>
                                </div>
                            </li>

                            <li class="shot-view-stats">
                                <div class="icon">
                                    <span class="font-icon-eye"></span>
                                </div>
                                <div class="shot-info">
                                    <span>{{this.lightboxPhoto.views}}</span>
                                </div>
                            </li>

                            <li class="shot-like-stats">
                                <div class="icon">
                                    <span class="font-icon-heart"></span>
                                </div>
                                <div class="shot-info">
                                    <span>{{this.likes}}</span>
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
import {serverBus} from '../main'
import FlickrApi from '@/services/api/flickr'

export default {
    name: 'Image-gallery',

    data() {
        return {
            isShotLightboxOpen: true,
            // recentPhotos: [],
            lightboxPhoto: {
                description: {
                    _content: ''
                },
                title: {
                    _content: ''
                },
                owner: {
                    username: ''
                },
                views: '',
                dates: {
                    taken: ''
                },
                tags: {
                    tag:[{id:'asda'}, {raw:'iff'}]
                }
            },
            page: 1,
            likes: null,
            photoComments: null,
            displayLightbox: false,
            recentPhotos: [],
            searchMode: '',
        }
    },

    methods: {
        openLightbox(photo) {
            this.displayLightbox = true;
            this.lightboxPhoto = photo;

            FlickrApi.getPhotoFavorites(photo.id).then(response => {
                this.likes = response.photo.total;
            })

            FlickrApi.getPhotoComments(photo.id).then(response => {
                var comments = response.comments.comment;

                if(comments == true) {
                    this.photoComments = comments.slice(0, 5);
                } else {
                    console.log('nema komentara');
                    this.photoComments = [];
                }
            });
            
            this.isShotLightboxOpen = !this.isShotLightboxOpen;
            if(document.body.classList.contains('overflow-hidden')) {
                document.body.classList.remove('overflow-hidden');
            } else {
                document.body.classList.add('overflow-hidden');
            }
        },

        closeLightbox() {
            this.isShotLightboxOpen = !this.isShotLightboxOpen;
            if(document.body.classList.contains('overflow-hidden')) {
                document.body.classList.remove('overflow-hidden');
            } else {
                document.body.classList.add('overflow-hidden');
            }
        },

        loadMorePhotos(page) {
            if(this.$route.path == '/') {
                FlickrApi.getRecentPhotos(this.page, 10).then(response => {
                    var photoArray = response.photos.photo;
                    photoArray.forEach(element => {
                        FlickrApi.getPhotoInfo(element.id).then(response => {
                        this.recentPhotos.push(response.photo);
                        });
                    });
                });
            }

            if(this.searchMode == 'search') {
                console.log('klasicna pretraga');
                
            } else {
                console.log('pretraga po tagu');
                
            }
        }
    },

    // props: ['testPhotos'],

    created() {
        if(this.$route.path == '/') {
            // FlickrApi.getRecentPhotos(1, 10)
            // .then(response => {
            //     var nemanja = response.photos.photo;
            //     nemanja.forEach(element => {
            //         FlickrApi.getPhotoInfo(element.id).then(response => {
            //         this.recentPhotos.push(response.photo);
            //         });
            //     });
            // });
        }

        serverBus.$on('test', (recentPhotos) => {
            this.recentPhotos = recentPhotos;
            console.log('ovo je server');
        });
        

        console.log('posle ser vusa');
        console.log(this.recentPhotos);
        
        
    }
}
</script>

<style>

</style>
