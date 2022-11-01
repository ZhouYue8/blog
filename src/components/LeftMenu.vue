<!--
 * @Description: 
 * @Author: wss
 * @Date: 2022-07-23 15:07:56
 * @LastEditTime: 2022-08-07 17:49:15
 * @LastEditors: wss
-->
<template>
  <el-menu
    class="border-none"
    :text-color="store.darkMode ? 'black' : 'white'"
    :background-color="store.darkMode ? 'white' : 'rgb(31 41 50)'"
    :router="true"
    :default-active="index"
    @select="changeMenu"
  >
    <el-menu-item index="/layout" default>
      <template #title>
        <el-icon>
          <FontAwesomeIcon :icon="faHouseUser" />
        </el-icon>
        <span>主页</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/about">
      <template #title>
        <el-icon>
          <FontAwesomeIcon :icon="faAddressCard" />
        </el-icon>
        <span>关于我</span>
      </template>
    </el-menu-item>

    <el-menu-item index="3">
      <template #title>
        <el-icon>
          <FontAwesomeIcon :icon="faEllipsis" />
        </el-icon>
        <span>其他</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  faHouseUser,
  faEllipsis,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import useStore from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";
const store = useStore();
const router = useRouter();
const index = ref(
  localStorage.getItem("menuIndex")
    ? localStorage.getItem("menuIndex")
    : "/layout"
);
const changeMenu = (value: string) => {
  if (index.value === value) {
  } else {
    index.value = value;
    localStorage.setItem("menuIndex", value);
  }
};
</script>

<style scoped></style>
