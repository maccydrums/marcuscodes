<template>
  <div id="app">
    
  <!-- Hero header: will stick at the top -->
  <!-- <div class="hero-head mobile" style="justify-content: flex-end; align-items: flex-end; margin-top: -50px;">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }" style="background-color: white;">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu is-mobile" :class="{ 'is-active': showNav }">
        <div class="navbar-end has-text-centered">
          <a class="navbar-item" href="/">
            Home
          </a>
          <a class="navbar-item" href="/about">
            About
          </a>
          <a class="navbar-item" href="/skills">
            Skills
          </a>
          <a class="navbar-item" href="/portfolio">
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  </div> -->
<!-- 
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu has-text-centered" v-bind:class="{'is-active': isOpen}">
            <div class="navbar-end">
                <router-link to="/" class="navbar-item is-tab">Home</router-link>
                <router-link to="/about" class="navbar-item is-tab">About</router-link>
                <router-link to="/skills" class="navbar-item is-tab">Skills</router-link>
                <router-link to="/portfolio" class="navbar-item is-tab">Portfolio</router-link>
            </div>
        </div>
    </nav> -->



    <Home/>
    <About/>
    <Skills/>
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

export default {
  name: 'app',
  data: function() {
        return {
            isOpen: false
        }
  },
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer,
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
  min-height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
} 
/* 
.navbar {
  margin-top: -50px;
}
.navbar-menu.is-active {
  box-shadow: 0 0px 0px white;
}

.navbar-brand, .navbar-burger, .navbar-burger, .navbar-burger.is-active, .navbar-burger:hover {
  background-color: white;
}

.navbar-item {
  margin-right: 20px;
  margin-left: 20px;
}
.navbar-item.active {
  background-color: #f7f7f7;
  font-weight: 700;
}  */
@media screen and (min-width: 1400px) {
  #app {
    height: 650px;
  }
}
@media screen and (min-width: 2000px) {
  #app {
    height: 650px;
  }
}

</style>
