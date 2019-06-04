<template>
  <div class="wrapper">
    <div classname="main">
      <!-- <li class="pv3 ph2 ma0 link grow">
        <a href="http://www.instagram.com/marcusanderssson_" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" size="3x" />
        </a>
      </li>
      <li class="pv3 ph2 ma0 link grow">
        <a href="https://www.linkedin.com/in/marcus-andersson-78aa2316a/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="3x" />
        </a>
      </li>
      <li class="pv3 ph2 ma0 link grow">
        <a href="http://www.github.com/maccydrums" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" size="3x" />
        </a>
      </li>
      <li class="pv3 ph2 ma0 link grow">
        <a href="mailto:marcusprivat@live.com">
        <font-awesome-icon :icon="['fa', 'envelope']" size="3x" />
        </a>
      </li> -->
    </div>
    <div classname="quote">
      <h5>"Less, but better." <br/> - Dieter Rams</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparnet;
  width: 100%;
  height: 120px;
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
  color: #42b983;
}
a {
  color: #42b9838f;
  /* color: rgba( 45, 55, 65, .85 );           ALTERNATIVE COLOR*/
  text-decoration: none;
}
h5 {
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
  }
</style>
