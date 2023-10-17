var context;

function changeColor(color) {
   vino.lyt_startTouchEffect();
   vino.soundPlay('SE_A_DECIDE');
   context.strokeStyle = color;
 }

// Check for the canvas tag onload. 
   if(window.addEventListener) { 
 window.addEventListener('load', function () {
var canvas, canvaso, contexto; 
 // Default tool. (chalk, line, rectangle) 
   var tool; 
   var tool_default = 'chalk'; 
 
function init () { 
canvaso = document.getElementById('doodle-canvas'); 
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
   canvas.id  = 'doodle-temp-canvas'; 
   canvas.width  = canvaso.width; 
   canvas.height = canvaso.height; 
   container.appendChild(canvas); 
   context = canvas.getContext('2d'); 
   context.strokeStyle = "#FFFFFF";// Default line color. 
   context.lineWidth = 3.0;// Default stroke weight. 

   // Fill transparent canvas with dark grey (So we can use the color to erase).
   document.getElementById('sidebar-delete').addEventListener('click', cleanDraw);
   document.getElementById('colorHexInput').addEventListener('change', changeInputColor);
   document.getElementById("sidebar-colors-scroll").addEventListener('scroll', colorScroll);
   document.getElementById("sidebar-pencil").addEventListener('click', penSelect);
   document.getElementById("pencil-thick-select-popup").addEventListener('click', penThickSelect);

   function changeInputColor() {
      var inputColor = document.getElementById('colorHexInput').value
      changeColor(inputColor);
      }

   function colorScroll() {vino.soundPlay('SE_LIST_SCROLL');}
   function penSelect() {   vino.lyt_startTouchEffect(); vino.soundPlay('SE_A_CHECK'); vino.soundPlay('SE_POPUP');}
   function penThickSelect() {vino.soundPlay('SE_MOVEPAGE_SELECT');}
   
   const moment = new Image();
   moment.onload = drawMoment;
   moment.src = '../img/doodleplaceholder.png';
   
   function drawMoment() {context.drawImage(moment, 0, 0, 723, 407);}

   function cleanDraw() {
      vino.lyt_startTouchEffect();
      document.getElementById('sidebar-delete').classList.add('selected');
      vino.soundPlay('SE_DELETE_SMALL');
      setTimeout(function() { 
         canvaso.width = canvaso.width;
         context.drawImage(moment, 0, 0, 723, 407);
         document.getElementById('sidebar-delete').classList.remove('selected');
      }, 800);

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
var undoStack = [];
var redoStack = [];
// Function to save the current canvas state for the temporary canvas
function saveState() {
  undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
}

// Function to undo the last drawing action on the temporary canvas
function undo() {
  if (undoStack.length > 0) {
    redoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
    var state = undoStack.pop();
    context.putImageData(state, 0, 0);
  }
}

// Function to redo the last undone action on the temporary canvas
function redo() {
  if (redoStack.length > 0) {
    undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
    var state = redoStack.pop();
    context.putImageData(state, 0, 0);
  }
}
window.undo = undo;
window.redo = redo;
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
  saveState();
   }; 
   this.mousemove = function (ev) { 
   if (tool.started) { 
   context.lineTo(ev._x, ev._y); 
   context.stroke(); 
  saveState();
   } 
   }; 
   this.mouseup = function (ev) { 
   if (tool.started) { 
   tool.mousemove(ev); 
   tool.started = false; 
   img_update();
  saveState();
   } 
   }; 
   };

 init();

}, false); }

window.onload = function() {
hideLoad();
var bMouseIsDown = false; 
var oCanvas = document.getElementById("doodle-canvas"); 
var oCtx = oCanvas.getContext("2d"); 
var iWidth = oCanvas.width; 
var iHeight = oCanvas.height; 

var button = document.getElementById('finishModal');
   button.addEventListener('click', function (e) {
      var oCanvas = document.getElementById("doodle-canvas"); 

      var screenshot = oCanvas.toDataURL('image/png');

      const image = new Image();
      image.onload = appendimg;
      image.src = oCanvas.toDataURL('image/png');

      function appendimg() {
         document.body.appendChild(image);
      } 

      alert(screenshot)
      console.log(screenshot)
   });
   
}

