JH.InvDisp = {};
JH.InvDisp.cells = [];

JH.InvDisp.Init = function() {
	JH.InvDisp.Update();
	JH.ActionMgr.AddAction("Inventory", JH.InvDisp.TogglePanel);
};

JH.InvDisp.ShowPanel = function() {
	$("#inventory").show();
};

JH.InvDisp.HidePanel = function() {
	$("#inventory").hide();	
};

JH.InvDisp.TogglePanel = function() {
	if ($("#inventory").is(":visible")) {
		JH.InvDisp.HidePanel();
	} else {
		JH.InvDisp.ShowPanel();
	}
};

JH.InvDisp.Update = function() {
	var dispIndex = 0;
	var dataIndex = 0;
	while (true) {
		if (JH.InvDisp.cells.length <= dispIndex) {
			if (JH.InvMgr.items.length <= dataIndex) {
				return;
			} else {
				var addItem = $("<li>" + JH.InvMgr.items[dataIndex][0].type + ": " + JH.InvMgr.items[dataIndex][1] + "</li>");
				$("#inventory").append(addItem);
				JH.InvDisp.cells.push(addItem);
				dispIndex++;
				dataIndex++;
			}
		} else {
			if (JH.InvMgr.items.length <= dataIndex) {
				console.log("extra");
				JH.InvDisp.cells.splice(dispIndex, 1);
			} else {
				console.log("update");
				JH.InvDisp.cells[dispIndex].text(JH.InvMgr.items[dataIndex][0].type + ": " + JH.InvMgr.items[dataIndex][1]);
				dispIndex++;
				dataIndex++;
			}
		}
	}
};


