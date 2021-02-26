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
        <div class="toTop" @click="toTop()">
          <v-icon color="primary" class="icon">mdi-arrow-collapse-up</v-icon>
          <p>回顶部</p>
        </div>
      </div>
    </header>
    <div class="more-box">
      <span>祈福佛事</span>
      <span class="more">更多 <v-icon>mdi-chevron-right</v-icon></span>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="toDetail()">
        <img :src="item.img" alt="" />
        <div class="content">
          <h1>{{ item.title }}</h1>
          <h2>{{ item.subtitle }}</h2>
          <span class="type" v-for="(type, i) in item.types" :key="i">{{
            type
          }}</span>
          <p>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-simiao"></use></svg
              >{{ item.address }}</span
            >
            <span>{{ item.persons }}人参与</span>
          </p>
        </div>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import img1 from "@/assets/images/fo.jpg";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: { Footer },
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
    },
    toDetail() {
      this.$router.push("/list-detail");
    }
  }
};
</script>

<style lang="scss">
.home {
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 60px;
    z-index: 1;
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
  .more-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 65px;
    font-size: 14px;
    padding: 0 10px;
    font-weight: bold;
    .more {
      color: #999999;
      font-size: 12px;
      font-weight: normal;
      line-height: 20px;
    }
    .v-icon {
      font-size: 20px;
      margin-left: -5px;
    }
  }
  ul {
    padding: 0 10px;
    list-style: none;
    margin-top: 15px;
    margin-bottom: 80px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      img {
        width: 80px;
        border-radius: 3px;
      }
      .content {
        padding-left: 12px;

        h1 {
          font-size: 15px;
          font-weight: normal;
          margin-bottom: 5px;
        }
        h2 {
          font-size: 13px;
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
          margin-right: 6px;
        }
        p {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999;
          font-size: 12px;
          margin: 0;
          .icon {
            width: 1.1em;
          }
        }
      }
    }
  }
}
</style>
