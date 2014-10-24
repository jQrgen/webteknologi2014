var todos = 0;
function addNewTodo(){
	var inputelement = document.getElementById('newTodo');

	if(inputelement.value === ""){
		alert('Enter the todo before you post it, amagard....');
		return;
	};

	var newDiv = document.createElement('div');

	var newCheckBox = document.createElement('input');
	newCheckBox.type = 'checkbox';
	newCheckBox.id = "checkbox" + todos;

	var newLabel = document.createElement("label");
	newLabel.htmlFor =  "checkbox" + todos;
	newLabel.innerHTML = inputelement.value;

	inputelement.value = "";

	newDiv.appendChild(newCheckBox)
	newDiv.appendChild(newLabel)

	todos++;
	document.getElementById('toDoListContainer').appendChild(newDiv);

	inputelement.focus()
}

function clearCompleted(){
	var container = document.getElementById('toDoListContainer');
	var toDoListContainerChildNodes = document.getElementById('toDoListContainer').childNodes

	var newTodoList = [];
	for(var i = 0; i<toDoListContainerChildNodes.length; i++){
		if(isElement(toDoListContainerChildNodes[i])){
			if(!toDoListContainerChildNodes[i].getElementsByTagName('input')[0].checked){
				newTodoList.push(toDoListContainerChildNodes[i]);
			}
		}
	}
	todos = 0

	for(var i = 0; i<newTodoList.length; i++){
		newTodoList[i].getElementsByTagName('input')[0].id = 'checkbox' + todos;
		newTodoList[i].getElementsByTagName('label')[0].htmlFor = "checkbox" + todos;
		todos++
	}

	while(container.firstChild){
		container.removeChild(container.firstChild);
	}

	for(var i = 0; i<newTodoList.length; i++){
		container.appendChild(newTodoList[i]);
	}
}

function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
	);
}