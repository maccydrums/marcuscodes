<template>
  <div class="footer">
    <h3>© Copyright 2019 Marcus Andersson. All rights reserved.</h3>
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
  background-color: rgba(180, 180, 180, 0.2);
  width: 100%;
  min-height: 100px;
  padding: 20px;
}
@media screen and (max-width: 500px) {
  .footer h3 {
    font-size: 14px;
  }
}
@media screen and (max-width: 400px) {
  .footer h3 {
    font-size: 13px;
  }
}
</style>
