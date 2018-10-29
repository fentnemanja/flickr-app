<template>
    <div class="collection-page">
        <CollectionTile/>
    </div>
</template>

<script>
import CollectionTile from '@/components/Collection-tile';

export default {
    name: 'Collections-page',

    components: {
        CollectionTile: CollectionTile
    },

    data() {
        return {

        }
    }
}
</script>

<style>

</style>
