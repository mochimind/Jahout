JH.ActionDisp = {};
JH.ActionDisp.cells = [];
JH.ActionDisp.width = 4;

JH.ActionDisp.Init = function() {
	
};

JH.ActionDisp.Update = function() {
	var dispIndex = 0;
	var actionIndex = 0;
	while (true) {
		var dispCell = JH.ActionDisp.GetDispByIndex(dispIndex);
		if (dispCell == null && actionIndex >= JH.ActionMgr.actions.length) { break; }
		var actionInfo = JH.ActionMgr.actions[actionIndex];
		
		if (dispCell == null) {
			JH.ActionDisp.AddAction(actionInfo[0], actionInfo[1], actionInfo[2]);
			dispIndex++;
			actionIndex++;
		} else if (actionIndex >= JH.ActionMgr.actions.length) {
			JH.ActionDisp.RemoveAction();
		} else {
			dispCell.unbind("click");
			dispCell.click(function(_callback, _arg) { return function() {_callback(_arg); };}(actionInfo[1],actionInfo[2]));
			dispCell.text(actionInfo[0]);
			dispIndex++;
			actionIndex++;
		}
	}
};

JH.ActionDisp.GetDispByIndex = function(index) {
	if (JH.ActionDisp.cells.length == 0) { return null; }
	var rows = Math.floor(JH.ActionDisp.cells.length / JH.ActionDisp.width);
	if (Math.floor(index/JH.ActionDisp.width) > rows) { return null; }
	if (index % 4 >= JH.ActionDisp.cells[rows].length) { return null; }
	return JH.ActionDisp.cells[rows][index % 4];
};

// removes the last item in the action table
JH.ActionDisp.RemoveAction = function() {
	if (JH.ActionDisp.cells.length == 0) { return; }
	for (var i=JH.ActionDisp.cells.length-1 ; i>=0 ; i--) {
		for (var j=JH.ActionDisp.width-1 ; j>=0 ; j--) {
			if (JH.ActionDisp.cells[i][j] != null) {
				JH.ActionDisp.cells[i][j].remove();
				JH.ActionDisp.cells[i].splice(j,1);
				return;
			}
		}
		JH.ActionDisp.cells.splice(i, 1);
	}
};

JH.ActionDisp.AddAction = function(name, callback, args) {
	console.log("adding action " + name);
	var rowAdded = false;
	var rowNum = Math.floor((JH.ActionDisp.cells.length + 1) / JH.ActionDisp.width);
	var row;
	if ((JH.ActionDisp.cells.length + 1) % JH.ActionDisp.width == 0 || JH.ActionDisp.cells.length == 0) {
		JH.ActionDisp.cells.push([]);
		row = $("<tr id='actions_" + rowNum + "' style='padding: 0px; margin: 0px;'></tr>");
		rowAdded = true;
	} else {
		row = $("#actions_" + Math.floor(rowNum));
	}
	var label = $("<label></label>");
	row.append($("<td id='actions_" + rowNum + "_" + (JH.ActionDisp.cells.length + 1)%JH.ActionDisp.width + "'></td>").append(label));
	
	label.click(function() { callback(args); });
	label.text(name);
	
	if (rowAdded) {
		$("#actions").append(row);
	}
	
	JH.ActionDisp.cells[rowNum].push(label);

};



