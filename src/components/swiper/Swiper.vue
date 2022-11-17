<!--
 * @Description: 
 * @Author: wss
 * @Date: 2022-07-23 15:07:56
 * @LastEditTime: 2022-11-17 22:33:41
 * @LastEditors: ZhouYue8 103202563+ZhouYue8@users.noreply.github.com
-->
<template>
  <div class="text-center max-w-72">
    <div v-if="flag">
      <el-carousel height="300px" class="rounded-lg">
        <el-carousel-item v-for="item in data.data" :key="item.id">
          <img
            class="object-cover"
            :src="`${BASE_URL}${item.attributes.path}`"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div v-else>
      <el-carousel height="300px" class="rounded-lg">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image>
            <template #error>
              <div class="image-slot">加载失败</div>
            </template>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getImges, BASE_URL } from '../../api';
import { SwiperData } from './type';
let data: SwiperData;
const flag = ref(false);
try {
  data = await getImges();
  flag.value = true;
} catch (error) {
  flag.value = false;
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
