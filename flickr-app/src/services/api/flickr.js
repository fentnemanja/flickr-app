import axios from 'axios'

const apiKey = '14eaea0ba157f887037bd18b624945d0';
const baseUrl = 'https://api.flickr.com/services/rest/?method=';
const perPage = 10;
const page = 1;

export default {

    /*
    * getRecent
    * Returns a list of the latest public photos uploaded to flickr.
    * Arguments:
    *     -per_page (Number f photos to return per page)
    *     -page (the page of results to return)
    */

    getRecentPhotos(page, perPage) {
        var method = 'flickr.photos.getRecent';
        var url = baseUrl+method+`&`+`api_key=`+apiKey+`&`+`per_page=`+perPage+`&page=`+page+`&format=json&nojsoncallback=1`;
        
        return axios.get(url).then(response => {
            return response.data
        })
    },

    /*
    * getInfo
    * Get information about a photo. The calling user must have permission to view the photo.
    * Arguments:
    *    - photo_id (the id of the photo to get information for)
    * 
    */

    getPhotoInfo(photoId) {
        var method = 'flickr.photos.getInfo'
        var url = baseUrl+method+`&`+`api_key=`+apiKey+`&`+`photo_id=`+photoId+`&format=json&nojsoncallback=1`;

        return axios.get(url).then(response => {
            return response.data
        })
    },

    /*
    * getFavorites
    * Returns the list of people who have favorited a given photo.
    * Arguments:
    *    - photo_id (the id of the photo to get information for)
    *    - per_page (number of usres to return per page)
    * 
    */

    getPhotoFavorites(photoId) {
        var method = 'flickr.photos.getFavorites'
        var url = baseUrl+method+`&`+`api_key=`+apiKey+`&`+`photo_id=`+photoId+`&`+`per_page=`+1+`&format=json&nojsoncallback=1`;

        return axios.get(url).then(response => {
            return response.data
        })
    },


    /*
    * getComments
    * Returns the comments for a photo.
    * Arguments:
    *    - photo_id (the id of the photo to get information for)
    * 
    */

    getPhotoComments(photoId) {
        var method = 'flickr.photos.comments.getList'
        var url = baseUrl+method+`&`+`api_key=`+apiKey+`&`+`photo_id=`+photoId+`&format=json&nojsoncallback=1`;

        return axios.get(url).then(response => {
            return response.data
        })
    },

    /*
    * search
    * Return a list of photos matching some criteria
    * Arguments:
    *    - photo_id (the id of the photo to get information for)
    * 
    */

    search(text, page, perPage, searchMode) {
        var mode = '';
        var convertedText = text.replace(/\s+/g, '+');
        var method = 'flickr.photos.search'
        if(searchMode == 'search') {
            console.log('pretrazujem po search-u');
            mode = 'text';
        } else if (searchMode == 'tagSearch') {
            console.log('pretrazujem po tagu');
            mode = 'tags';
        }

        var url = baseUrl+method+`&`+`api_key=`+apiKey+`&`+mode+`=`+convertedText+`&`+`per_page=`+perPage+`&page=`+page+`&format=json&nojsoncallback=1`;

        return axios.get(url).then(response => {
            return response.data
        });

        console.log(url);
    },

    // normalPhotoSearch(text, page, perPage) {
    //     var convertedText = text.replace(/\s+/g, '+');
    //     var method = 'flickr.photos.search'
    //     var url = baseUrl+method+`&`+`api_key=`+apiKey+`&text=`+convertedText+`&`+`per_page=`+perPage+`&page=`+page+`&format=json&nojsoncallback=1`;

    //     return axios.get(url).then(response => {
    //         return response.data
    //     });

    //     console.log(url);
        
    // }
}