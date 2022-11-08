<!--
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 15:07:56
 * @LastEditors: Weiss0828 1848680690@qq.com
 * @LastEditTime: 2022-07-23 18:37:05
 * @FilePath: \blog\src\components\Card.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
  <div class="cart">
    <div class="icon rounded-full p-4">
      <FontAwesomeIcon
        :icon="faSchool"
        class="text-red-600"
        v-if="weblog.type === 'study'"
      />
      <FontAwesomeIcon class="text-blue-600" :icon="faCalendarDay" v-else />
    </div>
    <div class="font flex flex-1 flex-col items-center justify-center">
      <h1 class="text-2xl font-bold leading-7 mb-3">{{ weblog.title }}</h1>
      <p class="leading-7 text-sm text-gray-500">
        {{ weblog.createDate }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faSchool, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

type WEBLOG = {
  createDate: string;
  type: string;
  id: number;
  likes: number;
  title: string;
  updateDate: string;
};
const { weblog } = defineProps<{
  weblog: WEBLOG;
}>();
const str: number = dayjs(weblog.createDate).unix();
weblog.createDate = dayjs(weblog.createDate).format("YYYY年MM月DD日");
</script>

<style scoped></style>
