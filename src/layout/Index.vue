<!--
 * @Description: 
 * @Author: wss
 * @Date: 2022-08-07 17:56:04
 * @LastEditTime: 2022-08-07 19:41:32
 * @LastEditors: wss
-->
<!-- html结构 -->
<template>
  <div class="w-full">
    <SwiperVue />
    <div class="mt-3">
      <CardVue v-for="log in weblog" :key="log.id" :weblog="log" />
    </div>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import SwiperVue from "../components/Swiper.vue";
import CardVue from "../components/Card.vue";
import useStore from "../store";
type WEBLOG = {
  content: string;
  createData: string;
  id: number;
  likes: number;
  title: string;
  updateDate: string;
};
const store = useStore();
const weblog: Array<WEBLOG> = await store.getBlog();
</script>

<!-- 样式设置 -->
<style scoped lang="less"></style>
