(() => {
  // variables at the top -> elements on the page we need to work with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      gotVideo = lightBox.querySelector("video"),
      closeLightBox = lightBox.querySelector(".lightbox-close"),
      houseName = document.querySelector("h1");

     const houseData = {
     	"Stark", 
     	"Baratheon", 
     	"Lannister"
     }
  // events go in the middle
  function showLightbox() {
    // pop open a lightbox here and show some content
    // start with the house name 
    houseName.textContent = `House ${houseData[this.dataset.offset]}`;
    // debugger;

    // need to get the class name from the element so we can match them
    let targetName = this.className.split(" ")[1]; // this will strip out the name
    let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);

    let newVideoSource = `video/House-${targetSource}.mp4`;

    debugger; 

    gotVideo.src = newVideoSource;

    gotVideo.load();
    gotVideo.play();

    lightBox.classList.add("show-lightbox");

    gotVideo.play();
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");

    gotVideo.pause();
    gotVideo.currentTime = 0;
  }

  // add a click event to the sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightbox));

  // add an event handler for the lightbox close button
  closeLightBox.addEventListener("click", hideLightBox);
})();