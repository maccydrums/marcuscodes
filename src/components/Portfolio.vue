<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <div class="columns is-tablet is-variable is-4 grid-xl">
      <div class="column">
        <figure class="image card">
          <a href="https://github.com/maccydrums/tmaguld" target="_blank">
            <img src="/TMA GULD.png"> 
          </a>
        </figure>
      </div>
      <div class="column">
        <figure class="image card">
          <img src="/Porsche - tablet (kopia).png">
        </figure>
      </div>
    </div>
    <div class="columns is-tablet is-variable is-4 grid-xl">
      <div class="column">
        <figure class="image card">
          <a href="https://github.com/0skar0/ReactProjectNHL" target="_blank">
           <img src="/nhl.png">
          </a>
        </figure>
      </div>
      <div class="column">
        <figure class="image card">
          <a href="https://www.youtube.com/watch?v=TvoXGrYouPc" target="_blank">
           <img src="/ux1.png">
          </a>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0, 0%, 20%, 1);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 90%;
  min-height: 550px;
  margin-top: 80px;
  padding: 20px;
}
.image {
  box-shadow: rgb(195, 195, 195) 1px 1px 8px;
  vertical-align: middle;
}
h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
}
a {
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .portfolio {
    min-height: 330px;
  }
}
</style>
