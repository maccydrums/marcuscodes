<template>
  <div class="parallax-section">
    <div class="parallax-child-section">
      <section class="fw-main-row" id="frontlashID">
        <div class="education">
          <h1>Skills</h1>
          <div class="education-header">
            <i class="fab fa-vuejs"></i>
            <i class="fab fa-react"></i>
            <i class="fab fa-git-square"></i>
            <i class="fab fa-npm"></i>
            <i class="fab fa-node"></i>
            <i class="fab fa-js"></i>
            <i class="fab fa-digital-ocean"></i>
          </div>
          <div class="columns is-variable is-4 grid-xl">
            <figure class="column">
              <ul>
                <li>JavaScript ES6</li>
                <li>HTML5 & CSS with SEO</li>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>Agile Project Methods</li>
              </ul>
            </figure>
            <figure class="column">
              <ul>
                <li>UX & UI Design</li>
                <li>Test-driven Development</li>
                <li>Databases (SQL/NoSQL)</li>
                <li>Cloud Services (Docker & Digital Ocean)</li>
              </ul>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style scoped>
.parallax-section {
  position: relative;
  width: 100%;
  height: 750px;
}
.parallax-child-section {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 750px;
}
@media screen and (max-width: 1024px) {
  .parallax-section {
    position: relative;
    width: 100%;
    height: 1324px;
  }
  .parallax-child-section {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1324px;
  }
  #frontlashID {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    transform: translateZ(0);
    will-change: transform;
    z-index: 1;
    background-attachment: scroll !important;
  }
  .education {
    margin-top: 100px !important;
  }
}
@media screen and (max-width: 768px) {
  .parallax-section {
    position: relative;
    width: 100%;
    height: 1024px;
  }
  .parallax-child-section {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1024px;
  }
  #frontlashID {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    transform: translateZ(0);
    will-change: transform;
    z-index: 1;
    background-attachment: scroll !important;
  }
  .education {
    margin-top: 80px !important;
  }
}
@media screen and (max-width: 500px) {
  .parallax-section {
    position: relative;
    width: 100%;
    height: 812px;
  }
  .parallax-child-section {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 812px;
  }
  #frontlashID {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    transform: translateZ(0);
    will-change: transform;
    z-index: 1;
    background-attachment: scroll !important;
  }
}
@media screen and (max-width: 380px) {
  .parallax-section {
    position: relative;
    width: 100%;
    height: 740px;
  }
  .parallax-child-section {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 740px;
  }
  #frontlashID {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    transform: translateZ(0);
    will-change: transform;
    z-index: 1;
    background-attachment: scroll !important;
  }
  .education {
    margin-top: 50px !important;
  }
  .education-header {
    margin-bottom: 0px !important;
  }
  ul li {
    font-size: 23px !important;
  }
}
#frontlashID {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  will-change: transform;
  z-index: 1;
}
.fw-main-row {
  background-attachment: scroll;
  background-image: url("/skills.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.education {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 650px;
  margin-top: 80px;
  padding: 20px;
  color: white;
}
.education-header {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  margin-bottom: 30px;
}
.education-header svg {
  margin: 10px;
  font-size: 60px;
  margin-bottom: 40px;
}
h1 {
  font-size: 45px;
  font-weight: 500;
}
ul li {
  font-size: 30px;
  font-weight: 500;
  list-style-type: initial;
  margin-left: 50px;
}
@media only screen and (min-device-width: 500px) and (max-device-width: 1024px) {
  .education {
    background-attachment: unset !important;
    background-position: center top !important;
  }
}
@media screen and (max-width: 780px) {
  .education {
    min-height: 750px;
  }
}
@media screen and (max-width: 500px) {
  h1 {
    margin-top: 10px;
  }
  .education-header svg {
    margin: 5px;
    font-size: 35px;
    margin-top: 10px;
  }
  ul li {
    font-size: 21px!important;
    margin-left: 35px;
    margin-top: 0px;
  }
}
</style>
