$(document).ready(function () {
  const errormessage = $("#input-box input ~ p");
  const input = $("#input-box input");
  const spinicon = $(".fa-spinner");
  const successicon = $(".fa-circle-check");
  const message1 = $("#ReplyMessage1");
  const message2 = $("#ReplyMessage2");
  $("#SubmitBtn").click(function (event) {
    let isValid = true;

    $("#input-box input, #input-box textarea").each(function () {
      if (!this.checkValidity()) {
        isValid = false;
        $(this).siblings(".error-message").show();
      } else {
        $(this).siblings(".error-message").hide();
      }
    });

    if (!isValid) {
      event.preventDefault();
      return;
    } else {
      spinicon.css({ visibility: "visible" });
      spinicon.addClass("fa-spin");
      setTimeout(function () {
        spinicon.css({ visibility: "hidden" });
        successicon.css({ visibility: "visible" });
      }, 2000);

      $("#input-box input, #input-box textarea").each(function () {
        $(this).val("");
        message1.css("animation", "none");
        message2.css({ animation: "none" });

        setTimeout(function () {
          successicon.css({ visibility: "hidden" });
        }, 2700);
      });

      setTimeout(function () {
        message1.css("animation", "showReplyMessage1 3s forwards");
        message2.css({
          animation: "showReplyMessage2 3s forwards",
          "animation-delay": "2s",
        });
      }, 3000);
    }
  });
});
