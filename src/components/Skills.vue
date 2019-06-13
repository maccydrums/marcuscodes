<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="skills-content">
      <div class="box-one">
        <img src="/front.png" style="width: 305px; height: 178px">
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
      </div>
      <div class="box-two" style="width: 305px; height: 178px">
        <img src="/ux.jpg">
        <h3>UX/UI design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="box-three">
        <img src="/backend.jpg" style="width: 305px; height: 178px">
        <h3>Back End Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0,0%,20%,1.0);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 80%;
  min-height: 350px;
  margin-top: 80px;
  padding: 20px;
}
h1 {
  font-size: 40px;
  font-weight: 500;
}
.skills-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  background-color: transparent;
  width: 100%;
  height: 500px;
}
.box-one, .box-two, .box-three {
  width: 31%;
  min-height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;
  width: 100%;
  text-align: center;
}
</style>
