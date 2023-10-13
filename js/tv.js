var yButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 4096) {
      searchY();
    }

  }, 150);


