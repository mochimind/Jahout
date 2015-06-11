JH.Actions = {};
JH.Actions.cells = [];
JH.Actions.width = 4;

JH.Actions.Init = function() {
	
};

JH.Actions.AddAction = function(name, callback) {
	var container = $("#actions");
	var rowAdded = false;
	var rowNum = Math.floor((JH.Actions.cells.length + 1) / JH.Actions.width);
	var row;
	if ((JH.Actions.cells.length + 1) % JH.Actions.width == 0 || JH.Actions.cells.length == 0) {
		JH.Actions.cells.push([]);
		row = $("<tr id='actions_" + rowNum + "' style='padding: 0px; margin: 0px;'></tr>");
		rowAdded = true;
	} else {
		row = $("#actions_" + Math.floor(rowNum));
	}
	
	var label = $("<label></label>");
	row.append($("<td id='actions_" + rowNum + "_" + (JH.Actions.cells.length + 1)%JH.Actions.width + "'></td>").append(label));
	JH.Actions.cells.push(label);
	label.click(callback);
	label.text(name);
	
	if (rowAdded) {
		$("#actions").append(row);
	}	
};



