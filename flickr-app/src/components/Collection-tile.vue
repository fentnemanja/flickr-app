<template>
    <section>
        <div class="collection-tiles component-wrapper">
            <div class="collection-tiles-wrapper">
                <ul>
                    <li v-for="(c, index) in collections" :key="index">
                        <a href="javascript:;">
                            <div class="tile-image" style="background-image: url('https://images.pexels.com/photos/356807/pexels-photo-356807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')">
                                <h2>{{c}}</h2>
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
export default {
    name: 'Collection-tile',
    data() {
        return {
            collections: ['Animals', 'Beauty', 'Cities', 'Fitness', 'Technology', 'Education', 'Around the World', 'Arts', 'Backgrounds', 'Celebrate', 'Business', 'Cinematography', 'Family', 'Fashion', 'Flowers', 'Sport']
        }
    }
}
</script>

<style>

</style>
