<!--
 * @Description: 
 * @Author: wss
 * @Date: 2022-07-23 15:07:56
 * @LastEditTime: 2022-08-06 19:12:41
 * @LastEditors: wss
-->
<template>
  <div class="text-center max-w-72">
    <el-carousel height="300px" class="rounded-lg">
      <el-carousel-item v-for="item in data" :key="item.id">
        <img
          class="object-cover"
          :src="`http://localhost:4000/static/${item.path}`"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { getImges } from "../api";
const { data } = await getImges();
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
