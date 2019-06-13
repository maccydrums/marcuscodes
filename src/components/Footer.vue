<template>
  <div class="footer">
      <i class="fab fa-vuejs"></i>
      <i class="fab fa-react"></i>
      <i class="fab fa-angular"></i>
      <i class="fab fa-git-square"></i>
      <i class="fab fa-npm"></i>
      <i class="fab fa-node"></i>
      <i class="fab fa-js"></i>
      <i class="fab fa-docker"></i>
      <i class="fab fa-digital-ocean"></i>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 80%;
  min-height: 100px;
  padding: 20px;
}
.footer svg {
  font-size: 40px;
  margin: 10px;
}
</style>
