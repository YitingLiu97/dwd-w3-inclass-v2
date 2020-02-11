//have to wait for the web is loaded to change the DOM
//loading asyncrhoniously 
//to preven javascript from loading before the index.html
// should use event handler



window.addEventlistener('DOMContentLoaded',()=>{ 
//DOM API 
const paragraph = document.createElement("p");
paragraph.textContent="Hello from Javascript";
});



