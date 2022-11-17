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
    <div class="mt-3" v-if="flag === true">
      <CardVue
        v-for="weblog in weblogs.data"
        :key="weblog.id"
        :weblog="weblog"
        class="cursor-pointer"
        @click="toArticle(weblog.id)"
      />
    </div>
    <el-empty v-else :image-size="200" />
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import SwiperVue from '../components/swiper/Swiper.vue';
import CardVue from '../components/Card.vue';
import { useRouter } from 'vue-router';
import { getWebLog } from '../api';
import { WeblogData } from './types/weblogs.type';
import { ref } from 'vue';
const router = useRouter();
const flag = ref(false);
let weblogs: WeblogData;
try {
  weblogs = await getWebLog();
  flag.value = true;
} catch (error) {
  flag.value = false;
}

const toArticle = (id: number) => {
  router.push(`/article/${id}`);
};
</script>

<!-- 样式设置 -->
<style scoped lang="less"></style>
