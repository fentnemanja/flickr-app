<template>
		<div>
			<!-- <h2>Main content will be here</h2> -->
      <HeroBanner />
      <ImageGallery/>
		</div>
</template>

<script>
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
    }
  }
}
</script>

<style>

</style>
