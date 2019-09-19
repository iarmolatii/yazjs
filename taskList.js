/* ===================================================== */
	function activeOrNot() {
/* ===================================================== */
			var newTaskName = document.getElementById('new-item-text').value;
				if (newTaskName.trim() == '') {
				document.getElementById("defBtn").disabled = true;
				return;
			}
			else {
				document.getElementById("defBtn").disabled = false;
			}

		};

		/* ===================================================== */
		function addNewTask(task) {
		/* ===================================================== */

		// in case someone deleted parameter from localStorage
		var taskCount = parseInt(localStorage.getItem("taskCounter"));
		if  ((taskCount != '0')&&(!Boolean(taskCount))) {
			taskCount = 0;
			localStorage.setItem('taskCounter',0);
		}

			// are we creating new task or rendering existing
			var existingTask = Boolean(task);

			document.getElementById("defBtn").disabled = true;

			var newTaskName = '';

			if (existingTask) newTaskName = task;
			else newTaskName = document.getElementById('new-item-text').value;

			if (newTaskName.trim() == '') return;

			var x = parseInt(localStorage.getItem("taskCounter"))+1;

			var list = document.getElementById('task-list');
			var newTaskNumber = list.childElementCount;

			var guid = generateUniqueID();

			var li = document.createElement("li");
			li.id = 'task'+x+'_'+guid;

			val = li;

			var checkBox = document.createElement("input");
			checkBox.type = "checkbox";
			checkBox.id = "item"+newTaskNumber;
		    checkBox.className = "todo-item";
			checkBox.onclick = function(element) {

				// console.log(element.target.checked);

				if (element.target.checked == true) {
					markTaskComplete(element.target); //console.log("COMPLETE");
				}
				else {
					markTaskIncomplete(element.target); //console.log("INCOMPLETE");
				}

			}

			li.appendChild(checkBox);
			li.appendChild(document.createTextNode(newTaskNumber+1+'. '+newTaskName));

			var anchor = document.createElement("a");
			anchor.className = "delete";
			anchor.href = "#";

			anchor.onclick = onDeleteTodoItem;

			anchor.appendChild(document.createTextNode("x"));

			li.appendChild(anchor);
			list.appendChild(li);

			// обнуляем поле ввода названия новой таски
			document.getElementById('new-item-text').value = '';

			if (!existingTask) {

				// увеличиваем счетчик количества тасок
				localStorage.setItem("taskCounter", x);
				localStorage.setItem('task'+x,guid);
				localStorage.setItem(guid,newTaskName);

			}
		};

		function markTaskComplete(element) {

			var	name = "task-complete"
			  arr = element.parentNode.className.split(" ");

			  if (arr.indexOf(name) == -1) {
				element.parentNode.className += " " + name;
			  }
		}

		function markTaskIncomplete(element) {
			var	name = "task-complete"
			  arr = element.parentNode.className.split(" ");
			  var newClass = '';

			  if (element.parentNode.className.indexOf(name) >= 0) {
				for (var i = 0; i < arr.length; i++) {
						if (arr[i] != name) {
							newClass += ' '+arr[i];
						}
				}
			  }

			  element.parentNode.className = newClass.trim();
		}

		/* ===================================================== */
		function generateUniqueID() {
		/* ===================================================== */
						function S4() {
									return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
						}

						// then to call it, plus stitch in '4' in the third group
						guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

						return guid;
		}

		/* ===================================================== */
		function onDeleteTodoItem(event) {
		/* ===================================================== */
			event.preventDefault();
			removeTodoItem(this.parentElement.id);
		}

		/* ===================================================== */
		function removeTodoItem(taskID) {
		/* ===================================================== */
			const item = document.getElementById(taskID);
			if (!item) return;

			var guid = taskID.split('_')[1].toString();
			var deletedTask = taskID.split('_')[0].toString();

			item.remove();

			var totalCount = parseInt(localStorage.getItem("taskCounter"));
			localStorage.setItem("taskCounter",totalCount-1);

			localStorage.removeItem(guid);
			localStorage.removeItem(deletedTask);

		}


		/* ===================================================== */
		/* START */
		/* ===================================================== */
		document.querySelectorAll(".todo-item").forEach(function(element) {
			element.lastElementChild.onclick = onDeleteTodoItem;
		});


		var taskCount = parseInt(localStorage.getItem("taskCounter"));
		if  ((taskCount != '0')&&(!Boolean(taskCount))) {
			taskCount = 0;
			localStorage.setItem('taskCounter',0);
		}

		console.clear();
		console.log('taskCount: ',taskCount);

		for (var i = 1; i <= taskCount; i++) {
			var valueReference = localStorage.getItem('task'+i);
			addNewTask(localStorage.getItem(valueReference));
		}
