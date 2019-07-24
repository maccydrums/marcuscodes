<template>
  <div id="app">
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Portfolio from './components/Portfolio.vue';
import Footer from './components/Footer.vue';
import Education from './components/Education.vue';

export default {
  name: 'app',
  components: {
    Home,
    About,
    Skills,
    Education,
    Portfolio,
    Contact,
    Footer,
  },
  // methods: setTimeout(function(){
	// 	$('body').addClass('loaded');
	// }, 3000)
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
  min-height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
} 
</style>
