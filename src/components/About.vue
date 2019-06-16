<template>
  <div class="about">
    <h1>About</h1>
    <div class="columns is-variable is-4 grid-xl">
      <div class="column">
        <figure class="image card" style="max-width: 508px; max-height: 594px;">
          <img src="/4D68A3A2-27C5-46F8-B166-00AF9497A5D4.jpg">
        </figure>
      </div>
      <figure class="column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br>
          <br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br>
          <br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </p>
        <figure class="column has-text-centered">
          <h2>
            Let's
            <strong>talk!</strong>
          </h2>
        </figure>
        <figure class="social-media has-text-centered">
          <li class="pv3 ph2 ma0 link grow">
            <a href="http://www.instagram.com/marcusanderssson_" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']" size="3x"/>
            </a>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <a href="https://www.linkedin.com/in/marcus-andersson-78aa2316a/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" size="3x"/>
            </a>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <a href="http://www.github.com/maccydrums" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" size="3x"/>
            </a>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <a href="mailto:marcusprivat@live.com">
              <font-awesome-icon :icon="['fa', 'envelope']" size="3x"/>
            </a>
          </li>
        </figure>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0, 0%, 20%, 1);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 90%;
  min-height: 450px;
  margin-top: 80px;
  padding: 20px;
}
h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
}
h2 {
  font-size: 25px;
  font-weight: 500;
  margin-top: 160px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a:hover {
  color: rgb(0, 0, 0);
}
a {
  color: hsla(0, 0%, 20%, 1);
  font-size: 13px;
  /* color: rgba( 45, 55, 65, .85 );           ALTERNATIVE COLOR*/
  text-decoration: none;
}
@media screen and (max-width: 500px) {
  h2 {
    margin-top: 40px;
  }
}
</style>
