<template>
  <div class="home">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item, index) in swipeList" :key="index">
        <img :src="item" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div>Homecontainer</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: []
    };
  },
  created() {
    this.getSwipList();
  },
  methods: {
    getSwipList() {
      // 发送请求获取数据
      setTimeout(() => {
        this.swipeList = [
          "https://s18.mogucdn.com/mlcdn/c45406/190301_476diicli9ac96151be678a334c6e_750x300.jpg_999x999.v1c0.webp",
          "https://s2.mogucdn.com/mlcdn/c45406/190304_5l3khjb6ab3l7ca3i6jjeigj71808_750x300.jpg_999x999.v1c0.webp",
          "https://s2.mogucdn.com/mlcdn/c45406/190301_8bb7l4cd6beae7360463i07da7249_750x300.jpg_999x999.v1c0.webp"
        ];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 150px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    img {
      width: 100%;
      // height: 100%;
    }
  }
}
</style>



