<template>
  <div id="wrapper">
    <h1>Marcus Andersson</h1>
    <ul>
      <h2>Profile</h2>
      <!-- <h2>Blog</h2> -->
      <h2>Projects</h2>
    </ul>
    <ul>
      <li><a href="mailto:marcusprivat@live.com">Email</a></li>
      <li><a href="https://www.github.com/maccydrums" target=”_blank”>GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/marcus-andersson-78aa2316a/" target="_blank">LinkedIn</a></li>
      <li><a href="https://www.instagram.com/marcusanderssson_" target=”_blank”>Instagram</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 90px;
  margin-top: 80px;
}
h1 {
  font-weight: 600;
  margin-bottom: 50px;
  font-size: 25px;
}
h2 {
  font-weight: 400;
  margin-bottom: -12px;
  font-size: 22px;
}
ul {
  margin-bottom: 60px;
  list-style: none;
}
ul li a {
  text-decoration: none;
  font-size: 22px;
  color: rgba( 45, 55, 65, .85 );
}

li {
  margin-bottom: 5px;
}

@media screen and (max-width: 500px) {
  #wrapper {
    margin: 20px;
    margin-top: 10px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 0px;
  }
  ul {
    display: flex;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 19px;
    margin-right: 5px;
  }
}
</style>
