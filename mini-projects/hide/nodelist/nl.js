//NODELIST.......

let buttons=document.querySelectorAll(".myBtn");

//add HTML/CSS PROPERTIES:
// buttons.forEach(button=>{
//     button.style.backgroundColor="grey";
//     button.textContent +="😶‍🌫️";
// })

//click event listner

// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor="pink";
//     })
// })

//MOUSEOVER + MOUSEOUT EVENT LISTNER
// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="pink";
//     })
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event=>{
//         event.target.style.backgroundColor="skyblue";
//     })
// })

//ADD ELEMENT TO NODELIST......
// const newButton=document.createElement("button");
// newButton.textContent="Button5";
// newButton.classList="myBtn";
// document.body.appendChild(newButton);
// buttons=document.querySelectorAll(".myBtn");
// console.log(buttons);
//....REMOVE AN ELEMENT
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove();
        //if we check in console there's still nodelist so we've to update it too...
        buttons=document.querySelectorAll(".myBtn");
        console.log(buttons);
    })
})