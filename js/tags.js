ridOfLoad();

const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user

document.addEventListener("DOMContentLoaded", function() {
setMiiName = document.getElementById("play-user-mii-name");
setMii = document.getElementById("play-user-mii");
setMiiName.innerText=vino.act_getName(activeUserSlot);
setMii.src=vino.act_getMiiImageEx(activeUserSlot, 2);

document.getElementById("play-user-recent-answers").addEventListener('scroll', function(){vino.soundPlay('SE_BAR_SCROLL');});

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
});