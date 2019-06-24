<template>
  <div class="wrapper is-mobile">
    <h1>Marcus Andersson</h1>
    <h4>Frontend developer</h4>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-image: url('/a1.jpg');

    position:relative;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;

    /* background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    /*background-repeat: no-repeat;
    background-position: center;  */
    /* color: white; */
    /* color: rgba( 45, 55, 65, .85 ); */
    width: 100%;
    min-height: 750px;
  }
  .wrapper img {
    margin-top: 0px;
  }
  h1 {
    margin-top: 150px;
    font-size: 60px;
    font-weight: 500;
    color: hsla(0,0%,20%,1.0);
	  animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
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
    color: hsla(0,0%,20%,1.0);
  }
  @media screen and (max-width: 1024px) {
    .wrapper {
      min-height: 1300px;
    }
    h1 {
      margin-top: 250px;
    }
    h4 {
      width: 45%;
    }
  }
  @media screen and (max-width: 500px) {
  .wrapper {
    background-position: center;
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
  @media screen and (min-width: 1400px) {
    .wrapper h2 {
      margin-bottom: -120px;
    }
  }
</style>
