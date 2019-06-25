<template>
  <div class="skills">
    <h1>Services</h1>
    <div class="columns is-tablet is-variable is-4 grid-xl">
      <div class="column">
        <figure class="image card" v-lazy-container="{ selector: 'img' }">
          <img data-src="/front.png">
        </figure>
        <h3>FRONT END DEVELOPMENT</h3>
        <p>Front end development is vital when establishing your online brand. No one wants to do business with someone with a hideous website. My goal is to create a beautiful, responsive design for all of my projects. To do this I'm using technologies that I'm familiar with including HTML, CSS, CSS animations, grid, vanilla JavaScript(ES6), Vue.js (my go to framework), React and Angular.js (basic understanding). I'm also using CSS-frameworks such as Bulma and Bootstrap.</p>
      </div>
      <div class="column">
        <figure class="image card" v-lazy-container="{ selector: 'img' }">
          <img data-src="/ux.jpg">
        </figure>
        <h3>UX/UI DESIGN</h3>
        <p>Coming soon.</p>
        <!-- <p>User experience is critical when you're developing a product for a client. </p> -->
      </div>
      <div class="column">
        <figure class="image card" v-lazy-container="{ selector: 'img' }">
          <img data-src="/backend.jpg">
        </figure>
        <h3>BACK END DEVELOPMENT</h3>
        <p>Coming soon.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills"
};
</script>

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
  margin-bottom: 30px;
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
@media screen and (max-width: 800px) {
  .columns {
    flex-direction: column;
  }
  p {
    font-size: 18px;
  }
  h3 {
    font-size: 30px;
  }
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
