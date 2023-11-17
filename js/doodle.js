var context;

    // shouldnt this be on vino.js, yeah soon...
    var momentIdVal = document.querySelector('#moment-value').value;
    var showIdVal = document.querySelector('#show-value').value;
    var programTopicTag = document.querySelector('#show-topic-tag').value;

    alert("Please do not try to comment or reply with any offensive or inappropiate language on TV Tag.\nFeelings set in posts, replies, Doodles and Yeahs are not crossposted to Miiverse, For more info about crossposting see the manual in the Settings page.");

function changeColor(color) {
   vino.lyt_startTouchEffect();
   vino.soundPlay('SE_A_DECIDE');
   context.strokeStyle = color;
 }

 function addYeah(button) {
   tvii.showLoad(true);
   var postId = button.getAttribute("data-comment-id");

   var request = new XMLHttpRequest();
   request.open("POST", vino.olv_getHostName() + "/v1/" + postId + "/empathies")
   request.send()
   button.classList.add("hover");
   button.removeAttribute("navi_target");
   button.setAttribute("disabled", "");
   tvii.showLoad(false);
 }

 function postComment(postInput) {
   tvii.showLoad(true);
   
   // Get the previous sibling (yeah button)
   var yeahButton = postInput.previousElementSibling;
   var postReplyingTo = yeahButton.getAttribute("data-comment-id");
   var myComment = postInput.value;
   var commentForm = new FormData();

   commentForm.append("reply_for", postReplyingTo);
   commentForm.append("comment", myComment);
   commentForm.append("pid", vino.act_getPid(activeUserSlot));

   var request = new XMLHttpRequest();
   request.open("POST", vino.olv_getHostName() + "/v1/replies");
   request.send(commentForm);

   postInput.value = "";
   tvii.showLoad(false);
}


 function selectPenSize(x) {
   document.querySelector('#pencil-t-big').classList.remove("selected");
   document.querySelector('#pencil-t-medium').classList.remove("selected");
   document.querySelector('#pencil-t-normal').classList.remove("selected");
   document.querySelector('#pencil-t-tiny').classList.remove("selected");
   x.classList.add("selected");
}

var listItems = document.querySelectorAll("#sidebar-colors-scroll li a");

// Add a class to a specific element and remove it from its siblings
function addClassColor(sib) {
  // Remove the class from all siblings
  for (var i = 0; i < listItems.length; i++) {
    var li = listItems[i];
    if (li !== sib) {
      li.classList.remove("selected");
    }
  }

  // Add the class to the specific element
  sib.classList.add("selected");
}

// Adding click event listeners to each li element
for (var i = 0; i < listItems.length; i++) {
  var li = listItems[i];
  li.addEventListener("click", function() {
   addClassColor(this);
  });
}

var feelingMii = document.querySelectorAll("#feeling-selector-popup li");

// Add a class to a specific element and remove it from its siblings
function addClassFeeling(sib) {
  // Remove the class from all siblings
  for (var i = 0; i < feelingMii.length; i++) {
    var li = feelingMii[i];
    if (li !== sib) {
      li.classList.remove("selected");
    }
  }

  // Add the class to the specific element
  sib.classList.add("selected");
}

// Adding click event listeners to each li element
for (var i = 0; i < feelingMii.length; i++) {
  var li = feelingMii[i];
  li.addEventListener("click", function() {
   addClassFeeling(this);
  });
}

var feelingMiiInput = document.querySelectorAll("#feeling-selector-toggle li");
var userMiiEmpathyToggle = document.querySelector('#user-mii-empathy-toggle-selector');

// Add a class to a specific element and remove it from its siblings
function addClassFeelingChat(sib) {
  // Remove the class from all siblings
  for (var i = 0; i < feelingMiiInput.length; i++) {
    var li = feelingMiiInput[i];
    if (li !== sib) {
      li.classList.remove("selected");
    }
  }

  sib.classList.add("selected");

  var feelingValue = sib.querySelector('input[name="feeling_id_chat"]').value;

  changeImageSource(feelingValue);
}

function changeImageSource(feelingValue) {
  var userMiiImg = userMiiEmpathyToggle.querySelector('.mii');

  switch (feelingValue) {
   case "0":
   userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 1);
   break;
   case "1":
   userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 2);
   break;
   case "2":
   userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 3);
    break;
    case "3":
   userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 4);
   break;
   case "4":
    userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 5);
   break;
   case "5":
    userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 6);
   break;
   default:
   userMiiImg.src = vino.act_getMiiImageEx(activeUserSlot, 1);
  }
}

// Adding click event listeners to each li element
for (var i = 0; i < feelingMiiInput.length; i++) {
  var li = feelingMiiInput[i];
  li.addEventListener("click", function() {
    addClassFeelingChat(this);
  });
}

document.querySelector("#user-mii-empathy-toggle-selector .mii").src = vino.act_getMiiImageEx(activeUserSlot, 1);

// Check for the canvas tag onload. 
if(window.addEventListener) { 
 window.addEventListener('load', function () {
   document.querySelector('#pencil-t-normal').classList.add("selected");
var canvas, canvaso, contexto; 
 // Default tool. (chalk, line, rectangle) 
   var tool; 
   var tool_default = 'chalk'; 
 
function init () { 
canvaso = document.querySelector('#doodle-canvas'); 
// Create 2d canvas. 
   contexto = canvaso.getContext('2d'); 
 // Build the temporary canvas. 
   var container = canvaso.parentNode; 
   canvas = document.createElement('canvas');  
   canvas.id  = 'doodle-temp-canvas'; 
   canvas.width  = canvaso.width; 
   canvas.height = canvaso.height; 
   container.appendChild(canvas); 
   context = canvas.getContext('2d'); 
   context.strokeStyle = "#000000";// Default line color. 
   context.lineWidth = 3.0;// Default stroke weight. 

   document.querySelector('#doodle-input-value').addEventListener('click', popupDoodleCheck);
   document.querySelector('#user-chat-input').addEventListener('click', popupDoodleCheck);
   document.querySelector('#sidebar-delete').addEventListener('click', cleanDraw);
   document.querySelector('#pencil-thick-select-popup').addEventListener('click',  popupDoodleCheck);
   document.querySelector('#colorHexInput').addEventListener('change', changeInputColor);
   document.querySelector('#user-chat-input').addEventListener('change', postChatComment);
   document.querySelector("#sidebar-colors-scroll").addEventListener('scroll', colorScroll);
   document.querySelector("#sidebar-pencil").addEventListener('click', penSelect);
   document.querySelector("#sidebar-feeling").addEventListener('click', feelingSelect);
   document.querySelector("#user-mii-empathy-toggle-selector").addEventListener('click', feelingSelectChat);

   function postChatComment() {
      tvii.showLoad(true);
      var myCommentValue = document.querySelector("#user-chat-input").value;
      var checkedFeelingChat = document.getElementsByName('feeling_id_chat');
      var feeling_value_chat_input;
      for (i = 0; i < checkedFeelingChat.length; i++) {
          if (checkedFeelingChat[i].checked) {
              feeling_value_chat_input = checkedFeelingChat[i].value;
          }
      }
      if (vino.ng_checkText(myCommentValue)) {
      vino.olv_postText(myCommentValue, programTopicTag, 0, false, 'vino_search_key', '', '', '', '')
      var chatForm = new FormData();

      chatForm.append("show_id", showIdVal)
      chatForm.append("moment_id", momentIdVal)
      chatForm.append("feeling_id", feeling_value_chat_input)
      chatForm.append("pid", vino.act_getPid(activeUserSlot))
      chatForm.append("comment", myCommentValue)
  
      var request = new XMLHttpRequest();
      request.open("POST", vino.olv_getHostName() + "/v1/comments")
      request.send(chatForm)
      alert(vino.olv_getPostingResult())
      //Miiverse Posting

      tvii.showLoad(false);
      document.querySelector("#user-chat-input").value = "";
   } else {alert('This comment contains inappropriate words\nPlease post a different message.'), tvii.showLoad(false);}
      }

   function changeInputColor() {
      document.querySelector('#colorHexInput').classList.add('selected');
      var inputColor = document.querySelector('#colorHexInput').value
      changeColor(inputColor);
      setTimeout(function() { 
         document.querySelector('#colorHexInput').classList.remove('selected');
      }, 800);
      }

   function colorScroll() {vino.soundPlay('SE_LIST_SCROLL');  popupDoodleCheck(); vino.navi_reset()}

   function penSelect() {
         vino.lyt_startTouchEffect(); vino.soundPlay('SE_WAVE_BALLOON_OPEN');
         document.querySelector('#pencil-thick-select-popup').classList.toggle("show");

         if (document.querySelector('#sidebar-feeling').classList.contains('selected')){
            document.querySelector('#sidebar-feeling').classList.remove('selected');
         }

         if (document.querySelector('#feeling-selector-popup').classList.contains('show')){
            document.querySelector('#feeling-selector-popup').classList.remove('show');
         }
      }

      function feelingSelect() {
         vino.lyt_startTouchEffect();
         vino.soundPlay('SE_WAVE_BALLOON_OPEN');
         document.querySelector('#feeling-selector-popup').classList.toggle("show");
         document.querySelector('#sidebar-feeling').classList.toggle("selected");

         if (document.querySelector('#pencil-thick-select-popup').classList.contains('show')){
            document.querySelector('#pencil-thick-select-popup').classList.remove('show');
            vino.soundPlay('SE_WAVE_BALLOON_CLOSE');
         }
      }

      function feelingSelectChat() {
         vino.lyt_startTouchEffect(); vino.soundPlay('SE_WAVE_BALLOON_OPEN');
         document.querySelector('#feeling-selector-toggle').classList.toggle("show");
      }

      function popupDoodleCheck() {
         if (document.querySelector('#pencil-thick-select-popup').classList.contains('show')){
            document.querySelector('#pencil-thick-select-popup').classList.remove('show');
            vino.soundPlay('SE_WAVE_BALLOON_CLOSE');
         }

         if (document.querySelector('#sidebar-feeling').classList.contains('selected')){
            document.querySelector('#sidebar-feeling').classList.remove('selected');
         }

         if (document.querySelector('#feeling-selector-popup').classList.contains('show')){
            document.querySelector('#feeling-selector-popup').classList.remove('show');
            vino.soundPlay('SE_WAVE_BALLOON_CLOSE');
         }

         if (document.querySelector('#feeling-selector-toggle').classList.contains('show')){
            document.querySelector('#feeling-selector-toggle').classList.remove('show');
            vino.soundPlay('SE_WAVE_BALLOON_CLOSE');
         }
      }

      window.addEventListener('mousemove', function (event) {
         if (event.target == document.querySelector('#doodle-temp-canvas')) {
         popupDoodleCheck()
          }
     });

     
      window.addEventListener('scroll', function () {     
         if (document.querySelector('#feeling-selector-toggle').classList.contains('show')){
            document.querySelector('#feeling-selector-toggle').classList.remove('show');
            vino.soundPlay('SE_WAVE_BALLOON_CLOSE');
         }
      });
   
   //This selects the image for doodling
   const moment = new Image();
   moment.onload = drawMoment;
   moment.src = '../img/doodleplaceholder.png';
   
   function drawMoment() {contexto.drawImage(moment, 0, 0, 723, 407);}

   function cleanDraw() {
      vino.lyt_startTouchEffect();
      document.querySelector('#sidebar-delete').classList.add('selected');
      vino.soundPlay('SE_DELETE_SMALL');
      setTimeout(function() { 
         canvaso.width = canvaso.width;
         contexto.drawImage(moment, 0, 0, 723, 407);
         document.querySelector('#sidebar-delete').classList.remove('selected');
      }, 800);

   } 

// Create a select field with our tools. 
 var tool_select = document.querySelector('#selector'); 
 tool_select.addEventListener('change', ev_tool_change, false); 
 
 // Activate the default tool (chalk). 
 if (tools[tool_default]) { 
 tool = new tools[tool_default](); 
 tool_select.value = tool_default; 
 } 
 // Event Listeners. 
   canvas.addEventListener('mousedown', ev_canvas, false); 
   canvas.addEventListener('mousemove', ev_canvas, false); 
   canvas.addEventListener('mouseup',   ev_canvas, false); 
   } 
// Get the mouse position. 
   function ev_canvas (ev) { 
   if (ev.layerX || ev.layerX == 0) { // Firefox 
   ev._x = ev.layerX; 
   ev._y = ev.layerY; 
   } else if (ev.offsetX || ev.offsetX == 0) { // Opera 
   ev._x = ev.offsetX; 
   ev._y = ev.offsetY; 
   } 
// Get the tool's event handler. 
   var func = tool[ev.type]; 
   if (func) { 
   func(ev); 
   } 
   } 
   function ev_tool_change (ev) { 
   if (tools[this.value]) { 
   tool = new tools[this.value](); 
   } 
   } 
// Create the temporary canvas on top of the canvas, which is cleared each time the user draws. 
   function img_update () { 
   contexto.drawImage(canvas, 0, 0); 
   context.clearRect(0, 0, canvas.width, canvas.height); 
   } 
   var tools = {}; 
 // Chalk tool. 
   tools.chalk = function () {
   var tool = this;
   this.started = false; 
 // Begin drawing with the chalk tool. 
   this.mousedown = function (ev) { 
   context.beginPath(); 
   context.lineJoin = "round";
   context.moveTo(ev._x, ev._y); 
   tool.started = true; 
   }; 
   this.mousemove = function (ev) { 
   if (tool.started) { 
   context.lineTo(ev._x, ev._y); 
   context.stroke(); 
   } 
   }; 
   this.mouseup = function (ev) { 
   if (tool.started) { 
   tool.mousemove(ev); 
   tool.started = false; 
   img_update(); 
   } 
   }; 
   };
 init();
}, false); }

   //posts the doodle

window.onload = function() {
var curDoodle = document.querySelector('#doodle-canvas'); 
var finishBtn = document.querySelector('#finishModal');
finishBtn.addEventListener('click', function (e) {
   tvii.showLoad(true);
   var checkedFeeling = document.getElementsByName('feeling_id');
   var feeling_value;
   for (i = 0; i < checkedFeeling.length; i++) {
       if (checkedFeeling[i].checked) {
           feeling_value = checkedFeeling[i].value;
       }
   }

function postDoodleImg() {
    var doodleComVal = document.querySelector('#doodle-input-value').value;
    if (vino.ng_checkText(doodleComVal)) {
    var doodleForm = new FormData();

    doodleForm.append("show_id", showIdVal)
    doodleForm.append("moment_id", momentIdVal)
    doodleForm.append("feeling_id", feeling_value)
    doodleForm.append("pid", vino.act_getPid(activeUserSlot))
    doodleForm.append("comment", doodleComVal)
    doodleForm.append("doodle_img", curDoodle.toDataURL('image/png'))

    var request = new XMLHttpRequest();
    request.open("POST", vino.olv_getHostName() + "/v1/comments")
    request.send(doodleForm)
    tvii.showLoad(false);
    document.querySelector('#doodle-input-value').value = "";
    hideDoodleModal();
   } else {alert('This comment contains inappropriate words\nPlease post a different message.'), tvii.showLoad(false);}
}

postDoodleImg();

   });
   
}