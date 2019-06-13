<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>Do you want a responsive website that looks good on both desktops,<br/> tablets and mobiles?
    Or do you just want some creative ideas for how your<br/> website can look? <strong>Hit me up!</strong>
    <br/><br/>
    If you are interested in any of my web development services or would like to<br/> speak about a job offer, please complete the contact form below. I will reach out<br/> to you within 48 hours to discuss your submission.</p>
    <form action="https://formspree.io/marcusprivat@live.com" method="POST">
    <div class="field">
  <label class="label">Full Name</label>
  <div class="control">
    <input class="input" type="text" name="Name" placeholder="First and last name" style="width: 300px">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left">
    <input class="input" type="email" name="_replyto" placeholder="your@email.com" value="" style="width: 300px">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>
<input type="hidden" name="_subject" value="Website contact" />
<input type="text" name="_gotcha" style="display:none" />
<input type="hidden" name="_next" value="//localhost:8080" />
<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <input class="input" type="text" name="Subject" placeholder="Ex Job offer" style="width: 300px">
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" type="text" name="Message" placeholder="" style="width: 450px; height: 150px"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" type="submit" value="Send">Submit</button>
  </div>
</div>
</form>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0,0%,20%,1.0);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 80%;
  min-height: 350px;
  margin-top: 40px;
  padding: 20px;
  margin-bottom: 20px;
}
.control button {
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  width: 100px;
}
h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
}
p {
  margin-bottom: 30px;
}
</style>
