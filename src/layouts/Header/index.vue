<script setup lang="ts">
import Logo from "@/layouts/Logo/index.vue"
import Avatar from "@/layouts/Header/components/Avatar.vue";
</script>

<template>
  <div class="header-container">
    <Logo></Logo>
    <Avatar></Avatar>
  </div>
</template>

<style scoped lang="scss">

.header-container {
  height: 48px;
  width: 100%;
  background: #001525;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}


</style>
