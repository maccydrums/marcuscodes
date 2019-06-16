<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>
      Do you want a responsive website that looks good on both desktops,
      tablets and mobiles?
      Or do you just want some creative ideas for how your
      website can look?
      <strong>Hit me up!</strong>
      <br>
      <br>If you are interested in any of my web development services or would like to
      speak about a job offer, please complete the contact form below. I will reach out
      to you within 48 hours to discuss your submission.
    </p>

    <form action="https://formspree.io/marcusprivat@live.com" method="POST">
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input class="input" type="text" name="Name" placeholder="First and last name">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input class="input" type="email" name="_replyto" placeholder="your@email.com" value>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <input type="hidden" name="_subject" value="Website contact">
      <input type="text" name="_gotcha" style="display:none">
      <input type="hidden" name="_next" value="//localhost:8080">

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <input class="input" type="text" name="Subject" placeholder="Ex Job offer">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" type="text" name="Message" placeholder></textarea>
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
  name: "contact"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  color: hsla(0, 0%, 20%, 1);
  /* color: rgba( 45, 55, 65, .85 );          ALTERNATIVE FONT-COLOR*/
  width: 90%;
  min-height: 350px;
  margin-top: 80px;
  padding: 20px;
  margin-bottom: 20px;
}
.field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input {
  width: 300px;
}
.textarea {
  width: 400px;
  height: 180px;
}
.control button {
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 45px;
  font-size: 20px;
  font-family: "Avenir", san-serif;
}
h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
}
p {
  margin-bottom: 30px;
  width: 500px;
}
@media screen and (max-width: 500px) {
  p {
    width: 100%;
  }
  .field {
    width: 137%;
  }
  .input,
  .textarea {
    width: 100%;
  }
  .label {
    font-size: 18px;
  }
}
</style>
