<script setup lang="ts">
import Header from "@/layouts/Header/index.vue"
import Aside from "@/layouts/Aside/index.vue"
import Main from "@/layouts/Main/index.vue"

</script>

<template>
  <div class="common-layout">
    <Header></Header>
    <div class="common-main">
      <Aside></Aside>
      <Main></Main>
    </div>
  </div>
</template>

<style scoped lang="scss">

.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .common-main {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }
}

</style>
