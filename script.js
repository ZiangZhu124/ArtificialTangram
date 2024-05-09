
// Get all elements with class 'draggable'
const draggableElements = document.querySelectorAll('.draggable');

// Initialize variables to track drag status
let activeDraggable = null;
let offsetX, offsetY;

// Function to start dragging
function startDrag(event) {
    activeDraggable = this;
    const rect = activeDraggable.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
}

// Function to perform the drag
function performDrag(event) {
    if (activeDraggable) {
        activeDraggable.style.left = (event.clientX - offsetX) + 'px';
        activeDraggable.style.top = (event.clientY - offsetY) + 'px';
    }
}

// Function to stop dragging and save the position
function stopDrag() {
    if (activeDraggable) {
        // Save the position in localStorage or any other storage method
        localStorage.setItem(activeDraggable.id, JSON.stringify({
            left: activeDraggable.style.left,
            top: activeDraggable.style.top,
        }));

        activeDraggable = null;
    }
}

// Attach event listeners to the draggable elements
draggableElements.forEach((element) => {
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mousemove', performDrag);
    element.addEventListener('mouseup', stopDrag);
});

// Restore positions from localStorage (on page load)
for (const element of draggableElements) {
    const position = JSON.parse(localStorage.getItem(element.id));
    if (position) {
        element.style.left = position.left;
        element.style.top = position.top;
    }
}



let mybackground = document.querySelector(".change")
let mybody = document.body

let myColorArray = ["darkblue", "maroon", "green",]

let myCounter = 0;


mybackground.addEventListener ("click", ()=>{

  console.log('clicked')
  myCounter++
  if(myCounter>2){
    myCounter=0
  }
  mybody.style.backgroundColor = myColorArray[myCounter]
}); 




// function colorChange() {
//   document.body.style.backgroundColor = "#0437F2"
//   document.body.style.backgroundColor = "#008000"
//   document.body.style.backgroundColor = "#ffc00"
//   document.body.style.backgroundColor = "#800000";
// }
