document.addEventListener("DOMContentLoaded", function () {
    const box1 = document.querySelector("#box1");
    const box2 = document.querySelector("#box2");
    const box3 = document.querySelector("#box3");
    const box4 = document.querySelector("#box4");
  
    box1.addEventListener("click", function () {
      // Open the LinkedIn link in a new tab
      window.open("https://www.linkedin.com/", "_blank");
    });
  
    box2.addEventListener("click", function () {
      // Open the Instagram link in a new tab
      window.open("https://www.instagram.com/", "_blank");
    });
  
    box3.addEventListener("click", function () {
      // Open the Twitter link in a new tab
      window.open("https://www.twitter.com/", "_blank");
    });
  
    box4.addEventListener("click", function () {
      // Open the personal website link in a new tab
      window.open("https://www.example.com/", "_blank");
    });
  });
  