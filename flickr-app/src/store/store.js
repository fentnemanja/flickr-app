import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import FlickrApi from '@/services/api/flickr'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'My custom title',
        links: [
            'http://google.com',
            'http://youtube.com',
            'http://facebook.com'
        ],

        apiKey: '14eaea0ba157f887037bd18b624945d0',
        apiSecret: 'c7e0a676d98cba29',
        posts: null,
    },

    getters: {
        countLinks: state => {
            return state.links.length
        }
    },

    mutations: {
        SET_POSTS (state, payload) {
            state.posts = payload
        }
    },

    // actions: {
    //     GET_RECENT_PHOTOS(context, payload) {
    //         return FlickrApi.getRecentPhotos(payload.p, payload.pp).then(posts => {
    //             context.commit('SET_POSTS', posts)
    //         })
    //     }
    // }

    actions: {
        GET_RECENT_PHOTOS: (context, payload) => {
            return FlickrApi.getRecentPhotos(payload.p, payload.perPage).then(posts => {
                context.commit('SET_POSTS', posts)
            })
        }
    }
});