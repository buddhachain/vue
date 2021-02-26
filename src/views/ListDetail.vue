<template>
  <div class="listDetail">
    <div class="return">
      <v-icon>mdi-chevron-left</v-icon>
      <span class="title">绍兴兴善寺-元宵节祈福||人间最美是团圆</span>
    </div>
    <div class="check">
      <v-icon>mdi-close</v-icon>
      <div class="tip">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-anquan"></use>
        </svg>
        <span>已认证，可放心访问</span>
      </div>
      <span class="btn">查看</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListDetail.vue"
};
</script>

<style scoped lang="scss">
.listDetail {
  background-color: #f4f6f5;
  .return {
    height: 35px;
    line-height: 35px;
    background-color: #fff;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    .v-icon {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
    }
    .title {
      width: 170px;
      margin: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      font-size: 14px !important;
      font-weight: normal;
    }
  }
  .check {
    width: calc(100% - 20px);
    margin: 5px auto;
    background: linear-gradient(to right, #97b2dd, #51789f);
    border-radius: 5px;
    .v-icon {
    }
    .tip {
    }
  }
}
</style>
