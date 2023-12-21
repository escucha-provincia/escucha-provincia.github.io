document.addEventListener("DOMContentLoaded", function () {
  var audioPlayer = document.getElementById("audioPlayer");
  var playButton = document.getElementById("playButton");
  var stopButton = document.getElementById("stopButton");
  var audio__bar = document.getElementById("audio__bar");
  var volumeXmark = document.getElementById("volume-xmark");
  var volumeHigh = document.getElementById("volume-high");
  var volumeOff = document.getElementById("volume-off");
  var volumeLow = document.getElementById("volume-low");
  var volumeSlider = document.getElementById("volumeSlider");
  var iconShare = document.getElementById("iconShare");
  var shareSocial = document.getElementById("shareSocial");
  var flag = 0;
  var saveVolumeSlider = 0;

  var flagInicial = 0;


  playButton.addEventListener("click", function () {
    flagInicial = 0;
    var listening = document.getElementById("listening");
    listening.textContent = "Estás escuchando...";
    audioPlayer.play();
    playButton.style.display = "none";
    stopButton.style.display = "flex";
    audio__bar.classList.add("red");

  });

  stopButton.addEventListener("click", function () {
    flagInicial = 1;
    listening.textContent = "Escucha...";
    audioPlayer.pause();
    stopButton.style.display = "none";
    playButton.style.display = "flex";
    audio__bar.classList.remove("red");//#535250

  });

  volumeHigh.addEventListener("click", function () {
    saveVolumeSlider = volumeSlider.value;
    audioPlayer.volume = 0;
    volumeSlider.value = 0;
    volumeHigh.style.display = "none";
    volumeXmark.style.display = "flex";
  });

  volumeOff.addEventListener("click", function () {
    saveVolumeSlider = volumeSlider.value;
    audioPlayer.volume = 0;
    volumeSlider.value = 0;
    volumeOff.style.display = "none";
    volumeXmark.style.display = "flex";
  });

  volumeLow.addEventListener("click", function () {
    saveVolumeSlider = volumeSlider.value;
    audioPlayer.volume = 0;
    volumeSlider.value = 0;
    volumeLow.style.display = "none";
    volumeXmark.style.display = "flex";
  });

  volumeXmark.addEventListener("click", function () {
    audioPlayer.volume = saveVolumeSlider;
    volumeSlider.value = saveVolumeSlider;
    volumeXmark.style.display = "none";

    if (volumeSlider.value < 0.5 && volumeSlider.value > 0) {
      volumeLow.style.display = "flex";
    } else if (volumeSlider.value == 0) {
      volumeOff.style.display = "flex";
    } else {
      volumeHigh.style.display = "flex";
    }

  });

  volumeSlider.addEventListener("input", function () {
    audioPlayer.volume = volumeSlider.value;
    if (volumeSlider.value < 0.5 && volumeSlider.value > 0) {
      volumeHigh.style.display = "none";
      volumeOff.style.display = "none";
      volumeXmark.style.display = "none";
      volumeLow.style.display = "flex";
    } else if (volumeSlider.value == 0) {
      volumeLow.style.display = "none";
      volumeXmark.style.display = "none";
      volumeHigh.style.display = "none";
      volumeOff.style.display = "flex";
    } else {
      volumeOff.style.display = "none";
      volumeXmark.style.display = "none";
      volumeLow.style.display = "none";
      volumeHigh.style.display = "flex";
    }

  });

  iconShare.addEventListener("click", function () {

    if (flag % 2 == 0) {
      shareSocial.classList.add("left");
    } else {
      shareSocial.classList.remove("left");
    }
  
    flag++;
  });

});




