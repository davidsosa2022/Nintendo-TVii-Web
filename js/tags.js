ridOfLoad();

const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
setMiiName = document.getElementById("play-user-mii-name");
setMii = document.getElementById("play-user-mii");
setMiiName.innerText=vino.act_getName(activeUserSlot);
setMii.src=vino.act_getMiiImageEx(activeUserSlot, 2);

document.getElementById("play-user-recent-answers").addEventListener('scroll', scrollSound);
document.getElementById("play-user-recent-answers").addEventListener('touchend', scrollEndSound);

//Button code
  function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }

  var lStickRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 536870912) {
      document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var lStickLeftCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 1073741824) {
      document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var lStickUpCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold ===  268435456) {
      document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
    }

  }, 10);

  var lStickDownCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 134217728) {
      document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
    }

  }, 10);

  var rStickUpCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold ===  16777216) {
      document.getElementById("play-user-recent-answers").scrollTop += lerp(-15, -15, (wiiu.gamepad.rStickY));
    }

  }, 10);

  var rStickDownCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 8388608) {
      document.getElementById("play-user-recent-answers").scrollTop += lerp(15, 15, (wiiu.gamepad.rStickY));
    }

  }, 10);

  var bButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 16384) {
     vino.soundPlay('SE_RETURN');
     history.back();
    }

  }, 150);