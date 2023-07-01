vino.ir_enableCodeset(1); //enable the IR codeset

//get the user Mii image and name
const activeUserSlot = vino.act_getCurrentSlotNo();
img = document.getElementById("mii-image");
span = document.getElementById("mii-name");

img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);