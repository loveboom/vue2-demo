<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="msg in msgs"><img :src="msg.atturl" /></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import '../config/swiper.min';


export default {

  data () {
    return {
       msgs:[],
    }
  },  
  created: function() {
      //./src/pages/index/banner.json
      //http://192.168.1.234:8083/merchandise/goods/cat/list/all-cat    
      var that = this;
      axios.get('./src/pages/index/index.json')
        .then(function (response) {
            
            console.log('response.data.aid',response.data.data[0].atturl);
            const result = response.data;
            that.msgs=result.data;
        })
        .catch(function (error) {
            console.log(error);
        });
  },
  
  mounted:function(){
      console.log('ready');
      var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',
        observer:true,
        observerParents:true,
        loop: true,
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
    })  
  },
}
</script>
<style scoped>
    @import '../config/swiper.min.css';
    .swiper-container{
        width: 100%;
    }
    .swiper-slide{
        width: 100%;
        height:auto
    }
    .swiper-slide img{
        width: 100%;
        height:auto;
        display: block;
    }
</style>