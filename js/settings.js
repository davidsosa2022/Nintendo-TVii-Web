ridOfLoad();
var scrollWidth = document.body.scrollWidth;
var clientWidth = document.body.clientWidth;
document.body.scrollLeft = scrollWidth - clientWidth;
//Button code
const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
setMiiBody = document.getElementById("settings-mii-body");
setMiiName = document.getElementById("settings-mii-name");
setMiiName.innerText=vino.act_getName(activeUserSlot);
setMiiBody.src=vino.act_getMiiImageEx(activeUserSlot, 7);
