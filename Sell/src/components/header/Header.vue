<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right:before"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name"></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      seller:{
        type:Object
      }
    },
    created(){
      this.classMap=['decrease','discount','special','invoice','guarantee'];
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import"..//..//common/stylus/mixin"
  //@import"..//..//common/stylus/base"
    .header
      color: #ffffff
      background #8e8e8e
      .content-wrapper
        padding:24px 12px 18px 24px
        font-size 0;
        .avatar
          display:inline-block;
          vertical-align top;
          img
            border-radius:2px;
        .content
          display inline-block;
          vertical-align top;
          //margin:16px;
          margin-left 16px;
          .title
            margin:2px 0 8px 0;
            .brand
              display:inline-block;
              vertical-align:top;
              width:30px;
              height:18px;
              bg-image('brand');
              background-size 30px 18px;
              background-repeat:no-repeat;
            .name
              margin-left:6px;
              font-size:16px;
              line-height:18px;
              font-weight:bold;
          .description
            margin-bottom:10px;
            line-height:12px;
            font-size:12px;
            font-weight:200;
          .support
            .icon
              display:inline-block;
              vertical-align:top;
              width:12px;
              height:12px;
              margin-right:4px;
              background-size:12px 12px;
              background-repeat:no-repeat;
              &.decrease
                bg-image('decrease_1')
              &.discount
                bg-image('discount_1')
              &.guarantee
                bg-image('guarantee_1')
              &.invoice
                bg-image('invoice_1')
              &.special
                bg-image('special_1')
            .text
              font-size:10px;
              line-height:10px;
              vertical-align top;

        .support-count
          position:absolute;
          right:12px;
          top:14px;
          width:40px;
          padding:7px 8px;
          height:24px;
          line-height:24px;
          border-radius:14px;
          background:rgba(255,255,255,0.2);
          text-align:center;
          .count
            font-size:10px;
            vertical-align:top;
          .icon-keyboard_arrow_right:before
            margin-left:2px;
            line-height:24px;
            font-size:10px;
      .bulletin-wrapper
        position:relative;
        height:28px;
        line-height:28px;
        padding:0 22px 0 12px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size 2px;
        .bulletin-title
          display:inline-block
          width:22px;
          height:12px;
          margin-top 9px
          bg-image('bulletin')
          background-size 22px 12px;
          background-repeat no-repeat;
        .bulletin-text
          vertical-align top
          margin:0 4px;
          font-size 10px;
        .icon-keyboard_arrow_right
          position:absolute;
          font-size:10px;
          right:12px;
          top:8px;
</style>
