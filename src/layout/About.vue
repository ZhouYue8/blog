<!-- html结构 -->
<template>
  <div
    class="dark:text-[#D1D5D8] shadow-md relative rounded-md overflow-hidden bg-white dark:bg-[#171B26] p-8"
  >
    <div class="flex items-center gap-3">
      <img src="../assets/Whale.svg" class="w-8" alt="博主" />
      <span class="text-xl font-semibold">博主</span>
    </div>
    <el-divider border-style="dashed" class="dark:border-gray-400" />
    <p class="mt-2">ZhouYue，爱好:看书、跑步、锻炼、学习</p>
    <p class="mt-2 mb-8">如今大四，在学java，前端实在是难找实习-_-...</p>
    <div class="flex items-center gap-3">
      <img src="../assets/Blog.svg" class="w-8" alt="博主" />
      <span class="text-xl font-semibold">博客</span>
    </div>
    <el-divider border-style="dashed" class="dark:border-gray-400" />
    <p class="mt-2 mb-8">主要用于记录自己的日常与学习</p>

    <div class="flex items-center gap-3">
      <img src="../assets/哑铃.svg" class="w-8" alt="锻炼" />
      <span class="text-xl font-semibold">锻炼计划</span>
    </div>
    <el-divider border-style="dashed" class="dark:border-gray-400" />
    <p class="mt-2 mb-15">不要犹豫，直接克四轮</p>
    <span class="absolute right-3 bottom-3 text-gray-500">2022/11/17</span>
    <div class="comment mt-7 dark:text-gray-400 gap-5 flex flex-col">
    <p class="">发表评论：</p>
    <el-input
      type="textarea"
      :rows="4"
      placeholder="发表你的评论吧"
      maxlength="30"
      show-word-limit
      class=" bg-yellow-200 rounded-md"
    />
    <div class="flex justify-end gap-5  mb-4">
      <el-input placeholder="请输入昵称" clearable class="w-6"></el-input>
      <el-button type="primary" size="default" @click="">提交</el-button>
    </div>
  </div>
  </div>
  
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts"></script>

<!-- 样式设置 -->
<style scoped >
.el-input {
  width: 200px;
}
</style>
