

setMiiBody = document.getElementById("settings-mii-body");
setMiiName = document.getElementById("settings-mii-name");
setMiiName.innerText=vino.act_getName(activeUserSlot);
setMiiBody.src=vino.act_getMiiImageEx(activeUserSlot, 7);
