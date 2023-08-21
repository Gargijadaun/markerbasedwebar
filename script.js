document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".clickable");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const buttonId = button.id;
  
        switch (buttonId) {
          case "button1":
            // Open the LinkedIn link in a new tab
            window.open("https://www.linkedin.com/", "_blank");
            break;
          case "button2":
            // Open the Instagram link in a new tab
            window.open("https://www.instagram.com/", "_blank");
            break;
          case "button3":
            // Open the Twitter link in a new tab
            window.open("https://www.twitter.com/", "_blank");
            break;
          case "button4":
            // Open the personal website link in a new tab
            window.open("https://www.example.com/", "_blank");
            break;
        }
      });
    });
  });
  