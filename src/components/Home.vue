<template>
  <div class="wrapper">
<<<<<<< HEAD
=======
    <h1>Marcus Andersson</h1>
    <h4>Frontend developer</h4>
>>>>>>> 7dd6cc49ac815d79a6fd779708c30a8d7af02d57
    <vue-typed-js :strings="['Under construction...']">
      <h3><span class="typing"></span></h3>
    </vue-typed-js>
    <!-- <h2>Want to get in contact?</h2> -->
    <h2>Let's <strong>talk!</strong></h2>
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
<<<<<<< HEAD
    /* color: hsla(0,0%,20%,1.0);  */
=======
    background-color: transparent;
    /* color: white; */
    /* color: rgba( 45, 55, 65, .85 ); */
>>>>>>> 7dd6cc49ac815d79a6fd779708c30a8d7af02d57
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: 60px;
    font-weight: 500;
  }
  h2 {
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 10px;
    margin-top: 40px;
  }
  h3 {
    text-align: center;
<<<<<<< HEAD
    font-weight: 400;
    font-size: 25px;
=======
    font-weight: 500;
  }
  h4 {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    text-align: center;
    text-transform: uppercase;
    word-spacing: 3px;
    padding: 8px 0 6px 0;
    letter-spacing: 2px;
    margin-top: -5px;
    font-weight: 500;
    font-size: 25px;
    width: 35%;
>>>>>>> 7dd6cc49ac815d79a6fd779708c30a8d7af02d57
  }
  @media screen and (max-width: 500px) {
  .wrapper {
    margin-top: 50px;
  }
  h1 {
    font-size: 37px;
    font-weight: 500;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    margin-top: 25px;
    font-size: 19px;
  }
  .wrapper h4 {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    text-align: center;
    text-transform: uppercase;
    word-spacing: 3px;
    padding: 8px 0 6px 0;
    letter-spacing: 2px;
    margin-top: -5px;
    font-weight: 500;
    font-size: 14px;
    width: 90%;
  }
}
  @media screen and (min-width: 1400px) {
    .wrapper h2 {
      margin-bottom: -120px;
    }
  }
</style>
