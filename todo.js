const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDOList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos=[];

function deleteToDo(event){
    const btn = event.target;
    const li =btn.parentNode;
    toDOList.removeChild(li);
    let cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML=`<i class="fas fa-trash"></i>`;;
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length+1;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDOList.appendChild(li);
    li.id=newId;
    const toDoObj={
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value="";
    paintToDo(currentValue);
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();