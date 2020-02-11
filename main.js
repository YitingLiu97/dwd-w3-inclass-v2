//have to wait for the web is loaded to change the DOM
//loading asyncrhoniously 
//to preven javascript from loading before the index.html
// should use event handler

//DOM API 
//click the button and add an element on the page 
//bind the onlcick event handler

/***click the button and ADD an element on the page **/
// window.addEventListener('DOMContentLoaded',()=>{ 

// const button = document.getElementById("add-button");
// button.onclick = function (){
// const paragraph = document.createElement("p");
// paragraph.textContent="Hello from Javascript";
// document.body.appendChild(paragraph);
// };
// });


/***click the button and REMOVE an element on the page **/
window.addEventListener('DOMContentLoaded',()=>{ 
const button = document.getElementById("fun-button");
// button.onclick = function (){
    /**remove div - method 1 **/

//     button.parentElement.remove();

// };

/***remove div - method 2 ***/
button.onclick =buttonHandler;
});    

//nice way of reusing functions 
function buttonHandler(event){

    const r= Math.random()*255;
    const g= Math.random()*255;
    const b= Math.random()*255;
    const a= Math.random();

    //the element this event is called on 
    // event.target.parentElement.remove();

    //template strings 
    event.target.parentElement.style.backgroundColor= `rgba(${r},${g},${b},${a})`;

}

function randomColor(){



}



