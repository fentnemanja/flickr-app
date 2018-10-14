<template>
    <header class="main-header">
        <div class="layout-wrapper">
            <nav class="main-navigation">
                <div class="header-nav-logo">
                    <a href="javascript:;">
                        <img src="../assets/logo.svg" alt="nav-logo">
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
                <div class="navigation-cta">
                    <ul class="navigation-items">
                        <li class="expandable"><a href="javascript:;">Collections</a>
                            <div class="navigation-item-foldout">
                                <ul class="foldout-list">
                                    <li class="item-foldout"><a href="javascript:">Animals</a>
                                        <ul>
                                            <li class="item-foldout-sub-item"><a href="javascript:;">Cats</a></li>
                                            <li class="item-foldout-sub-item"><a href="javascript:;">Dogs</a></li>
                                        </ul>
                                    </li>
                                    <li class="item-foldout"><a href="javascript:">Around the Wordl</a></li>
                                    <li class="item-foldout"><a href="javascript:">Arts</a></li>
                                    <li class="item-foldout"><a href="javascript:">Backgrounds</a></li>
                                    <li class="item-foldout"><a href="javascript:">Beauty</a></li>
                                    <li class="item-foldout"><a href="javascript:">Business</a>
                                        <ul>
                                            <li class="item-foldout-sub-item"><a href="javascript:;">Money</a></li>
                                            <li class="item-foldout-sub-item"><a href="javascrip:;">Products</a></li>
                                            <li class="item-foldout-sub-item"><a href="javascript:;">Retail</a></li>
                                        </ul>
                                    </li>
                                    <li class="item-foldout"><a href="javascript:">Celebrate</a></li>
                                    <li class="item-foldout"><a href="javascript:">Cinematography</a></li>
                                    <li class="item-foldout"><a href="javascript:">City</a></li>
                                    <li class="item-foldout"><a href="javascript:">Education</a></li>
                                    <li class="item-foldout"><a href="javascript:">Family</a></li>
                                    <li class="item-foldout"><a href="javascript:">Fashion</a></li>
                                    <li class="item-foldout"><a href="javascript:">Fitness</a></li>
                                    <li class="item-foldout"><a href="javascript:">Flowers</a></li>
                                    <li class="item-foldout"><a href="javascript:">Recreation</a></li>
                                    <li class="item-foldout"><a href="javascript:">Technology</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:;">Explore</a></li>
                    </ul>
                    <a href="javascript:;" class="btn outlined">Login</a>
                    <a class="close-mobile-nav hide-above-mobile" href="javascript:;"><i class="font-icon-x"></i></a>
                </div>
                <a class="open-mobile-nav hide-above-mobile" href="javascript:;">
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

        }
    }
}
</script>

<style>

</style>
