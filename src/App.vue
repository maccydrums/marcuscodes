<template>
  <div id="app">
    <div id="aside">
      <Sidebar/>
    </div>
    <div id="main">
      <Home/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  components: {
    Home,
    Footer,
    Sidebar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
* {
  margin: 10;
  padding: 0;
}
body {
  /* background-color:#343a40; */
<<<<<<< HEAD
  background-color: hsla(0,0%,98%,1.0); 
  color: rgba( 45, 55, 65, .85 ); 

=======
  background-color: white;
  color: hsla(0,0%,20%,1.0);

  /* background-color: hsla(0,0%,98%,1.0);        ALTERNATIVE COLOR*/
>>>>>>> 7dd6cc49ac815d79a6fd779708c30a8d7af02d57
}
#app {
  /* font-family: 'Nunito', sans-serif; */
  font-family: 'Avenir', san-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 600px;
  width: 100%;
<<<<<<< HEAD
=======
  margin-top: 70px;
>>>>>>> 7dd6cc49ac815d79a6fd779708c30a8d7af02d57
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
#main {
  display: flex;
  flex: 3;
  flex-direction: column;
<<<<<<< HEAD
  height: 100%;
}
#aside {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
}
@media screen and (max-width: 500px) {
  #app {
    flex-direction: column;
  }
  #main {
  }
  #aside {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
=======
  align-items: center;
} 
@media screen and (min-width: 1400px) {
  #app {
    height: 650px;
>>>>>>> 7dd6cc49ac815d79a6fd779708c30a8d7af02d57
  }
}

</style>
