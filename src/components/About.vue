<template>
  <div class="about">
    <h1>About</h1>
    <div class="columns is-variable is-4 grid-xl">
      <div class="column">
        <figure class="image card" style="max-width: 508px; max-height: 594px;">
          <img src="/marcus.jpg">
        </figure>
      </div>
      <figure class="column">
        <h1 style="font-size:30px; margin-top: 0px;">Hi, I'm Marcus!</h1>
        <p>
          I'm a creative purpose-driven Front End Developer based in Växjö, Sweden with focus on making online experiences memorable.
          <br/><br/>
          I started studying Front End Development last summer and fell in love with both coding and UI-design right away. I've got one more year left in school and this fall I'm going to do my internship at <a href="https://www.meetod.se/" target="_blank">Meetod</a> in Växjö.
          <br/><br/>
          Take a look at my projects and feel free to contact me with any requests or questions. In terms of work ethic, challenges keep me going. If you have an idea, let me know and I'll find a way to build it.
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
  margin-top: 40px;
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
  margin-top: 100px;
}
p {
  font-size: 18px;
}
p a {
  font-size: 18px;
  color: #01B5B4;
  font-weight: 600;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li a:hover {
  color: rgb(0, 0, 0);
}
li a {
  color: hsla(0, 0%, 20%, 1);
  font-size: 13px;
  /* color: rgba( 45, 55, 65, .85 );           ALTERNATIVE COLOR*/
  text-decoration: none;
}
@media screen and (max-width: 800px) {
  .columns {
    flex-direction: column;
  }
  p, p a {
    font-size: 18px;
  }
}
@media screen and (max-width: 500px) {
  h2 {
    margin-top: 40px;
  }
}
</style>
