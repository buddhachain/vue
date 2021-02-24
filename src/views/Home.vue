<template>
  <div class="home">
    <header>
      <div class="search-box">
        <v-text-field
          class="search"
          solo
          placeholder="文殊菩萨加特"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        <div class="toTop" href="#top" @click="toTop()">
          <v-icon color="primary" class="icon">mdi-arrow-collapse-up</v-icon>
          <p>回顶部</p>
        </div>
      </div>
    </header>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="" />
        <div class="content">
          <h1>{{ item.title }}</h1>
          <h2>{{ item.subtitle }}</h2>
          <span class="type" v-for="(type, i) in item.types" :key="i">{{
            type
          }}</span>
          <p>
            <span>{{ item.address }}</span>
            <span>{{ item.persons }}人参与</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import img1 from "@/assets/images/fo.jpg";
export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          title: "腊月绿度母烟供",
          subtitle: "普工六道众生，消除疾病，驱秽灭煞，转运迅猛，获利巨大",
          address: "绍兴兴善寺",
          img: img1,
          persons: "71",
          types: ["认供佛粥", "温暖腊八", "慈悲喜会"]
        },
        {
          title: "腊月绿度母烟供",
          subtitle: "普工六道众生，消除疾病，驱秽灭煞，转运迅猛，获利巨大",
          address: "绍兴兴善寺",
          img: img1,
          persons: "71",
          types: ["认供佛粥", "温暖腊八", "慈悲喜会"]
        },
        {
          title: "腊月绿度母烟供",
          subtitle: "普工六道众生，消除疾病，驱秽灭煞，转运迅猛，获利巨大",
          address: "绍兴兴善寺",
          img: img1,
          persons: "71",
          types: ["认供佛粥", "温暖腊八", "慈悲喜会"]
        },
        {
          title: "腊月绿度母烟供",
          subtitle: "普工六道众生，消除疾病，驱秽灭煞，转运迅猛，获利巨大",
          address: "绍兴兴善寺",
          img: img1,
          persons: "71",
          types: ["认供佛粥", "温暖腊八", "慈悲喜会"]
        },
        {
          title: "腊月绿度母烟供",
          subtitle: "普工六道众生，消除疾病，驱秽灭煞，转运迅猛，获利巨大",
          address: "绍兴兴善寺",
          img: img1,
          persons: "71",
          types: ["认供佛粥", "温暖腊八", "慈悲喜会"]
        }
      ]
    };
  },
  methods: {
    toTop() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
.home {
  height: 800px;
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 60px;
  }
  .search-box {
    display: flex;
    align-content: center;
    justify-content: space-between;
    .search {
      &.v-text-field.v-text-field--enclosed {
        padding: 20px 10px 0 10px;
      }
      &.v-text-field.v-text-field--solo .v-input__control {
        min-height: 30px;
      }
      &.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
        > .v-input__control
        > .v-input__slot {
        box-shadow: none;
        border: 1px solid #ddd;
        border-radius: 20px;
      }
      &.v-text-field.v-text-field--solo .v-input__control input {
        font-size: 14px;
      }
    }
    .toTop {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px 10px 0 0;
      color: #a94c4b;
      font-size: 12px;
      text-decoration: unset;
      .icon {
        font-size: 20px;
      }
    }
  }
  ul {
    padding: 0 10px;
    list-style: none;
    margin-top: 80px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 80px;
        border-radius: 3px;
      }
      .content {
        padding: 5px 0 0 10px;
        h1 {
          font-size: 16px;
          font-weight: normal;
        }
        h2 {
          font-size: 14px;
          font-weight: normal;
          color: #555;
        }
        .type {
          color: #bc9671;
          display: inline-block;
          background-color: #f8f5f0;
          padding: 1px 6px;
          font-size: 12px;
          border-radius: 9px;
          margin-right: 10px;
        }
        p {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #555;
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
}
</style>
