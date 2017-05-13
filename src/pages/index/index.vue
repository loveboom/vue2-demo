<template>
    <div id="One">
        <div class="searchBar">
            <input v-model="value" class="iconfont" placeholder="输入商品名称或关键字" />
            <i class="iconfont">&#xe602;</i>
        </div>
        <slide></slide>
        <div class="navBar">
            <template v-for="tab in tabs">
                <a :href="tab.path">
                    <p class="linkIcon">
                        <span><img :src="tab.url"></span><br/>
                        <i>{{ tab.name }}</i>
                    </p>
                </a>
            </template>
        </div>
        <router-link to="/home">
            <div class="saleSection">
                <div class="flashSale">
                    <h1>限时抢购</h1>
                    <p>剩余时间</p>
                    <endtime></endtime>
                </div>
                <div class="hot">
                    <p class="hotTitle">{{title}}</p>
                    <p class="oldPrice">&yen;{{oldPrice}}</p>
                    <p class="newPrice"><i style="font-size: 26px;">&yen;</i>{{newPrice}}</p>
                    <span class="hotimg"><img :src="imgUrl" :alt="title"></span>
                </div>
            </div>
        </router-link>
        
        <div class="secbanner">
            <router-link to="/home">
                <img :src="secbanner" alt="">
            </router-link>
        </div>
        
        <div class="singleProduct">
            <router-link to="/home">
                <div class="product1">
                    <span><img :src="singles[0].url" alt=""></span>
                </div>
            </router-link>
            <router-link to="/home">
                <div class="product2">
                    <i>{{singles[1].title}}</i><br/>
                    <span><img :src="singles[1].url" :alt="singles[1].url"></span>
                </div>
            </router-link>
            <router-link to="/home">
                <div class="product3">
                    <i>{{singles[2].title}}</i><br/>
                    <span><img :src="singles[2].url" :alt="singles[2].title"></span>
                </div>
            </router-link>
            <router-link to="/home">
                <div class="productName">
                    <span><img src="/src/component/img/singleIcon.jpg" alt="最优最省钱"></span><br/>
                    <i>最优最省钱</i>
                </div>
            </router-link>
            <router-link to="/home">
                <div class="product4">
                    <span><img :src="singles[4].url" alt=""></span>
                </div>
            </router-link>
            <router-link to="/home">
                <div class="product5">
                    <span><img :src="singles[3].url" alt=""></span>
                </div>
            </router-link>
        </div>

        <div class="dailyNew">
            <div class="dailyTitle">
                <h1>每日新品</h1>
            </div>
            <div class="goodsLine">
                <div ref="lineWidth">
                    <ul class="goodsItem" v-for="good in goods">
                        <li class="goodsImg"><img :src="good.url" alt=""></li>
                        <li class="goodsTitle">{{good.title}}</li>
                        <li class="goodsPrice"><i>&yen;{{good.newPrice}}</i>&nbsp;&nbsp;<i>&yen;{{good.oldPrice}}</i></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="brandCommend">
            <div class="dailyTitle">
                <h1>品牌推荐</h1>
            </div>
            <div class="brands">
                <template v-for="brand in brands">
                    <router-link to="/home">
                        <div><span><img :src="brand.url" alt=""></span></div>
                    </router-link>
                </template>
            </div>
        </div>

        <div class="advertBanner">
            <router-link to="/home">
                <img :src="advertBanner" alt="">
            </router-link>
        </div>

        <div class="selectCategory">
            <div class="dailyTitle" style="border-bottom: none;">
                <h1>精选分类</h1>
            </div>
            <div class="selectItems" v-for="(ss,index) in selectItems">
                <div class="itemHead" :style="{backgroundColor:bgColor[index]}">
                    <span>{{ss.name}}</span>
                    <span class="shu"></span>
                    <span class="thisTitle">{{ss.title}}</span>
                    <router-link to="/home"><span class="iconfont more">更多&#xe603;</span></router-link>
                </div>
                <div class="goodsList">
                    <router-link to="/home">
                        <ul class="oneGood" v-for="gd in ss.goods">
                            <li class="gdImg"><span><img :src="gd.url" alt="gd.newtitle"></span></li>
                            <li class="gdTitle">{{gd.newtitle}}</li>
                            <li class="goodsPrice" style="margin-top: 10px;"><i>&yen;{{gd.newPrice}}</i>&nbsp;&nbsp;<i>&yen;{{gd.oldPrice}}</i></li>
                        </ul>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="secbanner">
            <router-link to="/home">
                <img :src="secbannerTwo" alt="">
            </router-link>
        </div>

        <div class="flowBox">
            <div class="iconfont flowHead">
                &#xe61d;&nbsp;大家都在买
            </div>
            <div class="flowContent">
                <router-link to="/">
                <div class="flowItem" v-for="like in allLikes">
                    <span class="likeImg"><img :src="like.url" alt="like.newtitle"></span>
                    <p class="likeTitle">{{like.newtitle}}</p>
                    <div class="goodsPrice" style="position: relative; margin:0 auto ;margin-top: 10px;width: 94%;">
                        <i>&yen;{{like.newPrice}}</i>&nbsp;&nbsp;
                        <i>&yen;{{like.oldPrice}}</i>
                        <a class="iconfont buyCar">&#xe600;</a>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import slide from '../../component/slider.vue';
    import endtime from '../../component/endTime.vue';
    export default {
        data() {
            return {
                author: " 研发部 林江涛",
                value: '',
                tabs:[
                    {name:'蜜饯干果',url:'/src/component/img/icon-1.jpg', path: '/a'},
                    {name:'饼干糕点',url:'/src/component/img/icon-2.jpg', path: '/b'},
                    {name:'坚果炒货',url:'/src/component/img/icon-3.jpg', path: '/c'},
                    {name:'肉类熟食',url:'/src/component/img/icon-4.jpg', path: '/d'},
                    {name:'糖果果冻',url:'/src/component/img/icon-5.jpg', path: '/e'}
                ],
                title:'进口美国脐橙四个',
                oldPrice:'19.00',
                newPrice:'13.00',
                imgUrl:'/src/component/img/hotimg.jpg',
                secbanner:'/src/component/img/sec_banner.jpg',
                secbannerTwo:'/src/component/img/sec_banner1.jpg',
                singles:[
                    {title:'',url:'/src/component/img/singleImg1.jpg'},
                    {title:'乐事黄瓜薯片',url:'/src/component/img/singleImg2.jpg'},
                    {title:'岁岁念嗨呗牛椰糕点',url:'/src/component/img/singleImg3.jpg'},
                    {title:'',url:'/src/component/img/singleImg4.jpg'},
                    {title:'',url:'/src/component/img/singleImg5.jpg'},
                ],
                goods:[
                    {title:'上好佳薯片39g上好佳薯片39g',url:'/src/component/img/singleImg1.jpg',newPrice:'3.80',oldPrice:'4.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg2.jpg',newPrice:'13.80',oldPrice:'14.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg3.jpg',newPrice:'15.20',oldPrice:'17.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg4.jpg',newPrice:'23.80',oldPrice:'24.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg1.jpg',newPrice:'33.80',oldPrice:'34.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg2.jpg',newPrice:'13.80',oldPrice:'24.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg3.jpg',newPrice:'13.80',oldPrice:'14.28'},
                    {title:'上好佳薯片39g',url:'/src/component/img/singleImg4.jpg',newPrice:'23.80',oldPrice:'24.28'},
                ],
                brands:[
                    {url:'/src/component/img/brandImg1.jpg'},
                    {url:'/src/component/img/brandImg2.jpg'},
                    {url:'/src/component/img/brandImg3.jpg'},
                    {url:'/src/component/img/brandImg4.jpg'},
                    {url:'/src/component/img/brandImg5.jpg'},
                    {url:'/src/component/img/brandImg6.jpg'},
                ],
                advertBanner:'/src/component/img/advertBanner.jpg',
                bgColor:['#34daf0','#ffc64b','#fc97dd','#41eba1'],
                selectItems:[
                    {
                        name:'坚果炒货',
                        title:'一口一个嘎嘣脆，全球好果都咬碎',
                        goods:[
                            {url:'/src/component/img/selectImg1.jpg',newtitle:'金逸奶香味夏威夷果金逸奶香味夏威夷果',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg2.jpg',newtitle:'金逸原文开心果',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg3.jpg',newtitle:'金逸夏威夷果仁',newPrice:'17.80',oldPrice:'19.20'},
                        ],
                    },
                    {
                        name:'干果蜜饯',
                        title:'缤纷鲜果配，酸甜好滋味',
                        goods:[
                            {url:'/src/component/img/selectImg4.jpg',newtitle:'UC甄国梅',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg5.jpg',newtitle:'优果李果干',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg6.jpg',newtitle:'小美铺子草莓干58g',newPrice:'17.80',oldPrice:'19.20'},
                        ],
                    },
                    {
                        name:'点心糕点',
                        title:'甜蜜糕点，软甜嗲糯的幸福',
                        goods:[
                            {url:'/src/component/img/selectImg7.jpg',newtitle:'椰子榴莲薄饼128g',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg8.jpg',newtitle:'徐福记草莓酥182g',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg9.jpg',newtitle:'岁岁念牛椰糕点120g',newPrice:'17.80',oldPrice:'19.20'},
                        ],
                    },
                    {
                        name:'肉类熟食',
                        title:'无肉不欢，嚼劲十足',
                        goods:[
                            {url:'/src/component/img/selectImg1.jpg',newtitle:'迈上尤为牛肉80g',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg2.jpg',newtitle:'金润猪肉铺100g',newPrice:'17.80',oldPrice:'19.20'},
                            {url:'/src/component/img/selectImg3.jpg',newtitle:'白影虎皮凤爪28g',newPrice:'17.80',oldPrice:'19.20'},
                        ],
                    },
                ],
                allLikes:[
                    {url:'/src/component/img/selectImg1.jpg',newtitle:'金逸奶香味夏威夷果金逸奶香味夏威夷果',newPrice:'17.80',oldPrice:'19.20'},
                    {url:'/src/component/img/selectImg2.jpg',newtitle:'金逸原文开心果',newPrice:'17.80',oldPrice:'19.20'},
                    {url:'/src/component/img/selectImg3.jpg',newtitle:'金逸夏威夷果仁',newPrice:'17.80',oldPrice:'19.20'},
                    {url:'/src/component/img/selectImg1.jpg',newtitle:'金逸奶香味夏威夷果金逸奶香味夏威夷果',newPrice:'17.80',oldPrice:'19.20'},
                    {url:'/src/component/img/selectImg2.jpg',newtitle:'金逸原文开心果',newPrice:'17.80',oldPrice:'19.20'},
                    {url:'/src/component/img/selectImg3.jpg',newtitle:'金逸夏威夷果仁',newPrice:'17.80',oldPrice:'19.20'},
                ],
            }
        },
        created: function (){
            console.log('created');
            $(window).scroll(function(){
                console.log('onScroll');
                const windowHeight = $(this).height();//当前窗口高度
                const docHeight = $(document).height();//整个文档高度
                const scrollTop = $(this).scrollTop(); //滑动距离
                console.log('windowHeight',windowHeight);
                console.log('windowHeight',docHeight);
                console.log('scrollTop',scrollTop);
            })
        },
        mounted: function (){
            console.log('this.goods.length',this.goods.length);
            const goodsLength = this.goods.length;
            this.$refs.lineWidth.style.width = goodsLength*216/75+'rem';
        },
        components:{
            slide,
            endtime
        },
        methods: {
            
        }
    }
</script>

<style scoped>
#One{
    background-color: #f6f6f6;
}
.font{
    font-size: 1rem
}
.searchBar{
    padding: 12px 16px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
}
.searchBar input{
    flex: 0.90;
    height: 60px;
    line-height: 70px;
    text-align: center;
    background:url(/src/component/img/search.png) no-repeat 2.3rem center;
    background-size: 0.4rem;
    background-color: #eee;
    font-size: 22px;
    color: #aaa;
    
}
/*.searchBar input:focus{
    background-image:none;
}*/
.searchBar i{
    flex: 0.06;
    margin-left: 0.1rem;
    font-size: 0.57rem;
    text-align: center;
}
.navBar{
    padding: 24px 10px;
    background-color: #fff;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
}
.linkIcon{
    flex: 0.2;
    line-height: 40px;
    text-align: center;
}
.linkIcon span{
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    overflow: hidden;
}
.linkIcon span img{
    width: 100%;
    height: auto;
}
.linkIcon i{
    font-size: 24px;
    color: #333
}
.linkIcon:active i{
    color: #fc3e32;
}
.saleSection{
    margin-top: 16px;
    background-color: #fff;
    display: -webkit-flex;
    display: flex;
    justify-content:space-around;
}
/*.saleSection:active{
    background-color: #f6f6f6;
}*/
.flashSale{
    flex: 0.3;
    padding: 22px 0 68px 16px;
    border-right: 1px solid #f0f0f0;
}
.flashSale h1{
    font-family: "微软雅黑";
    font-size: 32px;
    font-weight: bold;
    color: #333;
}
.flashSale p{
    margin-top: 18px;
    font-size:22px;
    color: #999; 
}
.hot{
    flex: 0.7;
    position: relative;
}
.hotTitle{
    margin-top: 22px;
    margin-left: 24px;
    width: 144px;
    font-size: 24px;
    font-weight: 600;
    color: #666;
    line-height: 36px;
}
.oldPrice{
    margin-left: 24px;
    margin-top: 10px;
    font-size: 24px;
    color: #999;
    text-decoration: line-through;
}
.newPrice{
    margin-left: 24px;
    font-family: Arial;
    font-size: 34px;
    font-weight: bold;
    color: #fe3e32;
}
.hotimg{
    position: absolute;
    right: 30px;
    bottom: 0;
    width: 242px;
    height: 242px;
}
.hotimg img{
    display: block;
    width: 100%;
    height: auto;
}
.secbanner{
    width: 100%;
    margin-top: 16px;
}
.secbanner img{
    display: block;
    width: 100%;
    height: auto;
}
.singleProduct{
    width: 100%;
    margin-top: 16px;
    background-color: #fff;
    overflow: hidden;
}

.singleProduct a div{
    float: left;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
    overflow: hidden;
}
.singleProduct a:nth-child(3n+0) div{
    border-right: none;
}
.singleProduct a:nth-child(4) div{
    border-bottom: none;
}
.singleProduct a:nth-child(5) div{
    border-bottom: none;
}
.singleProduct a:nth-child(6) div{
    border-bottom: none;
}
.product1{
    width: 33%;
    height: 212px;
}
.product1 span{
    display: inline-block;
    /*margin-left: 12px;*/
    margin-top: 6px;
    width: 200px;
    height: 200px;
}
.product2{
    width: 32%;
    height: 212px;
}
.product3{
    width: 34.5%;
    height: 212px;
}
.product2 i,.product3 i{
    display: inline-block;
    margin-top: 16px;
    font-size: 24px;
    color: #666;
}
.product2 span,.product3 span{
    display: inline-block;
    margin-top: 6px;
    width: 150px;
    height: 150px;
}
.product1 span img,.product2 span img,.productName span img,.product3 span img,.product4 span img,.product5 span img{
    width: 100%;
    height: auto;
}
.productName{
    width: 33%;
    height: 180px;
}
.productName span{
    display: inline-block;
    margin-top: 40px;
    width: 216px;
    height: 66px;
}
.productName i{
    margin-top: 16px;
    font-size: 28px;
    color: #666;
}
.product4{
    width: 32%;
    height: 180px;
}
.product4 span,.product5 span{
    display: inline-block;
    margin-top: 12px;
    width: 156px;
    height: 156px;
}
.product5{
    width: 33%;
    height: 180px;
}
.dailyNew{
    margin-top: 16px;
    background-color: #fff;
}
.dailyTitle{
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #f0f0f0;
}
.dailyTitle h1{
    margin-left: 16px;
    font-size: 30px;
    color: #333;
}
.goodsLine{
    padding: 16px 0 40px 0;
    width: 100%;
    overflow-x: auto;
}
.goodsItem{
    display: inline-block;
    margin: 0 16px 0 16px;
}
.goodsItem li{
    width: 180px;
    text-align: center;
}
.goodsImg{
    height: 180px;
    overflow: hidden;
}
.goodsImg img{
    width: 100%;
    height: auto;
}
.goodsTitle{
    overflow: hidden;
    margin-top: 20px;
    font-size: 24px;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goodsPrice i:first-child{
    font-family: Arial;
    font-size: 28px;
    color: #fc3e32;
}
.goodsPrice i:nth-child(2){
    font-family: Arial;
    font-size: 22px;
    color: #999;
    text-decoration: line-through;
}
.brandCommend{
    margin-top: 16px;
    width: 100%;
    background-color: #fff;
}
.brands{
    width: 100%;
    overflow: hidden;
}
.brands div{
    float: left;
    width: 33.3%;
    padding: 0.2rem 0;
    text-align: center;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
}
.brands div:nth-child(3n+0){
    border-right: none;
}
.brands div:nth-child(4),.brands div:nth-child(5),.brands div:nth-child(6){
    border-bottom: none;
}
.brands div span{
    display: inline-block;
    margin-top: 18px;
    width: 216px;
    height: 90px;
    overflow: hidden;
}
.brands div span img{
    width: 100%;
    height: auto;
}
.advertBanner{
    width: 100%;
    margin-top: 16px;
}
.advertBanner img{
    display: block;
    width: 100%;
    height: auto;
}
.selectCategory{
    width: 100%;
    margin-top: 16px;
    background-color: #fff;
}
.itemHead{
    width: 100%;
    height: 70px;
    line-height: 70px;
    overflow: hidden;
}
.itemHead span{
    float: left;
    margin-left: 12px;
    margin-top: 1px;
    color: #fff;
}
.itemHead span:first-child{
    margin-left: 16px;
    font-size: 28px;
    font-weight: 700;
}
.itemHead .shu{
    margin-top: 20px;
    width: 1px;
    height: 30px;
    background-color: #fff;
}
.itemHead .more{
    float: right;
    margin-right: 16px;
}
.thisTitle{
    font-size: 28px;
}
.goodsList{
    width: 100%;
    overflow: hidden;
}
.oneGood{
    float: left;
    width: 33.2%;
    padding: 16px 0 30px 0;
    border-right: 1px solid #f0f0f0;
}
.oneGood:last-child{
    border-right: none;
}
.oneGood li{
    padding: 0 16px;
    text-align: center;
}
.gdImg span{
    width: 216px;
    height: 216px;
    overflow: hidden;
}
.gdImg span img{
    width: 100%;
    height: auto;
}
.gdTitle{
    margin-top: 20px;
    width: 100%;
    font-size: 24px;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.flowBox{
    margin-top: 16px;
    width: 100%;
}
.flowHead{
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #eb0000;
    font-size: 28px;
    background-color: #fff;
}
.flowContent{
    width: 100%;
    height: auto;
    overflow: auto;
}
.flowItem{
    float:left;
    width: 49.5%;
    padding: 2%;
    background-color: #fff;
    margin-top: 8px;
}
.flowItem:nth-child(even){
    float: right;
}
.likeImg{
    width: 100%;
    display: inline-block;
}
.likeImg img{
    width: 100%;
    height: auto;
}
.likeTitle{
    width: 94%;
    margin: 0 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 24px;
    color: #666;
}
.buyCar{
    position: absolute;
    right: 0px;
    top: -24px;
    font-size: 50px;
    color: #fc3e32;
}
</style>


