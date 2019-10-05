window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	initDelete();
});

var testEvent = {

	"id" : 50,
	"name" : "Test50",
	"userStory" : "TestUserStory50",
	"description" : "TestUserStory50",
	"urlList" : "google.com",
	"category" : "Water",
	"priority" : 50,
	"lineNumber" : 1234,
	"subMenu" : 50,
	"timeCreated" : 55
}

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

function initDelete() {
	// document.newLife.lookup.ad('click', function(event) {
	document.deleteLife.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		var id = document.deleteLife.deleteById.value;
		console.log(id);
		if (confirm("Delete: Are You Sure?")) {
			if (!isNaN(id) && id > 0) {
				deleteLifeEvent(id);
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
		}
	});
}

function initUpdate(data) {
	// create form (fields) and append buttom attach to document.
	console.log(data);
	var uf = document.createElement('form'); // uf = update form
	var div = document.getElementById('formUpdate');
	div.textContent = '';
	div.appendChild(uf); // creaets formUpdate

	uf.id = data.id;
	uf.name = "updateLife";
	console.log(uf);
	console.log(div);
	console.log(data.id);
	for (key in data) {
		if (key == "id") { // skipping database id
			console.log("Found id")
		} else {
			let name = document.createElement('input');
			name.value = data[key];
			name.type = "text";
			name.name = key;
			let span = document.createElement('span');
			span.textContent = key;
			uf.appendChild(span);
			uf.appendChild(name);
		}
	}

	var submit = document.createElement('input');
	submit.value = "submit";
	submit.type = "submit";
	submit.name = "submit";
	uf.appendChild(submit);

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		console.log("Update sleeper activated CLICKED");
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
	header = document.createElement("hr");
	dataDiv.appendChild(header);

	let tb = document.createElement("table");
	tb.textContent = "Tester Table";
	dataDiv.appendChild(tb);

	let tr = document.createElement("tr");
	dataDiv.appendChild(tr);

	for ( var key in data) {
		if (data.hasOwnProperty(key)) {
			// console.log(key + " -> " + p[key]);
			td = document.createElement("td");
			td.textContent = key + " " + data[key];
			dataDiv.appendChild(td);
		}
		dataDiv.appendChild(document.createElement("tr"));

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
// functions
// displayLifeEvent(lifeEvent);
// deleteLifeEvent(id);
// createLifeEvent(lifeEvent);
// displayAllLifeEvenets();
