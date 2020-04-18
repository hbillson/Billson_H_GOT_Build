(() => {
  // variables at the top -> elements on the page we need to work with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      gotVideo = lightBox.querySelector("video"),
      closeButton = document.querySelector(".close"),
      pauseButton = document.querySelector(".pause"),
      playButton = document.querySelector(".play"),
      rewindButton = document.querySelector(".rewind"),
      houseName = document.querySelector("h1"),
      houseDescription = document.querySelector(".house-info"), 
      vidControls = document.querySelector(".controls"),
      boxCover = document.querySelector(".lightbox-cover"),
      banner = document.querySelector("#houseImages");

    const houseData = [

    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling 
    over the vast region known as the North from their seat in Winterfell. It 
    is one of the oldest lines of Westerosi nobility by far, claiming a line 
    of descent stretching back over eight thousand years. Before the Targaryen 
    conquest, as well as during the War of the Five Kings and Daenerys Targaryen's 
    invasion of Westeros, the leaders of House Stark ruled over the region as the 
    Kings in the North.`, 0],

    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great 
    House of Westeros. A cadet branch was formerly the royal house, but House 
    Lannister now controls the throne. House Baratheon traditionally ruled the 
    Stormlands on the eastern coast of Westeros, aptly named for its frequent 
    storms, from their seat of Storm's End. House Baratheon became the 
    royal house of the Seven Kingdoms after Robert Baratheon led a 
    rebellion against the Targaryen dynasty. At the end of the rebellion, 
    Robert ascended the Iron Throne as Robert I and married Cersei Lannister 
    after the death of Lyanna Stark.`, 600],

    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses 
    of Westeros, one of its richest and most powerful families and oldest 
    dynasties. It is also the current royal house of the Seven Kingdoms 
    following the extinction of House Baratheon of King's Landing, which 
    had been their puppet house anyway. The Lannisters rule over the Westerlands. 
    Their seat is Casterly Rock, a massive rocky promontory overlooking the 
    Sunset Sea which has had habitations and fortifications built into it over 
    the millennia. They are the Lords Paramount of the Westerlands and Wardens 
    of the West. As the new royal house, they also rule directly over the Crownlands 
    om their seat of the Red Keep in King's Landing, the traditional seat of the 
    royal family.`, 1200],

    ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. 
    It rules over the Iron Islands, a harsh and bleak collection of islands off 
    the west coast of Westeros, from the castle at Pyke. The head of the house 
    is the Lord Reaper of Pyke. House Greyjoy's sigil is traditionally a golden 
    kraken on a black field. Their house words are "We Do Not Sow," although 
    phrase "What Is Dead May Never Die" is also closely associated with House 
    Greyjoy and their bannermen, as they are associated with the faith of the 
    Drowned God.`, 1800],

    ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. 
    Its most senior member carried the title of Lord of Riverrun and Lord Paramount 
    the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son 
    of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue 
    background. Their house words are "Family, Duty, Honor."`,2400],

    ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. 
    It has ruled over the Vale of Arryn for millennia, originally as the Kings of 
    Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens 
    of the East under the Targaryen kings and Baratheon-Lannister kings. The 
    nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his 
    stepfather Petyr Baelish acting as Lord Protector until he reaches the age of 
    majority.`, 3000],

    ["Targaryen", `House Targaryen of Dragonstone is a Great House of Westeros and 
    as the ruling royal House of the Seven Kingdoms for three centuries since it 
    conquered and unified the realm, before it was deposed during Robert's Rebellion 
    nd House Baratheon replaced it as the new royal House. The few surviving Targaryens 
    fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based 
    n Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake 
    the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as 
    he royal House following the destruction of the Great Sept of Baelor.`, 3600],

    ["Frey", `House Frey of the Twins was the Great House of the Riverlands, having 
    ained their position for their treachery against their former liege lords, House 
    Tully, who were stripped of all their lands and titles for their rebellion 
    against the Iron Throne; House Tully had supported the independence movement 
    for the Kingdom of the North. The current head of the house is unknown following 
    the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and 
    Walder Rivers, by the vengeful Arya Stark. This is made more complex by the 
    subsequent assassination of all the male Freys soon after.`, 4200]

    ]




  function moveBanner() {
    debugger;
    houseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
    houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;
    var house = [this.dataset.offset];
    targetName = this.className.split(" ")[1]; 
    var targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);
    var newVideoSource = `video/House-${targetSource}.mp4`;
    currentHouse = document.querySelector(`.${targetName}`);
    
    if (house == 0) {
        if (!banner.classList.contains("moved")) { return false }
            var rect = banner.getBoundingClientRect();
            x = Math.abs(rect.left);
            console.log(x);
            new_x = x+60;

            banner.animate([
                { transform: 'translateX(-600px)'}, 
                { transform: 'translateX(' + new_x + 'px)'}
            ], {
            duration: 2000,
            easing: 'ease-in-out',
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
            })
        banner.classList.remove("moved");
        banner.classList.remove("clicked");
        setTimeout(showLightbox, 2000);
        return false;
    }
    else {
        first_x = houseData[house][2] - 600;
            if (currentHouse.classList.contains("clicked")) { 
                var rect = banner.getBoundingClientRect();
                x = Math.abs(rect.left);
                console.log(x);
                old_x = houseData[house][2];
                new_x = Math.abs(x - old_x + 60);

                banner.animate([
                    { transform: 'translateX(-600px)'}, 
                    { transform: 'translateX(' + new_x + 'px)'}
                ], {
                duration: 2000,
                easing: 'ease-in-out',
                iterations: 1,
                direction: 'alternate',
                fill: 'forwards'
                })
                currentHouse.classList.remove("clicked");
                 setTimeout(showLightbox(newVideoSource), 2000);
                return false;
            }
        }
        banner.style.left = '-' + `${first_x}` + 'px';

    banner.animate([
            { transform: 'translateX(0px)'}, 
            { transform: 'translateX(-600px)'}
        ], {
        duration: 2000,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'alternate',
        fill: 'forwards'
        })
    currentHouse.classList.add("clicked");
    banner.classList.add("moved");

    setTimeout(boxDelay, 2200);

    function boxDelay() {
         showLightbox(newVideoSource);
    }
}      
  

  function showLightbox(newVideoSource) { 
    gotVideo.src = newVideoSource;
    gotVideo.play();
    lightBox.classList.remove("notPlaying");

  }

  function hideLightBox() {
    debugger;
    lightBox.classList.add("notPlaying");
    gotVideo.pause();
    gotVideo.currentTime = 0;
  }

  function showControls() {
    vidControls.classList.add("controls-show");
    boxCover.classList.add("cover-show");
    lightBox.classList.remove("playing");

  }

   function hideControls() {
    if (vidControls.classList.contains("controls-show")) {
        vidControls.classList.remove("controls-show");
        boxCover.classList.remove("cover-show");
    }
  }

  function vidPause() {
    gotVideo.pause();
    pauseButton.classList.add("pause-hiding");
    playButton.classList.add("play-showing");
  }

   function vidPlay() {
    gotVideo.play();
    pauseButton.classList.remove("pause-hiding");
    playButton.classList.remove("play-showing");
  }

  function vidRewind() {
    gotVideo.currentTime = 0;
    gotVideo.play;
  }

  // add a click event to the sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", moveBanner));
  gotVideo.addEventListener("mouseover", showControls);
  boxCover.addEventListener("mouseover", showControls);
  boxCover.addEventListener("mouseout", hideControls);
  vidControls.addEventListener("mouseover", showControls);
  gotVideo.addEventListener("mouseout", hideControls);
  closeButton.addEventListener("click", hideLightBox);
  pauseButton.addEventListener("click", vidPause);
  rewindButton.addEventListener("click", vidRewind);
  playButton.addEventListener("click", vidPlay);
  gotVideo.addEventListener("ended", hideLightBox);

})();