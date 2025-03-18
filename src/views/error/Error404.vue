<template>
  <div class="not-found-container">
    <h1>Error 404</h1>
    <p>The page you're loking for can't be found</p>
    <el-button type="primary" @click="handleTap">Home page</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleTap() {
  router.replace('/')
}
</script>

<style lang="scss" scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .el-button {
    margin-top: 10px;
  }
}
</style>
