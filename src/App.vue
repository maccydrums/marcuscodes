<template>
  <div id="app">
    <Navbar/>
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
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
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
  color: rgba(51, 51, 51, 0.322);
  /* background-color: hsla(0,0%,98%,1.0);        ALTERNATIVE COLOR*/
}
#app {
  font-family: 'Nunito', san-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
} 
</style>
