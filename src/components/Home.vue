<template>
  <div class="wrapper">
    <h1>Marcus Andersson</h1>
    <h2>Frontend developer</h2>
    <vue-typed-js :strings="['Under construction...']">
      <h3><span class="typing"></span></h3>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    /* color: hsla(0,0%,20%,1.0);  ---- FONT-COLOR*/
    /* color: rgba( 45, 55, 65, .85 );  FONT-COLOR*/
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: 50px;
    font-weight: 400;
  }
  h2 {
    font-weight: 400;
    margin-top: -30px;
  }
  h3 {
    margin-left: 10px;
    text-align: center;
    font-weight: 400;
  }
  @media screen and (max-width: 500px) {
  h1 {
    font-size: 35px;
  }
  h2 {
    margin-top: -20px;
    font-size: 22px;
  }
}
</style>
