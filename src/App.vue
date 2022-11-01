<!--
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 15:07:56
 * @LastEditors: wss
 * @LastEditTime: 2022-08-07 19:46:47
 * @FilePath: \blog\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container class="w-full">
    <el-header><HeaderVue /></el-header>
    <el-container class="p-5 flex gap-7">
      <el-aside width="240px">
        <SiderVue />
      </el-aside>
      <el-main>
        <Suspense>
          <router-view></router-view>
        </Suspense>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import HeaderVue from "./layout/Header.vue";
import SiderVue from "./layout/Sider.vue";
</script>

<style>
body {
  max-width: 100vw;
  min-height: 100vh;
}
#app {
  max-width: 100vw;
  min-height: 100vh;
}
.el-container {
  padding: 0;
}
.el-main,
.el-header {
  padding: 0;
}
</style>
