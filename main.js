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
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("fun-button");
    // button.onclick = function (){
    /**remove div - method 1 **/

    //     button.parentElement.remove();

    // };

    /***remove div - method 2 ***/
    button.onclick = buttonHandler;
});

/**********nice way of reusing functions **********/
// function buttonHandler(event){

//     const r= Math.random()*255;
//     const g= Math.random()*255;
//     const b= Math.random()*255;
//     const a= Math.random();

//     //the element this event is called on 
//     // event.target.parentElement.remove();

//     //template strings 
//     event.target.parentElement.style.backgroundColor= `rgba(${r},${g},${b},${a})`;

// }


// function buttonHandler(event){
//     const container=document.getElementById("container");
//     const sentences = ["it's fun","its exciting","it makes me happy"];
//     // let listItems ="";
//     // sentences.forEach(function(sentence){
//     //     listItems+=`<li>${sentence}</li>`;
//     // });
//     // console.log(listItems);

//     //another way using map function - return new values 
//     let listItems =sentences.map(function(sentence){
//         return `<li>${sentence}</li>`;

//     })

//     console.log(listItems);

//     // const paragraph = `<p>Hellow from JS</p>`;
//     const paragraph = `<ul>${listItems}</ul>`;

//     container.innerHTML=paragraph;
// }


//when pressing button
//make an api request 
//wait to get a response 
//handle it 

/*******ONE WAY API ********/
// function buttonHandler(event) {
//     const img = document.getElementById("dog-image");
//     const url = "https://dog.ceo/api/breeds/image/random";
//     //fetch() does not use callback functions 
//     //fetch uses promises
//     // HAVE TWO callback/PROMISES functions 
//     fetch(url).then(function (response) {
//         //json is also asynchronous - create another callback function/promises
//         return response.json()
//         console.log(response);
//     }).then(function (dogJson) {
//         console.log(dogJson);
//         img.src=dogJson.message;
//     });
// }

//ANOTHER WAY FOR API _ async/await
// in order to do so, have to use the ASYNC function 
// async function buttonHandler(event) {
//     const img = document.getElementById("dog-image");
//     const url = "https://dog.ceo/api/breeds/image/random";

//     const response = await fetch(url);
//     const dogJson= await response.json();
//     img.src=dogJson.message;
// }


async function buttonHandler(event) {
    const container = document.getElementById("characters-container");
    const url = "https://swapi.co/api/people";

    const response = await fetch(url);
    const characterJson= await response.json();

    const characterList = characterJson.results.map(function(character){
        return `<li>${character.name}</li>`
    });

    // console.log(characterList);
    const characterListContainer=`<ul>${characterList.join("")}</ul>`;
    container.innerHTML=characterListContainer;
    
}
