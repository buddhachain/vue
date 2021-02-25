<template>
  <v-bottom-navigation :value="value" color="primary" grow>
    <v-btn v-for="(item, index) in items" :key="index" :value="index">
      <span>{{ item.name }}</span>
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#' + item.icon"></use>
      </svg>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      value: 0,
      items: [
        {
          name: "首页",
          icon: "icon-maobi"
        },
        {
          name: "祈福",
          icon: "icon-biaoqian"
        },
        {
          name: "修行",
          icon: "icon-lianhua"
        },
        {
          name: "佛友",
          icon: "icon-foyouquan"
        },
        {
          name: "我的",
          icon: "icon-wode"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.v-item-group.v-bottom-navigation {
  position: fixed;
}
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 0;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 100%;
  background-color: #fff;
}
.v-btn:not(.v-btn--round).v-size--x-large {
  height: 100%;
}
.icon {
  width: 1.8em;
  height: 1.8em;
  margin-bottom: 4px;
}
</style>
