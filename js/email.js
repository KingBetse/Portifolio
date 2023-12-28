function sendEmail(e) {
  e.preventDefault();
  console.log("hi");
  form = document.getElementById("contact-form");

  // these IDs from the previous steps
  emailjs.sendForm("service_kkbo8i6", "template_zpq67zd", "#contact-form").then(
    function () {
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
// );
// }
