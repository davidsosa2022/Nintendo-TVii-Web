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

  var bButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 16384) {
     vino.soundPlay('SE_RETURN');
     history.back();
    }

  }, 150);

  var yButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 4096) {
    vino.emulate_touch(360, 480, 1);
    vino.emulate_inputDelay(2);
    }

  }, 120);


