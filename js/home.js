//if the user has already seen the splash screen, set loading icon for 1 second and 30
if (sessionStorage.getItem("homeLoaded")  === "true") {
  document.getElementById("wrapper-home").classList.remove("hide");
  ridOfLoad();
  }

//get the Mii image, along with current slot no.
const activeUserSlot = vino.act_getCurrentSlotNo();
var miiImg = document.getElementById("mii-image");
miiImg.src=vino.act_getMiiImage(activeUserSlot);

//Button code
  function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }

  var yButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 4096) {
    vino.emulate_touch(360, 480, 1);
    vino.emulate_inputDelay(2);
    }

  }, 120);

//initial splash screen
if (!sessionStorage.getItem("homeLoaded")) {
  setTimeout(hideLoad, 4000);
  document.body.style.position = "fixed";
  vino.navi_setMoveMethod(-1); 
  sessionStorage.setItem("homeLoaded", "true");
  setTimeout(function() {
    document.getElementById("wrapper-home").classList.remove("hide");
    vino.navi_setMoveMethod(0);
    document.body.style.position = "relative";
  }, 4100);
}