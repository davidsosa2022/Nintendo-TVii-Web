const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
img = document.getElementById("mii-image");
span = document.getElementById("mii-name");
img.src=vino.act_getMiiImage(activeUserSlot);
span.innerText=vino.act_getName(activeUserSlot);
