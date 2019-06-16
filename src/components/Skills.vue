<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="columns is-tablet is-variable is-4 grid-xl has-text-centered">
      <div class="column">
        <figure class="image card">
          <img src="/front.png">
        </figure>
        <h3>FRONT END DEVELOPMENT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="column">
        <figure class="image card">
          <img src="/ux.jpg">
        </figure>
        <h3>UX/UI DESIGN</h3>
        <p>Lorem ipsum dolor sit amet, sconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="column">
        <figure class="image card">
          <img src="/backend.jpg">
        </figure>
        <h3>BACK END DEVELOPMENT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0, 0%, 20%, 1);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 90%;
  min-height: 350px;
  margin-top: 80px;
  padding: 20px;
}
h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
}

h3 {
  font-size: 23px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;
  width: 100%;
  text-align: center;
  font-weight: 500;
}
@media screen and (max-width: 500px) {
  h1 {
    margin-bottom: 0px;
  }
  h3 {
    font-size: 22px;
  }
  .column {
    margin-top: 20px;
  }
}
</style>
