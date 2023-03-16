const input = document.getElementById("input-element");
const addButton = document.getElementById("add");
const taskCont = document.getElementById("task-container");
const form = document.getElementById("form");


window.addEventListener("load", (e) => {
  //alert("hola, como se llama")
  e.preventDefault();
   
  //Adding a function to add the new task
  addButton.addEventListener("click", () => {
    if(input.value == ""){
      alert("Input your task!");
      return;
    }
    
    const newTask = input.value;
    //const newTask = [];
    
    //const newTasks = []
    //newTasks.push(newTask);
    
    
    window.localStorage.setItem("value", newTask);
   
    
    const task_el = document.createElement("div");
    task_el.classList.add("task-element");
    
    //const newTasks = []
    //newTasks.push(newTask);
    const newTasks = localStorage.getItem("value");
    
    const taskInput = document.createElement("input");
    taskInput.classList.add("task-content");
    taskInput.type = "text";
    taskInput.value = newTasks;
    taskInput.setAttribute("readOnly", "readOnly");
    
    
    console.log(newTasks);
    
    const actionCont = document.createElement("div");
    actionCont.classList.add("action-buttons");
    task_el.appendChild(taskInput);
    task_el.appendChild(actionCont);
    
    
    
    const task_edit_btn = document.createElement("button");
    task_edit_btn.classList.add("edit");
    task_edit_btn.innerHTML = "edit";
    
    const task_delete_btn = document.createElement("button");
    task_delete_btn.classList.add("delete");
    task_delete_btn.innerHTML = "delete"
    
    actionCont.appendChild(task_edit_btn);
    actionCont.appendChild(task_delete_btn);
    
    //taskCont.appendChild(task_el);
    // To insert the new todo item to the top
    taskCont.insertBefore(task_el, taskCont.childNodes[0]);
    
    input.value = "";
    
   // adding the function to edit the tasks given
   task_edit_btn.addEventListener("click", () => {
     if(task_edit_btn.innerHTML.toLowerCase() == "edit"){
       task_edit_btn.innerHTML = "Save";
       taskInput.focus();
       taskInput.removeAttribute("readOnly");
     } else{
       task_edit_btn.innerHTML = "Edit";
       taskInput.setAttribute("readOnly", "readOnly");
     }
   })
   // adding a function to delete the task added
   task_delete_btn.addEventListener("click", () => {
     task_el.removeChild(taskInput);
     task_el.removeChild(actionCont);
   })
  })

})
