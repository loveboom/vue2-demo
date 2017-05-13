<template>
    <div>
        <transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    	</transition>
        <foot></foot>
        <div style="width: 100%;height: 66px;background-color:#f6f6f6;"></div>
    </div>
</template>

<script>
import foot from './component/footer.vue'
export default {
    data (){
        return {}
    },
    components:{
        foot,
    }
}
</script>

<style scoped>
@import './css/common.css';
@import './less/common.less';
/*.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}*/
</style>
