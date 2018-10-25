<template>
    <header class="main-header">
        <div class="layout-wrapper">
            <nav class="main-navigation">
                <div class="header-nav-logo">
                    <a href="javascript:;">
                        <!-- <img src="../assets/logo.svg" alt="nav-logo"> -->
                    </a>
                </div>
                <div class="header-navigation-search form-element has-addon">
                    <div class="form-element-addon">
                        <a href="javascript:;">
                            <i class="font-icon-magnifier"></i>
                        </a>
                    </div>
                    <input placeholder="Search free images" class="header-search" type="text" name="header-search">
                </div>
                <div class="navigation-cta" :class="{open: isMobileNavOpen}">
                    <ul class="navigation-items">
                        <li class="expandable"><a href="javascript:;">Collections</a>
                            <div class="navigation-item-foldout">
                                <ul class="foldout-list">

                                    <li class="item-foldout" v-for="(c, index) in collections" :key="index">
                                        <a href="javascript:;">{{c}}</a>
                                    </li>

                                </ul>
                                <div class="all-collections">
                                    <a href="javascript:;">Explore all collections <span class="font-icon-menu"></span></a>
                                </div>
                            </div>
                        </li>
                        <li><a href="javascript:;">Explore</a></li>
                    </ul>
                    <a href="javascript:;" class="btn outlined">Login</a>
                    <a class="close-mobile-nav hide-above-mobile" @click="openMobileNav" href="javascript:;"><i class="font-icon-x"></i></a>
                </div>
                <a @click="openMobileNav" class="open-mobile-nav hide-above-mobile" href="javascript:;">
                    <i class="font-icon-menu-horizontal"></i>
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            collections: ['Animals', 'Around the World', 'Arts', 'Backgrounds', 'Beauty', 'Business', 'Celebrate', 'Cinematography', 'Cities', 'Education', 'Family', 'Fashion', 'Fitness', 'Flowers', 'Recreation', 'Technology'],
            isMobileNavOpen: false
        }
    },

    methods: {
        openMobileNav() {
            this.isMobileNavOpen = !this.isMobileNavOpen;
        }
    }
}
</script>

<style>

</style>
