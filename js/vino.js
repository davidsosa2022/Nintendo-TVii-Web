vino.ir_enableCodeset(1); //enable the IR codeset

//get the user Mii image and name
const activeUserSlot = vino.act_getCurrentSlotNo();
img = document.getElementById("main-mii-image");
span = document.getElementById("main-mii-name");

img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);

  function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }


  var lStickRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 536870912) {
      document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var rStickRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 1073741824) {
      document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var bButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 16384) {
      history.back();
    }

  }, 50);
