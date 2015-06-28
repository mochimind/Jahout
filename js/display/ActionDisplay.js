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
	var row = Math.floor(index / JH.ActionDisp.width);
	if (row >= JH.ActionDisp.cells.length) { return null; }
	if (index % 4 >= JH.ActionDisp.cells[row].length) { return null; }
	return JH.ActionDisp.cells[row][index % 4];
};

// removes the last item in the action table
JH.ActionDisp.RemoveAction = function() {
	if (JH.ActionDisp.cells.length == 0) { return; }
	for (var i=JH.ActionDisp.cells.length-1 ; i>=0 ; i--) {
		for (var j=JH.ActionDisp.width-1 ; j>=0 ; j--) {
			if (JH.ActionDisp.cells[i][j] != null) {
				JH.ActionDisp.cells[i][j].parent().remove();
				JH.ActionDisp.cells[i].splice(j,1);
				return;
			}
		}
		JH.ActionDisp.cells.splice(i, 1);
	}
};

JH.ActionDisp.AddAction = function(name, callback, args) {
	var rowAdded = false;
	var count = 0;
	var row;
	while (true) {
		var rowNum = Math.floor(count / JH.ActionDisp.width);
		var colNum = count % JH.ActionDisp.width;

		if (JH.ActionDisp.cells.length <= rowNum) {
			JH.ActionDisp.cells.push([]);
			row = $("<tr id='actions_" + rowNum + "' style='padding: 0px; margin: 0px;'></tr>");
			rowAdded = true;
		} else {
			row = $("#actions_" + rowNum);
		}
		
		if (JH.ActionDisp.cells[rowNum].length <= colNum) {
			JH.ActionDisp.cells[rowNum].push(null);
		}
		
		if (JH.ActionDisp.cells[rowNum][colNum] == null) {
			// insert here
			var label = $("<button></button>");
			row.append($("<td id='actions_" + rowNum + "_" + colNum + "'></td>").append(label));
			label.click(function() { callback(args); });
			label.text(name);

			JH.ActionDisp.cells[rowNum][colNum] = label;
			break;
		}
		
		count++;
	}
	
	if (rowAdded) {
		$("#actions").append(row);
	}
	
};



