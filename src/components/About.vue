<template>
  <div class="about">
    <h1>About</h1>
    <div class="main-content">
      <img src="/4D68A3A2-27C5-46F8-B166-00AF9497A5D4.jpg">
      <div class="main-footer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br>
          <br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br>
          <br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </p>
        <h2>
          Let's
          <strong>talk!</strong>
        </h2>
        <div class="social-media">
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
        </div>
      </div>
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
  width: 80%;
  min-height: 450px;
  margin-top: 35px;
  padding: 20px;
}
h1 {
  font-size: 40px;
  font-weight: 500;
}
h2 {
  font-size: 25px;
  font-weight: 500;
  margin-top: 50px;
}
.main-content {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  background-color: transparnent;
  width: 100%;
  height: 550px;
}
.main-content img {
  width: 410px;
  height: 480px;
  margin-right: 30px;
}
.main-footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.social-media {
  margin-top: 8px;
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
</style>
