const IR_CODES = {
    POWER: 0,
    CH_UP: 1,
    CH_DOWN: 2,
    VOL_UP: 3,
    VOL_DOWN: 4,
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 15,
    6: 16,
    7: 17,
    8: 18,
    9: 19,
    0: 20,
    INPUT: 52
};

vino.ir_enableCodeset(1); //enable the IR codeset

//get the user Mii image and name
const activeUserSlot = vino.act_getCurrentSlotNo();
img = document.getElementById("main-mii-image");
span = document.getElementById("main-mii-name");

img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);

function exit() {
vino.soundPlayEx('SE_COMMON_FINISH', 1);
vino.exit();
}

function back() {
vino.soundPlayEx('SE_HTML_CANCEL_TOUCH_OFF', 1);
history.back();
}

function miiClick() {
vino.soundPlayEx('SE_FACE', 1);
}

function keyboardClick() {
vino.soundPlayEx('SE_COMMON_TEXTBOX', 1);
}

function changeToChannel(p1, p2, p3) {
vino.ir_send(p1, 0);
vino.ir_send(p2, 0);
vino.ir_send(p3, 0);
}