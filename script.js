document.addEventListener("DOMContentLoaded", function () {
    // Get references to the social media boxes
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
  
    // Define the links for each social media platform
    const linkedinLink = "https://www.linkedin.com/";
    const instagramLink = "https://www.instagram.com/";
    const twitterLink = "https://twitter.com/";
    const webLink = "https://www.example.com/";
  
    // Add event listeners to the boxes
    box1.addEventListener("click", function () {
      console.log("Clicked on box1");
      window.open(linkedinLink, "_blank");
    });
  
    box2.addEventListener("click", function () {
      window.open(instagramLink, "_blank");
    });
  
    box3.addEventListener("click", function () {
      window.open(twitterLink, "_blank");
    });
  
    box4.addEventListener("click", function () {
      window.open(webLink, "_blank");
    });
  });
  