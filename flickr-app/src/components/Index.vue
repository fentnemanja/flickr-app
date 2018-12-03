<template>
		<div>
			<!-- <h2>Main content will be here</h2> -->
      <HeroBanner />
      <ImageGallery :recentPhotos="recentPhotos"></ImageGallery>
		</div>
</template>

<script>
import axios from 'axios'
import FlickrApi from '@/services/api/flickr'
import HeroBanner from '@/components/Hero-banner';
import ImageGallery from '@/components/Image-gallery';

export default {
  name: 'Index',

  components: {
    HeroBanner: HeroBanner,
    ImageGallery: ImageGallery
  },

  data () {
    return {
      recentPhotos: [],
    }
  },

  created() {
    FlickrApi.getRecentPhotos(1, 10)
      .then(response => {
          var nemanja = response.photos.photo;
          nemanja.forEach(element => {
              FlickrApi.getPhotoInfo(element.id).then(response => {
              this.recentPhotos.push(response.photo);
              });
          });
      });
  }


}
</script>

<style>

</style>
