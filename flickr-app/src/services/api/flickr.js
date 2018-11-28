import axios from 'axios'

const apiKey = '14eaea0ba157f887037bd18b624945d0';
const baseUrl = 'https://api.flickr.com/services/rest/?method=';
const perPage = 10;
const page = 1;

export default {
    getRecentPhotos(page, perPage) {
        var method = 'flickr.photos.getRecent';
        var url = baseUrl+method+`&`+`api_key=`+apiKey+`&`+`per_page=`+perPage+`&page=`+page+`&format=json&nojsoncallback=1`;
        console.log(url);
        
        return axios.get(url).then(response => {
            return response.data
        })
    }
}