ridOfLoad();

//Button code
const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user

document.addEventListener("DOMContentLoaded", function() {
setMiiBody = document.getElementById("settings-mii-body");
setMiiName = document.getElementById("settings-mii-name");
setMiiName.innerText=vino.act_getName(activeUserSlot);
setMiiBody.src=vino.act_getMiiImageEx(activeUserSlot, 7);

});