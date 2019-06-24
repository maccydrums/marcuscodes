<template>
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
</template>

<script>
export default {
  name: 'Education',
}
</script>

<style scoped>
.education {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-image: url('/skills.jpg');
    position:relative;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;
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
.education-header svg  {
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
  list-style-type:initial;
  margin-left: 50px;
}
@media screen and (max-width: 780px) {
  .education {
    min-height: 750px;
  }
}
@media screen and (max-width: 500px) {
  .education-header svg  {
    margin: 5px;
    font-size: 35px;
    margin-top: 10px;
  }
  ul li {
    font-size: 20px;
    margin-left: 35px;
    margin-top: 5px;
  }
}
</style>
