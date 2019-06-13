<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <div class="portfolio-content">
      <div class="thumbnail item">
        <a href="#" target="_blank">
          <img src="/Svenskarna i NHL.png" alt="screenshot of project">
        </a>
      </div>
      <div class="thumbnail item">
        <!-- <a href="#" target="_blank">
          <img src="/Porsche.png" alt="screenshot of project">
        </a> -->
        <hooper>
          <slide>
            <a href="#" target="_blank">
              <img src="/Porsche.png" alt="screenshot of project">
            </a>
          </slide>
          <slide>
            <a href="#" target="_blank">
              <img src="/Porsche - tablet.png" alt="screenshot of project">
            </a>
          </slide>
          <slide>
            <a href="#" target="_blank">
              <img src="/Porsche - mobile.png" style="background-size: cover;" alt="screenshot of project">
            </a>
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
      <div class="thumbnail item">
        <a href="#" target="_blank">
          <img src="/TMA Guld.png" alt="screenshot of project">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
  Hooper,
  Slide,
  Pagination as HooperPagination 
  } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'portfolio',
    components: {
      Hooper,
      Slide,
      HooperPagination
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0,0%,20%,1.0);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 80%;
  min-height: 950px;
  margin-top: 80px;
  padding: 20px;
}
.portfolio-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  background-color: transparent;
  width: 100%;
  height: 680px;
}
.thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  -webkit-transition: border .2s ease-in-out;
  -o-transition: border .2s ease-in-out;
  transition: border .2s ease-in-out;
}
.thumbnail a img {
  width: 100%;
  height: auto;
}
.item {
  box-shadow: rgb(195, 195, 195) 1px 1px 8px;
  height: 380px;
  width: 460px;
}
.hooper {
  height: 100%;
}
img {
  border: 0;
  vertical-align: middle;
  transition: 0.3s ease-in-out 0s;
}
h1 {
  font-size: 40px;
  font-weight: 500;
}
</style>
