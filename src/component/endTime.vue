<style scoped>
  .timeDown{
    margin-top: 10px;
    font-size: 28px;
    font-family: Arial;
  }
  .timeDown:after{
    clear: both;
  }
  .timeDown span{
    float: left;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-color: #333;
    color: #fff;
  }
  .timeDown i{
    float: left;
    width: 0.36rem;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 40px;
    color: #333;
  }
</style>

<template>
  <div class="timeDown">
      <span>{{hour}}</span>
      <i class="iconfont">:</i>
      <span>{{minute}}</span>
      <i class="iconfont">:</i> 
      <span>{{second}}</span>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        date:'2017/5/3 09:03:10',
        hour:24,
        minute:0,
        second:0,
      }
    },
    mounted: function() {
      var self = this;
      function timedown(){ 
          var date = self.date;
          var ts = new Date(date)-new Date(); //得到毫秒数  
          if(ts>0){   
            var hours = parseInt(ts / 1000 / 60 / 60 % 24, 10);//得到小时数
            var minutes = parseInt(ts / 1000 / 60 % 60, 10);//得到分钟数
            var seconds = parseInt(ts / 1000 % 60, 10);//得到秒数
            hours = hours<10?("0" + hours):hours;   //时  
            minutes = minutes<10?("0" + minutes):minutes;   //分  
            seconds = seconds<10?("0" + seconds):seconds;   //秒
            var newTime = hours + ':' +minutes+ ':'+seconds;
            // console.log('hours:minutes:seconds',newTime);
            self.hour = hours;
            self.minute = minutes;
            self.second = seconds;
            setTimeout(function(){timedown();},1000);
          }else{
            self.hour = '00';
            self.minute = '00';
            self.second = '00';
          }
      }
      timedown();
    },
    methods:{
      
    },
  }

</script>