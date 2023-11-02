<script setup lang="ts">
import {computed, ref} from 'vue'
import Menu from '@/layouts/Menu/index.vue'
import {
  Fold,
  Expand
} from '@element-plus/icons-vue'

const isCollapse = ref ( false )
const toggle = () => {
  isCollapse.value = !isCollapse.value;
}
const asideStyle = computed ( () => {
  return {
    width: isCollapse.value ? "auto" : "200px",
  }
} )


</script>

<template>

  <div class="aside-container" :style="asideStyle">
    <Menu></Menu>
    <div @click="toggle" class="collapse-content">
      <el-icon v-show="isCollapse">
        <Expand/>
      </el-icon>
      <el-icon v-show="!isCollapse">
        <Fold/>
      </el-icon>
    </div>
  </div>

</template>

<style scoped>

.aside-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.collapse-content {
  display: flex;
  align-content: center;
  height: 32px;
  width: auto;
  padding: 0 20px;
  text-align: center;
}

.el-menu {
  border: none;
}

</style>
