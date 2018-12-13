<template>
    <div class="collection-page">
        <CollectionBanner/>
        <ImageGallery/>
    </div>
</template>

<script>
import CollectionBanner from '@/components/Collection-banner';
import ImageGallery from '@/components/Image-gallery';

export default {
    name: 'Search',

    components: {
        CollectionBanner: CollectionBanner,
        ImageGallery: ImageGallery
    },

    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
