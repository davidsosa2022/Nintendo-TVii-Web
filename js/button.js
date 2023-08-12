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
      vino.soundPlayEx('SE_HTML_CANCEL_TOUCH_OFF', 1);
      history.back();
    }

  }, 50);