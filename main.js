
/* To Do Dom Notes

* Users have ability to add new to-do-items
We Need:
-form
-text input box and submit(get input from the user and add it to the list
     when they click submit)
- do document.createElement to create the list items
- do appendChild to add to our list

* Users have the ability to view to do items
- list to keep track of to-do items
- do querySelectorAll or use Bubbling to access the array of the individual list items


What should go in HTML 
-empty list
-form
-buttons
-text input

What should go in JavaScript
-list items
-
*/

let toDoForm = document.querySelector('#toDoForm');
let itemTODOList = document.querySelector('#itemTODOList'); // grabs all the todolist items
let arrayItem = document.querySelectorAll('#itemTODOList li'); // grabs all the todolist items
let listInput = document.querySelector('#listInput');  // textInput
let removeAll = document.querySelector('#removeAll');
let removeCompleted = document.querySelector('#removeCompleted');
let editItem = document.querySelector('#editItem');





toDoForm.addEventListener('submit', function(event){ // add button(submit)
    event.preventDefault()

 let listItem = document.createElement('li');
console.log(listItem)
    listItem.innerText = listInput.value
   itemTODOList.appendChild(listItem);
   listInput.value = "";
   arrayItem = document.querySelectorAll('#itemTODOList li');
    
listItem.addEventListener('click', function(){     // puts line through list items
    if(listItem.style.textDecoration === "line-through"){
        listItem.style.textDecoration = "";
        listItem.innerText = listInput.value
    }else if(listItem.style.textDecoration === ""){
        listItem.style.textDecoration = "line-through dotted red"
    }
})
});



removeAll.addEventListener('click', function(){ // when clicked remove all clicked items from to do list
for(let i = 0; i < arrayItem.length; i++){
    arrayItem[i].remove();
}
 arrayItem = document.querySelectorAll('#itemTODOList li');
console.log(arrayItem);
})


removeCompleted.addEventListener('click', function(){  // when clicked remove all clicked items from to do list
    for(let i = 0; i < arrayItem.length; i++){
    if(arrayItem[i].style.textDecoration === "line-through dotted red"){
    arrayItem[i].remove();
} 
 arrayItem = document.querySelectorAll('#itemTODOList li');
console.log(arrayItem);
    }
})



editItem.addEventListener('click', function(){
    arrayItem[i].innerHTML = listInput.value;
    for(let i = 0; i < arrayItem.length; i++){
        arrayItem.push(arrayItem[i].innerHTML);
    }
   
})















/*
toDoForm.addEventListener('submit', function(event){
    event.preventDefault();

    //create new list item
    let newItem = document.createElement('li');

    //give list item text from textInput box
    newItem.innerText = textInput.value;

    // console.log(newItem);

    toDoList.appendChild(newItem);
    textInput.value = "";

*/