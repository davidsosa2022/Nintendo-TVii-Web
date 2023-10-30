tvii.showLoadVisible(false);

var doodleModal = document.getElementById("doodle-modal");
var liveCommentsModal = document.getElementById("tag-live-comments-js");
var backButton = document.getElementById("back");
var homeSignButton = document.getElementById("homeSign");
var remoteButton = document.getElementById("remote");
var exitModalButton = document.getElementById("exitModal");
var finishModalButton = document.getElementById("finishModal");
var doodleButton = document.getElementById("doodle");
if (doodleModal) {
doodleModal.style.display = "none";
exitModalButton.style.display = "none";
finishModalButton.style.display = "none";
var isDoodle = false;
}

if(document.getElementById("play-user-mii-name")){
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
}
if (liveCommentsModal) {
function showDoodleModal() {
  isDoodle = true;
  liveCommentsModal.style.display = "none";
  doodleButton.style.display = "none";
  backButton.style.display = "none";
  remoteButton.style.display = "none";
  
  doodleModal.style.display = "block";
  exitModalButton.style.display = "block";
  finishModalButton.style.display = "block";
 }

function hideDoodleModal() {
  isDoodle = false;
  
  doodleModal.style.display = "none";
  exitModalButton.style.display = "none";
  finishModalButton.style.display = "none";

  doodleButton.style.display = "block";
  backButton.style.display = "block";
  remoteButton.style.display = "block";
  liveCommentsModal.style.display = "block";
 }

 bButtonCheck = setInterval(function() {
  wiiu.gamepad.update()
  if(wiiu.gamepad.hold === 16384 && isDoodle === true) {
    hideDoodleModal();
    history.forward();
  }
  else if (wiiu.gamepad.hold === 16384 && isDoodle === false && liveCommentsModal.style.display === "block") {
    history.back();
  }  
 }, 150);

}