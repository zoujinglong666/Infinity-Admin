<script setup lang="ts">
import {ref} from 'vue'
import SubMenu from "@/layouts/Menu/SubMenu.vue";
const isCollapse = ref ( false )
const defaultActive = ref<string> ( '1' )
import dynamicRoutes from "@/routes/dynamicRoutes.ts"
</script>

<template>
  <el-menu
      :default-active="defaultActive"
      style="height: 100%"
      :collapse="isCollapse"
      :router="false"
      :collapse-transition="false"
  >
    <sub-menu :menu-list="dynamicRoutes"></sub-menu>
  </el-menu>
</template>

<style scoped>

</style>
