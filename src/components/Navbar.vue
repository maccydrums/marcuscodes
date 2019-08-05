<template>
  <!-- <nav class="navbar is-fixed-top" style="backgroundColor: white;">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../../public/logo.svg" alt="logo" width="30">
      <h1 class="ml-3">MARCUSCODES</h1>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span>Home</span>
      <span>About</span>
      <span>Services</span>
      <span>Portfolio</span>
      <span>Contact</span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar" style="backgroundColor: transparent;">
      <a class="navbar-item" href="#" v-scroll-to="'#parallax-section'">
        HOME
      </a>
    </div>
    <div class="navbar" style="backgroundColor: transparent;">
      <a class="navbar-item" href="#" v-scroll-to="'#about'">
        ABOUT
      </a>
    </div>
    <div class="navbar" style="backgroundColor: transparent;">
      <a class="navbar-item" href="#" v-scroll-to="'#skills'">
        SERVICES
      </a>
    </div>
    <div class="navbar" style="backgroundColor: transparent;">
      <a class="navbar-item" href="#" v-scroll-to="'#portfolio'">
        PORTFOLIO
      </a>
    </div>
    <div class="navbar" style="backgroundColor: transparent;">
      <a class="navbar-item" href="#" v-scroll-to="'#contact'">
        CONTACT
      </a>
    </div>
        </div>
      </div>
    </div>
  </div>
  </nav>-->
  <nav class="navbar is-fixed-top is-white">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../../public/logo.svg" alt="logo" width="30" style="margin-left=20px!important;" />
          <h1 class="ml-3">MARCUSCODES</h1>
        </a>
        <span
          class="navbar-burger burger"
          @click="isOpen = !isOpen"
          v-bind:class="{'is-active': isOpen}"
          data-target="navMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navMenu" class="navbar-menu has-text-centered" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-end">
          <a class="navbar-item" v-scroll-to="'#parallax-section'" @click="isOpen = !isOpen">HOME</a>
          <a class="navbar-item" v-scroll-to="'#about'" @click="isOpen = !isOpen">ABOUT</a>
          <a class="navbar-item" v-scroll-to="'#skills'" @click="isOpen = !isOpen">SERVICES</a>
          <a class="navbar-item" v-scroll-to="'#portfolio'" @click="isOpen = !isOpen">PORTFOLIO</a>
          <a class="navbar-item" v-scroll-to="'#contact'" @click="isOpen = !isOpen">CONTACT</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.9);
}
.container {
  padding: 0px;
}
.navbar-item,
.navbar-item:active,
a {
  background-color: transparent !important;
}
a:active,
a:hover {
  color: #3273dc !important;
  background: transparent;
  text-decoration: none;
}
a {
  font-weight: 600!important;
}
.navbar-burger {
  width: 60px;
}

.navbar-burger:hover {
    background-color: transparent;
}

@media screen and (max-width: 1023px) {
.navbar-menu {
    background-color: #fff;
    box-shadow: none!important;
    margin-bottom: 15px;
  }
.navbar-menu a {
  margin-bottom: 3px;
  font-size: 20px;
}
}
@media screen and (max-width: 500px) {
  .navbar {
    padding: 0;
    background-color: white;
  }
  .navbar-burger {
    height: 50px!important;
  }
  .navbar-burger span {
    width: 28px!important;
    height: 2px!important;
    transition: all 0.3s ease-out; 
  }
.navbar-menu {
    display: block;
    opacity: 0;

    position: absolute;   /* or flojat: left; width: 100%;*/
    left: 0;
    right: 0;

    /* transform: translateX(50%); */
    transition: all .3s ease-in;
    pointer-events: none;
}

.navbar-menu.is-active {
    opacity: 1;
    transform: none;
    pointer-events: auto;
}
  
  .navbar-item h1, .navbar-item img {
    display: none!important;
  }
}
</style>
