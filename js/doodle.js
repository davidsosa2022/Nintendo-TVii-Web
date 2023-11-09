var context;

function changeColor(color) {
   vino.lyt_startTouchEffect();
   vino.soundPlay('SE_A_DECIDE');
   context.strokeStyle = color;
 }

 function selectPenSize(x) {
   document.getElementById("pencil-t-big").classList.remove("selected");
   document.getElementById("pencil-t-medium").classList.remove("selected");
   document.getElementById("pencil-t-normal").classList.remove("selected");
   document.getElementById("pencil-t-tiny").classList.remove("selected");
   x.classList.add("selected");
}

var listItems = document.querySelectorAll("#sidebar-colors-scroll li a");

// Add a class to a specific element and remove it from its siblings
function addClassToElement(sib) {
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
    addClassToElement(this);
  });
}


// Check for the canvas tag onload. 
if(window.addEventListener) { 
 window.addEventListener('load', function () {
   document.getElementById("pencil-t-normal").classList.add("selected");
var canvas, canvaso, contexto; 
 // Default tool. (chalk, line, rectangle) 
   var tool; 
   var tool_default = 'chalk'; 
 
function init () { 
canvaso = document.getElementById('doodle-canvas'); 
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
   context.strokeStyle = "#FFFFFF";// Default line color. 
   context.lineWidth = 3.0;// Default stroke weight. 

   document.getElementById('sidebar-delete').addEventListener('click', cleanDraw);
   document.getElementById('pencil-thick-select-popup').addEventListener('click', isPenSelectShow);
   document.getElementById('colorHexInput').addEventListener('change', changeInputColor);
   document.getElementById("sidebar-colors-scroll").addEventListener('scroll', colorScroll);
   document.getElementById("sidebar-pencil").addEventListener('click', penSelect);

   function changeInputColor() {
      document.getElementById('colorHexInput').classList.add('selected');
      var inputColor = document.getElementById('colorHexInput').value
      changeColor(inputColor);
      setTimeout(function() { 
         document.getElementById('colorHexInput').classList.remove('selected');
      }, 800);
      }
   function colorScroll() {vino.soundPlay('SE_LIST_SCROLL'); isPenSelectShow();}


   function penSelect() {
         vino.lyt_startTouchEffect(); vino.soundPlay('SE_WAVE_TOGGLE_CHECK');
         document.getElementById('pencil-thick-select-popup').classList.toggle("show");
      }

      function isPenSelectShow() {
         if (document.getElementById('pencil-thick-select-popup').classList.contains('show')){
            document.getElementById('pencil-thick-select-popup').classList.remove('show');
         }
      }

      window.addEventListener('mousemove', function (event) {
         if (event.target == document.getElementById('doodle-temp-canvas')) {
         isPenSelectShow()
          }
     });
   
   //This selects the image for doodling
   const moment = new Image();
   moment.onload = drawMoment;
   moment.src = '../img/doodleplaceholder.png';
   
   function drawMoment() {contexto.drawImage(moment, 0, 0, 723, 407);}

   function cleanDraw() {
      vino.lyt_startTouchEffect();
      document.getElementById('sidebar-delete').classList.add('selected');
      vino.soundPlay('SE_DELETE_SMALL');
      setTimeout(function() { 
         canvaso.width = canvaso.width;
         contexto.drawImage(moment, 0, 0, 723, 407);
         document.getElementById('sidebar-delete').classList.remove('selected');
      }, 800);

   } 

// Create a select field with our tools. 
 var tool_select = document.getElementById('selector'); 
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
var curDoodle = document.getElementById("doodle-canvas"); 
var finishBtn = document.getElementById('finishModal');
finishBtn.addEventListener('click', function (e) {
      var userDoodle = new Image();
      userDoodle.src = curDoodle.toDataURL();
      userDoodle.onload = post;
});

function post() {
    document.body.appendChild(userDoodle);
    alert('Content has been posted.')
    var doodleComVal = document.getElementById("doodle-input-value").value;
    var formData = new FormData();

    formData.append("doodle_img", userDoodle.src)
    formData.append("show_id", "1")
    formData.append("moment_id", "1")
    formData.append("mii_name", vino.act_getName(activeUserSlot))
    formData.append("mii_data", vino.act_getMiiData(activeUserSlot))
    formData.append("mii_img", vino.act_getMiiImage(activeUserSlot))
    formData.append("pid", vino.act_getPid(activeUserSlot))
    formData.append("comment", doodleComVal)

    var request = new XMLHttpRequest();
    request.open("POST", "https://davidsosa2022.github.io/Nintendo-TVii-Web/")
    request.send(formData)

    alert(request.statusText)
 }
  
}
