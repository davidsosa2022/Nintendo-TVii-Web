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

    var lKeyLeftCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 32) {
      document.body.scrollLeft -= 250;
    }

  }, 100);

  var rKeyRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 16) {
      document.body.scrollLeft += 250;
    }

  }, 100);

  var yButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 4096) {
    }

  }, 100);