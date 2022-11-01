<!--
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 15:07:56
 * @LastEditors: Weiss0828 1848680690@qq.com
 * @LastEditTime: 2022-07-23 20:17:17
 * @FilePath: \blog\src\layout\Sider.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="sider-left">
    <div class="title flex flex-col items-center bg-white">
      <img
        src="../assets/四系乃.jpg"
        alt="头像"
        class="w-16 rounded-full logo mt-5"
      />
      <h2 class="text-xl font-bold text-blue-500 my-3">周岳</h2>
    </div>
    <!-- 下拉列表 -->
    <LeftMenuVue />
  </div>
</template>

<script lang="ts" setup>
import LeftMenuVue from "../components/LeftMenu.vue";
</script>

<style scoped>
.title {
  position: relative;
  background: url("../assets/waves.png") no-repeat;
}
</style>
