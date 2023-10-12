var yButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 4096) {
    vino.emulate_touch(360, 480, 1);
    vino.emulate_inputDelay(2);
    }

  }, 150);


