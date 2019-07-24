<template>
  <div class="contact">
    <h1>Contact</h1>
    <div class="contact-content">
      <p>
        Do you want a responsive website that looks good on both desktops,
        tablets and mobiles?
        Or do you just want some creative ideas for how your
        website can look?
        <strong>Hit me up!</strong>
        <br>
        <br>If you're interested in working with me or would like to
        speak about a job offer, please complete the contact form. I'll get back
        to you as soon as possible to discuss your request.
      </p>

      <form action="https://formspree.io/marcusprivat@live.com" method="POST">
        <div class="form-group">
          <label for="inputName">Full name</label>
          <!-- <input type="text" class="form-control" id="inputName1"> -->
          <input class="input" type="text" name="Name" required>
        </div>

        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <!-- <input type="email" class="form-control" id="inputEmail1"> -->
          <input class="input" type="email" name="_replyto" required>
        </div>

        <input type="hidden" name="_subject" value="Website contact">
        <input type="text" name="_gotcha" style="display:none">
        <input type="hidden" name="_next" value="//marcuscodes.se">

        <div class="form-group">
          <label for="inputSubject">Subject</label>
          <!-- <input type="email" class="form-control" id="inputSubject1"> -->
          <input class="input" type="text" name="Subject">
        </div>
        <div class="form-group">
          <label for="inputMessage">Message</label>
          <!-- <textarea class="form-control" id="inputMessage1" rows="3"></textarea> -->
          <textarea class="textarea" type="text" name="Message" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" value="Send">Submit</button>
      </form>

      <!-- <form action="https://formspree.io/marcusprivat@live.com" method="POST">
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input class="input" type="text" name="Name" required="">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" name="_replyto" required="">
        </div>
      </div>

      <input type="hidden" name="_subject" value="Website contact">
      <input type="text" name="_gotcha" style="display:none">
      <input type="hidden" name="_next" value="//marcuscodes.se">

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <input class="input" type="text" name="Subject">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" type="text" name="Message"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit" value="Send">Submit</button>
        </div>
      </div>
      </form>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(180, 180, 180, 0.2);
  color: hsla(0, 0%, 20%, 1);
  /* color: rgba( 45, 55, 65, .85 );    ll      ALTERNATIVE FONT-COLOR*/
  width: 100%;
  min-height: 350px;
  margin-top: 80px;
  padding: 20px;
  padding-left: 80px;
  padding-right: 80px;
}
.contact-content {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
.contact-content p {
  font-size: 22px;
  margin-top: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
label {
  font-size: 18px;
  font-weight: 600;
  font-family: "Avenir", sans-serif;
}

textarea {
  width: 400px;
  height: 150px;
}
button {
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  width: 120px;
  height: 45px;
  font-size: 18px;
  font-family: "Avenir", sans-serif;
  background-color: #3273dc;
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
@media screen and (max-width: 800px) {
  .contact-content {
    flex-direction: column;
  }
}
@media screen and (max-width: 500px) {
  p {
    width: 100%;
  }
  .contact {
    width: 100%;
    min-height: 350px;
    margin-top: 80px;
    padding: 35px;
  }
  form,
  button,
  textarea {
    width: 100%;
  }
  /* .contact-content .field {
    width: 152%;
  }
  .input,
  .textarea {
    width: 100%;
  }
  .label {
    font-size: 18px;
  }
  .control button {
  width: 100%;
} */
  .contact-content {
    display: flex;
    flex-direction: column;
  }
  .contact-content p {
    font-size: 18px;
  }
}
</style>
