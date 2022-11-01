<!--
 * @Author: Weiss0828 1848680690@qq.com
 * @Date: 2022-07-23 15:07:56
 * @LastEditors: Weiss0828 1848680690@qq.com
 * @LastEditTime: 2022-07-23 18:37:05
 * @FilePath: \blog\src\components\Card.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
  <div
    class="rounded-xl w-[80%] mx-auto dark:bg-gray-700 dark:text-gray-300 px-5 pt-3 pb-4 bg-blue-200 my-3"
  >
    <header class="font-bold text-lg flex justify-between">
      <div class="line-clamp-1">{{ weblog.title }}</div>
      <span class="hover:text-blue-500 transition-all cursor-pointer"
        ><FontAwesomeIcon :icon="faThumbsUp"
      /></span>
    </header>
    <div class="border-b-[1px] my-2 border-gray-500"></div>
    <main>
      <p class="line-clamp-3">
        {{ weblog.content }}
      </p>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
type WEBLOG = {
  content: string;
  createData: string;
  id: number;
  likes: number;
  title: string;
  updateDate: string;
};
const { weblog } = defineProps<{
  weblog: WEBLOG;
}>();
</script>

<style scoped></style>
