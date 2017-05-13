<template>
    <div class="footer">
        <router-link to="/home">
            <span class="selectedSpan">
                <i class="iconfont" style="font-size: 50px;">&#xe622;</i><br/>
                首页
            </span>
        </router-link>
        <router-link to="/page">
            <span>
                <i class="iconfont" style="font-size: 50px;">&#xe601;</i><br/>
                分类
            </span>
        </router-link>
        <router-link to="/">
            <span style="line-height: 0.36rem;padding-top: 0.08rem;">
                <i class="iconfont">&#xe604;</i><br/>
                品牌馆
            </span>
        </router-link>
        <router-link to="/">
            <span>
                <i class="iconfont">&#xe6f0;</i><br/>
                购物车
            </span>
        </router-link>
        <router-link to="/">
            <span>
                <i class="iconfont" style="font-size: 50px">&#xe60f;</i><br/>
                我的
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data (){
            return{

            }
        },
        mounted(){
            $('.footer span').on('click',function(){
                $('.footer span').removeClass('selectedSpan');
                $(this).addClass('selectedSpan');
            })
        }
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        padding: 6px 0;
        background-color: #fff;
        border-top: 1px solid #eee;
        overflow: hidden;
    }
    .footer span{
        float: left;
        margin-top: 16px;
        width: 20%;
        text-align: center;
        line-height: 0.44rem;
        font-size: 20px;
        color: #999;
    }
    .footer span i{
        font-size: 60px;
    }
    .footer .selectedSpan{
        color: #fc3e32;
    }
</style>