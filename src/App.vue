<template>
  <div id="app">
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Home,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
body {
  /* background-color:#343a40; */
  background-color: white;
  color: hsla(0,0%,20%,1.0);

  /* background-color: hsla(0,0%,98%,1.0);        ALTERNATIVE COLOR*/
}
#app {
  /* font-family: 'Nunito', sans-serif; */
  font-family: 'Avenir', san-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 450px;
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
