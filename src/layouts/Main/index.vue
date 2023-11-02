<script setup lang="ts">

import Footer from "@/layouts/Footer/index.vue"

</script>

<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.fullPath"/>
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
  <el-footer>
    <Footer></Footer>
  </el-footer>
</template>

<style scoped>

</style>
