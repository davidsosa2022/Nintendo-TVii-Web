//PD: I hate how overcomplicated the tvii apis are. Holy shit.
//idrc but like, why is the navigation box not scrolling, WHY.
//anyways, first of all, show the loading icon
showLoad();

//if the user has already seen the splash screen, set loading icon for 1 second and 30
if (sessionStorage.getItem("splashLoaded")  === "true") {
setTimeout(hideLoad, 1500); 
}

//further proving TVii is like a baby that needs instructions while miiverse and eShop do this automatically...
document.addEventListener("click", resetNavi);
document.addEventListener("scroll", resetNavi);

//set layout auto loading icon
vino.lyt_setIsEnableClientLoadingIcon(true);
vino.lyt_setIsEnableWhiteMask(false);

//functions from onclick and else
function showLoad() {
vino.loading_setIconRect(360, 160, 120, 120);
vino.loading_setIconAppear(true);
}

function ridOfLoad() {
vino.loading_setIconVisibility(false);
}

function hideLoad() {
vino.loading_setIconAppear(false);
}

function resetNavi() {
vino.navi_reset();
}

function exit() {
vino.navi_decide();
vino.lyt_startTouchEffect();
document.getElementById("exit").classList.add('pressed');
vino.soundPlayEx('SE_COMMON_FINISH', 1);
setTimeout(function(){vino.exit();}, 500);
}

function back() {
vino.navi_decide();
vino.lyt_startTouchEffect();
document.getElementById("back").classList.add('pressed');
vino.soundPlayEx('SE_HTML_CANCEL_TOUCH_OFF', 1);
setTimeout(function(){history.back();}, 500);
}

function miiClick() {
vino.navi_decide();
vino.lyt_startTouchEffect();
vino.soundPlayEx('SE_FACE', 1);
}

function keyboardClick() {
vino.navi_decide();
vino.lyt_startTouchEffect();
vino.soundPlayEx('SE_COMMON_TEXTBOX', 1);
}

function programClick() {
vino.navi_decide();
vino.lyt_startTouchEffect();
vino.soundPlayEx('SE_HTML_TOUCH_ON', 1);
}

//enable the IR features and codeset
vino.ir_enableCodeset(1);

function changeToChannel(p1, p2, p3) {
vino.ir_send(p1, 0);
vino.ir_send(p2, 0);
vino.ir_send(p3, 0);
}

//initial splash screen
if (!sessionStorage.getItem("splashLoaded")) {
  document.getElementById("splash").classList.remove("hide");
  setTimeout(hideLoad, 4800);
  document.body.style.position = "fixed";
  vino.navi_setMoveMethod(-1); 
  sessionStorage.setItem("splashLoaded", "true");
  setTimeout(function() {
    document.getElementById("splash").classList.add("hide");    
    vino.navi_setMoveMethod(0);
    document.body.style.position = "relative";
  }, 5000);
}

//get the Mii image, along with current slot no.
const activeUserSlot = vino.act_getCurrentSlotNo();
var miiImg = document.getElementById("main-mii-image");
var miiName = document.getElementById("settings-mii-name");

miiImg.src=vino.act_getMiiImage(activeUserSlot);
miiName.innerText=vino.act_getName(activeUserSlot);

//literally an auto power down api is the last thing i expected
if (vino.apd_isEnabled()) {
  vino.apd_enable();
} else {
  vino.apd_disable();
}