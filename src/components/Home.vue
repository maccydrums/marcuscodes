<template>
  <div id="parallax-section">
    <div class="parallax-child-section">
      <section class="fw-main-row" id="frontlashID">
        <div class="wrapper">
          <h1>Marcus Andersson</h1>
          <h4>Frontend developer</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#parallax-section {
  position: relative;
  margin-top: 70px;
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
  background-image: url("/a1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 750px;
}
.wrapper img {
  margin-top: 0px;
}
h1 {
  margin-top: 180px;
  font-size: 60px;
  font-weight: 500;
  color: hsla(0, 0%, 20%, 1);
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
h2 {
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 40px;
}
h3 {
  text-align: center;
  font-weight: 500;
}
h4 {
  border-top: 1px solid rgb(187, 187, 187);
  border-bottom: 1px solid rgb(187, 187, 187);
  text-align: center;
  text-transform: uppercase;
  word-spacing: 3px;
  padding: 8px 0 6px 0;
  letter-spacing: 2px;
  margin-top: -5px;
  font-weight: 500;
  font-size: 25px;
  width: 30%;
  color: hsla(0, 0%, 20%, 1);
}
@media screen and (max-width: 1024px) {
  .wrapper {
    min-height: 1300px;
  }
  h1 {
    margin-top: 250px;
    font-size: 60px;
  }
  h4 {
    width: 45%;
  }
}

@media screen and (max-width: 500px) {
  .wrapper {
    background-position-x: -450px;
    min-height: 850px;
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    margin-top: 250px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    margin-top: 25px;
    font-size: 19px;
  }
  .wrapper h4 {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    text-align: center;
    text-transform: uppercase;
    word-spacing: 3px;
    padding: 8px 0 6px 0;
    letter-spacing: 2px;
    margin-top: -5px;
    font-weight: 500;
    font-size: 15px;
    width: 90%;
  }
}
@media screen and (max-width: 360px) {
  h1 {
    font-size: 35px;
    margin-top: 200px;
  }
}
@media screen and (min-width: 1400px) {
  .wrapper h2 {
    margin-bottom: -120px;
  }
}
</style>
