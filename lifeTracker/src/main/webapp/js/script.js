window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	initAdd();
	initDelete();
	initShowAll();
});

var tableKeys = ['ID', 'NAME', 'USER STORY', 'DESCRIPTION', 'URL LIST', 'CATEGORY', 'PRIOITY', 'LINE NUMBER', 'SUB MENU', 'TIME CREATED' ];
// var tester = null;
// initUpdate(tester);

function init() {
	// document.newLife.lookup.ad('click', function(event) {
	document.searchLife.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		var id = document.searchLife.findById.value;
		console.log(id);
		if (!isNaN(id) && id > 0) {
			console.log("CONFRIMED");
			getLifeEvent(id);
		}
	});

}

function initShowAll() {
		document.getElementById("showAllLife").addEventListener('click', function() {
		console.log("in SHOW ALL Function");
		getAllLifeEvents();
	});

}


function initDelete() {
	// document.newLife.lookup.ad('click', function(event) {
	document.deleteLife.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		var id = document.deleteLife.deleteById.value;
		console.log(id);
		if (confirm("Delete: Are You Sure?")) {
			if (!isNaN(id) && id > 0) {
				deleteLifeEvent(id);
				div.textContent = '';

			} else {
				alert("Number must be positive")
			}
		}
	});

}

function initAdd() {
	document.addLife.submit.addEventListener('click', function(e) {
		e.preventDefault();
		console.log("HELLO IVE BEEN CLICKED");
		if (confirm("Submit: Are You Sure?")) {
			addLifeEvent();
			alert("To update, Search By Event ID");
		}
	});
}

function initUpdate(data) {
	// create form (fields) and append buttom attach to document.
	console.log(data);
	var uf = document.createElement('form'); // uf = update form
	var div = document.getElementById('formUpdate');
	div.textContent = '';
	div.appendChild(uf); // creates formUpdate

	uf.id = data.id;
	uf.name = "updateLife";

	uf.appendChild(document.createElement('br'));
	for (key in data) {

			let name = document.createElement('input');
			name.value = data[key];
			name.type = "text";
			name.name = key;
			let span = document.createElement('span');
			span.textContent = key;
			uf.appendChild(span);
			uf.appendChild(name);
			uf.appendChild(document.createElement('br'));

		}


	var submit = document.createElement('input');
	submit.value = "submit";
	submit.type = "submit";
	submit.name = "submit";
	uf.appendChild(submit);

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		if (confirm("Update: Are You Sure?")) {
			updateLifeEvent();

		}
	});
}

// user story 2
function getLifeEvent(Id) {

	url = "api/post/" + Id;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			// convert responseText to JSON
			console.log(xhr.responseText);
			if (xhr.responseText != "") {
				var data = JSON.parse(xhr.responseText);

				// print out JSON data
				console.log(data);
				displayLifeEvent(data);
				console.log();
				initUpdate(data);
			} else {
				alert("Not id found");
			}
		} else if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR!!!!');
			data = null;
		}
	};

	xhr.send(null);

}

function displayLifeEvent(data) {
	var dataDiv = document.getElementById('dataData');
	dataDiv.textContent = '';
	// Table begins
	header = document.createElement("hr"); //create spacer
	dataDiv.appendChild(header);

	let tb = document.createElement("table");
	tb.textContent = "Life Event " +data.id;
	dataDiv.appendChild(tb);

	let tr = document.createElement("tr");
	dataDiv.appendChild(tr);
	//tableKeys[] for table header names
	for (let index = 0; index < tableKeys.length; index++) {
		th = document.createElement("th");
		th.textContent = tableKeys[index];
		dataDiv.appendChild(th);
		
	}
	dataDiv.appendChild(document.createElement("tr"));
	for ( var key in data) {
		if (data.hasOwnProperty(key)) {
			// console.log(key + " -> " + p[key]);

			td2 = document.createElement("td");
			td2.textContent = ""+data[key];

			dataDiv.appendChild(td2);
		}

	}

}

function deleteLifeEvent(id) {

	url = "api/posts/" + id;
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', url);

	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			// convert responseText to JSON
			// print out JSON data
			// console.log(data);
			alert("deleted:" + id);
			// displayLifeEvent(data);
			// console.log(data[0].id); // 1

		} else if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR!!!!');
			data = null;
		}
	};

	xhr.send(null);
}

function addLifeEvent() {
	console.log("addLifeEvent");
	let form = document.addLife;
	let data = {
		name : form.name.value,
		description : form.description.value,
		userStory : form.userStory.value,
		category : form.category.value,
		priority : form.priority.value,
		urlList : form.urlList.value,
		lineNumber : form.lineNumber.value,
		subMenu : form.subMenu.value,
		timeCreated : form.timeCreated.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/posts/");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let dataJson = xhr.responseText;
				let data = JSON.parse(dataJson);
				console.log(data);
				displayLifeEvent(data);
			} else {
				// clearCastDiv();
			}
		}
	};
	let dataJson = JSON.stringify(data);
	xhr.send(dataJson);
}

function updateLifeEvent() {
	let form = document.updateLife;
	console.log(form.id.value);
	let data = {
		name : form.name.value,
		description : form.description.value,
		userStory : form.userStory.value,
		category : form.category.value,
		priority : form.priority.value,
		urlList : form.urlList.value,
		lineNumber : form.lineNumber.value,
		subMenu : form.subMenu.value,
		timeCreated : form.timeCreated.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open("PUT", "/api/posts/" + form.id.value);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let dataJson = xhr.responseText;
				let data = JSON.parse(dataJson);
				console.log(data);
				displayLifeEvent(data);
			} else {
				// clearCastDiv();
			}
		}
	};
	let dataJson = JSON.stringify(data);
	xhr.send(dataJson);
}




function getAllLifeEvents() {

	url = "api/posts";
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			// convert responseText to JSON
			console.log(xhr.responseText);
			if (xhr.responseText != "") {
				//var data = xhr.responseText;
				var data2 = JSON.parse(xhr.responseText);

				// print out JSON data
				console.log(data2);
				displayAllLifeEvents(data2);
			} else {
				alert("error loading all Events");
			}
		} else if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR!!!!');
			data = null;
		}
	};

	xhr.send(null);

}

function displayAllLifeEvents2(dataArray) {
	let dataDiv = document.getElementById('dataData');
	//dataDiv.textContent = '';
	// Table begins
	for (var key in dataArray) {
		console.log(dataArray[key]);
		var dataSplit = dataArray[key];
		console.log(dataSplit);
		displayLifeEvent(dataSplit);

	}
	//creates row
	let tr = document.createElement("tr");
	dataDiv.appendChild(tr);
}

function displayAllLifeEvents(dataArray) {
	var dataDiv = document.getElementById('showAllLifeDiv');
	dataDiv.textContent = '';
	//Creates table headers
			for (let index = 0; index < tableKeys.length; index++) {
				th = document.createElement("th");
				th.textContent = tableKeys[index];
				dataDiv.appendChild(th);
				
			}
	// Table begins
	for (var key in dataArray) {
		console.log("dataArray[key]")
		var dataSplit = dataArray[key];
		
//creates row
	let tr = document.createElement("tr");
	dataDiv.appendChild(tr);

	for ( var key in dataSplit) {
		if (dataSplit.hasOwnProperty(key)) {
			// console.log(key + " -> " + p[key]);
			td = document.createElement("td");
			td.textContent = dataSplit[key];
			dataDiv.appendChild(td);
			//creates button
			// let bt = document.createElement("button");
			// bt.id = "buttonEdit" + dataSplit.id;
			// bt.name="edit" +dataSplit[key];
			// bt.textContent = "edit";
			// console.log(bt);
			// dataDiv.appendChild(bt);
			//creates button end.

			//initButtonEdit(dataSplit.id);
		}
		//dataDiv.appendChild(document.createElement("tr"));

	}
}

}

function initButtonEdit(id) {
	document.getElementById("buttonEdit"+id).addEventListener('click', function() {
	console.log("inside of Button Click Function");
	//opens the update for that select id
	
	//getAllLifeEvents();

});

}
// functions
//sort functions  
//clicking the th head will sort the files according to that category

// createLifeEvent(lifeEvent);
// displayAllLifeEvenets();
