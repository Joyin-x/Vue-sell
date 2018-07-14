<template>
  <div id="app">
      <WebHeader :seller="seller"></WebHeader>
    <div class="tab">
      <div class="tab-item border-1px">
        <a class="as"><router-link to="/goods">商品</router-link></a>
      </div>
      <div class="tab-item">
        <a><router-link to="/ratings">评论</router-link></a>
      </div>
      <div class="tab-item">
        <a><router-link to="/seller">商家</router-link></a>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import WebHeader from 'components/header/Header.vue';
  const ERR_OK=0;
export default{
  data(){
    return {
      seller:{}
    }
  },
  created(){
    this.$http.get('/api/seller').then((response) => {
      response=response.body;
      console.log(response);
      if (response.errno===ERR_OK){
        this.seller=response.data;
        console.log(this.seller);
      }
    })
  },
  components: {
    WebHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      border-1px(rgba(240,20,20,0.1))
      .tab-item
        flex:1
        text-align:center
        a
          display:block;
          text-decoration:none;
          font-size: 18 px;
          color:rgb(200,125,93);
          a:active
            color:rgb(240,20,20);
</style>
