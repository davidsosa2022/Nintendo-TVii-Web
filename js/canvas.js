var context;

// Check for the canvas tag onload. 
   if(window.addEventListener) { 
 window.addEventListener('load', function () {
var canvas, canvaso, contexto; 
 // Default tool. (chalk, line, rectangle) 
   var tool; 
   var tool_default = 'chalk'; 
 
function init () { 
canvaso = document.getElementById('drawingCanvas'); 
   if (!canvaso) { 
   alert('Error! The canvas element was not found!'); 
   return; 
   } 
 if (!canvaso.getContext) { 
   alert('Error! No canvas.getContext!'); 
   return; 
   } 
// Create 2d canvas. 
   contexto = canvaso.getContext('2d'); 
   if (!contexto) { 
   alert('Error! Failed to getContext!'); 
   return; 
   } 
 // Build the temporary canvas. 
   var container = canvaso.parentNode; 
   canvas = document.createElement('canvas'); 
   if (!canvas) { 
   alert('Error! Cannot create a new canvas element!'); 
   return; 
   } 
   canvas.id  = 'tempCanvas'; 
   canvas.width  = canvaso.width; 
   canvas.height = canvaso.height; 
   container.appendChild(canvas); 
   context = canvas.getContext('2d'); 
   context.strokeStyle = "#FFFFFF";// Default line color. 
   context.lineWidth = 2.0;// Default stroke weight. 

   // Fill transparent canvas with dark grey (So we can use the color to erase).
   document.getElementById('sidebar-delete').addEventListener('click', cleanDraw)

   const moment = new Image();
   moment.onload = drawMoment;
   moment.src = '../img/doodleplaceholder.png';
   
   function drawMoment() {
     context.drawImage(moment, 0, 0);
   }

   function cleanDraw() {
      canvaso.width = canvaso.width;
      context.drawImage(moment, 0, 0);
   } 

// Create a select field with our tools. 
 var tool_select = document.getElementById('selector'); 
 if (!tool_select) { 
 alert('Error! Failed to get the select element!'); 
 return; 
 } 
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

window.onload = function() { 
var bMouseIsDown = false; 

   var oCanvas = document.getElementById("drawingCanvas"); 
   var oCtx = oCanvas.getContext("2d"); 
var iWidth = oCanvas.width; 
   var iHeight = oCanvas.height; 

var button = document.getElementById('btndownload');
   button.addEventListener('click', function (e) {

      var oCanvas = document.getElementById("drawingCanvas"); 

      var screenshot = oCanvas.toDataURL("image/jpeg");

      alert(screenshot)
      console.log(screenshot)

      var formData = new FormData();

      //to add variables to the form, add it like this
      formData.append("screenshot", screenshot)

      formData.append("topic_tag", "Generic NFL show because yes.")
      formData.append("search_key", "TemplateShow")
      formData.append("app_data", "")
      formData.append("community_id", "0")
      formData.append("feeling_id", "1")
      formData.append("is_autopost", "1")
      formData.append("is_spoiler", "0")
      formData.append("language_id", "1")
      formData.append("is_app_jumpable", "0")
      //you can do this as many times as you want

      var request = new XMLHttpRequest();
      request.open("POST", "https://olvapi.nonamegiven.xyz/v1/posts")
      request.setRequestHeader('x-nintendo-servicetoken', vino.olv_getServiceToken().toString())
      request.setRequestHeader('x-nintendo-parampack', vino.olv_getParameterPack().toString())
      //sending form data
      request.send(formData)
 
   });
   
}

