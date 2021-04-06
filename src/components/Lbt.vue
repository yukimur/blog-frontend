<template>
    <Row class="lbt">
        <i-col class="swiper-container-left" v-swiper:mySwiper="swiperOption" span="20" :style="{'min-height':'100%'}">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="banner" v-for="banner in banners">
                    <img :src="banner" :style="{'background-size':'100% 100%','background-repeat':'no-repeat','width': '100%','height':'100%'}">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </i-col>
        <i-col class="swiper-container-right" span="4" :style="{}">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="banner" v-for="banner in banners" :style="{'margin-bottom':'10px'}">
                    <img :src="banner" :style="{'background-size':'100% 100%','background-repeat':'no-repeat','width': '100%','height':'100%'}">
                </div>
            </div>
        </i-col>
    </Row>
</template>

<style scoped> 
    .lbt{
        max-height:500px;
        max-width:100%;
    }
    .swiper-container-left {
        float: left;
        overflow: hidden;
    }  
    .swiper-container-right{
        float:right;
        margin-left:0px;
        line-height:90px!important;
    }
    .slide-thumb-active{
        opacity:0.5;
    }
</style>
<script>
    // import { Swiper, SwiperSlide, } from 'vue-awesome-swiper'
    import { directive, } from 'vue-awesome-swiper'
    import 'swiper/src/swiper.scss'

    export default {
        name: "Lbt",
        data() {
            return {
                banners: [ 'images/802.jpg', 'images/unnamed.jpg','images/802.jpg','images/802.jpg'],
                swiperOption: {
                    loop:true,
                    effect:"fade",
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    thumbs:{
                        swiper:{
                            el:".swiper-container-right",
                            direction:"vertical",
                            slidesPerView:4,
                            soaceBetween:10,
                            watchSlidesVisibility:true
                        },
                        // slideThumbActiveClass:"slide-thumb-active"
                    }
                }
            }
        },
        components: {
            // Swiper,
            // SwiperSlide,
        },
        directives: {
            swiper: directive
        },
        methods: {
            // onSwiper(swiper) {
            //     console.log(swiper);
            // },
            // onSlideChange() {
            //     console.log('slide change');
            // },
        },
        computed: {
            // swiper() {
            //     return this.$refs.mySwiper.$swiper
            // }
        },
        mounted() {
            console.log('Current Swiper instance object', this.mySwiper)
            // this.mySwiper.slideTo(3, 1000, false)
        }
    }

</script>