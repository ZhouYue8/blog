<!--
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 15:07:56
 * @LastEditors: wss
 * @LastEditTime: 2022-08-06 21:46:35
 * @FilePath: \blog\src\layout\Header.vue
-->
<template>
  <header class="header-switch">
    <div class="text-white text-3xl flex-1">Wei</div>
    <ul class="text-zinc-200 flex flex-1 gap-3 justify-center"></ul>
    <div
      class="icons flex flex-1 gap-x-4 cursor-pointer justify-end"
      @click="switchDark"
    >
      <FontAwesomeIcon
        v-if="store.darkMode"
        class="h-6 text-gray-700"
        :icon="faMoon"
      />
      <FontAwesomeIcon v-else class="h-6 dark:text-yellow-300" :icon="faSun" />
      <el-popover placement="bottom" trigger="hover">
        <template #reference>
          <FontAwesomeIcon
            :class="`h-6 ${store.darkMode ? 'text-white' : ' text-blue-300'} `"
            :icon="faGithub"
          />
        </template>
        <template #default>
          <div class="flex items-center space-x-4">
            <FontAwesomeIcon class="h-6" :icon="faGithub" />
            <a
              href="https://github.com/ZhouYue8/blog"
              class="hover:text-slate-500"
              target="_blank"
              >源码</a
            >
          </div>
        </template>
      </el-popover>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ref, watchEffect } from "vue";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useStore from "../store";
const store = useStore();
const current = ref<string>("current");

watchEffect(() => {
  if (store.darkMode) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
});
const switchDark = () => {
  store.darkMode = !store.darkMode;
};
</script>

<style>
.el-popper {
  margin-top: 14px !important;
}
.header-switch {
  background: url("../assets/waves.png");
}
</style>
