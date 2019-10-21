window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	initAdd();
	initDelete();
	initShowAll();
	initMath();
	initButtonEdit();
});

var tableKeys = ['ID', 'NAME', 'USER STORY', 'DESCRIPTION', 'URL LIST', 'CATEGORY', 'PRIOITY', 'LINE NUMBER', 'SUB MENU', 'TIME CREATED' ];

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

function initMath() {
		document.getElementById("showMath").addEventListener('click', function() {
		console.log("in SHOW  Math Function");
		getMath();
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
    document.getElementById("showAllLifeDiv").innerHTML = "";

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
	submit.textContent = "Update ? ";
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
	//assigns to Data DIV
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
		//Table DATA Begins
		dataDiv.appendChild(document.createElement("tr"));
		for ( var key in data) {
			if (data.hasOwnProperty(key)) {
			// console.log(key + " -> " + p[key]);

			td2 = document.createElement("td");
			td2.textContent = ""+data[key];

			dataDiv.appendChild(td2);
		}

	}
	dataDiv.appendChild(document.createElement("hr"));
	var delBut = document.createElement("button");
	delBut.id = "delBut";
	//delBut = "delBut";
	console.log("Display 1:delete butt: id = " + delBut.id);
	delBut.textContent = "Delete Life Event " +data.id;
	dataDiv.appendChild(delBut);
	dataDiv.appendChild(document.createElement("hr"));
	initdelBut(data.id);
	var space = document.createElement("hr");
	space.textContent = "update ID "+ data.id+ " Below.";
	dataDiv.appendChild(space);

}
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
function deleteLifeEvent(id) {
	console.log("Delete Func id = " +id);
	url = "api/posts/" + id;
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', url);

	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			alert("deleted:" + id);
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
			console.log(xhr.responseText);
			if (xhr.responseText != "") {
				var data2 = JSON.parse(xhr.responseText);
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
	// Table begins  headers
	for (var key in dataArray) {
		console.log("dataArray[key]")
		var dataSplit = dataArray[key];
		
		//creates new row
			let tr = document.createElement("tr");
			dataDiv.appendChild(tr);

		for ( var key in dataSplit) {
			if (dataSplit.hasOwnProperty(key)) {
				console.log("data Split =" +dataSplit.id);
				td = document.createElement("td");
				td.id = dataSplit.id;
				td.textContent = dataSplit[key];
				var x = "td" + dataSplit.id;
				console.log("cclick TD = " + dataSplit.id);
				console.log("x = " + x);
			}
		}
		
			dataDiv.appendChild(td);

			//edit button
			dataDiv.appendChild(document.createElement("hr"));
			var editBut = document.createElement("button");
			editBut.id = "editBut";
			//delBut = "delBut";
			console.log("Display 1:EDIT butt: id = " + editBut.id);
			editBut.textContent = "Delete Life Event " +data.id;
			dataDiv.appendChild(editBut);
			dataDiv.appendChild(document.createElement("hr"));
			initdelBut(data.id);
			var space = document.createElement("hr");
			space.textContent = "update ID "+ data.id+ " Below.";
			dataDiv.appendChild(space);
	}

}



function getMath() {

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
				displayMath(data2);
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

function displayMath(dataArray) {
	var dataDiv = document.getElementById('dataMath');
	var runTotal = 0;
	dataDiv.textContent = '';
	//Creates table headers
				th = document.createElement("th");
				th.textContent = tableKeys[1];
				dataDiv.appendChild(th);
				th = document.createElement("th");
				th.textContent = tableKeys[7];
				dataDiv.appendChild(th);		
	
	// Table begins  this iterates over all JSONs
	for (var key in dataArray) {
		console.log("dataArray[key]")
		var dataSplit = dataArray[key];
		console.log(dataSplit)
		
//creates row
		let tr = document.createElement("tr");
		dataDiv.appendChild(tr);

			td = document.createElement("td");
			td.textContent = dataSplit.name;
			dataDiv.appendChild(td);
			console.log(dataSplit.name);


			td = document.createElement("td");
			td.textContent = dataSplit.lineNumber;
			runTotal += dataSplit.lineNumber;
			dataDiv.appendChild(td);
			console.log(dataSplit.lineNumber);
		}
		dataDiv.appendChild(document.createElement("tr"));
		//SHOW math totals
		td = document.createElement("td");
		td.textContent = "TOTAL";
		dataDiv.appendChild(td);
		console.log(td);


		td = document.createElement("td");
		td.textContent = runTotal;
		dataDiv.appendChild(td);
		console.log(dataSplit.lineNumber);
}
function handler( event ) {
	var target = $( event.target );
	if ( target.is( "td" ) ) {
	  target.children().toggle();
	}
  }

function handler( event ) {
	var target = $( event.target );
	getLifeEvens(id);
	}


function initButtonEdit(id) {
// For having unique edit buttons, I think the easiest way is to have the button generated in 
// the same loop as your row.  You can give the button a property with the id of the object
//  corresponding to that row.  Then in your event listener, you'll be able to access that id 
//  property through e.target.

	document.getElementById("buttonRow").addEventListener('click', function() {
	e.target	
	console.log("inside of Button Click Function ID=" +id);
	//opens the update for that select id
	console.log(e.target.id);
	getLifeEvens(id);

});
}

function initdelBut(idd) {
	document.getElementById("delBut").addEventListener('click', function(e) {
	console.log("inside of Button Click Function:" +e.target.id + idd);
	confirm("Are You Sure?  Delete: " +idd);
	deleteLifeEvent(idd);
	});
}
