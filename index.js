var addToDoButton = document.getElementById('addToDo')
var ToDoContainer = document.getElementById('ToDoContainer')
var inputField = document.getElementById('inputField')

addToDoButton.onclick = function(){
    
    if(inputField.value != ""){
        
     var paragraph = document.createElement('p')   
    }
    
    
    
    paragraph.innerText = inputField.value ;
    
    
    
    
    
    paragraph.classList.add('paragraph_style');
    
   ToDoContainer.appendChild(paragraph); 
   
   
   
   
   inputField.value="";
   
   
   
   
   
   paragraph.addEventListener('click',function(){
       paragraph.classList.add('paragraph_click')
   })
   
   
   paragraph.addEventListener('dbclick',function(){
    ToDoContainer.removeChild(paragraph)
})
}