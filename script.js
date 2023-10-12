var inputText=document.getElementById('input-text');
var todoList=document.getElementById('todo-list');
        
         function addItem(){         
           if(inputText.value === ""){            
                  alert("Please enter some item");
           }
           else{
                let li=document.createElement("li");
                li.innerHTML=inputText.value;
                todoList.appendChild(li);
                let span=document.createElement("span");
                span.innerHTML="\u00d7";
                span.className="close";
                li.appendChild(span);
           }
            
            inputText.value="";
            saveData();
         }
todoList.addEventListener("click",function(e){    
  if(e.target.tagName==="SPAN"){
           e.target.parentElement.remove();
           saveData();
   }

},false);
function saveData(){
      localStorage.setItem('data',todoList.innerHTML);
}
function showData(){
     todoList.innerHTML=localStorage.getItem('data',);
}
showData();


