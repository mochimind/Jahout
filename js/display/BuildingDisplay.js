JH.BuildingDisp = {};
JH.BuildingDisp.keys = [];

JH.BuildingDisp.HandleTile = function(desty, destx) {
	var tile = JH.MMgr.GetTile(desty, destx);
	JH.BuildingDisp.RemoveActions();
	
	var action = JH.Building.GetActionName(tile.building);
	if (action != null) {
		JH.BuildingDisp.keys.push(JH.ActionMgr.AddAction(action, JH.Building.GetAction(tile.building, tile)));
	}
};

JH.BuildingDisp.RemoveActions = function() {
	for (var i=0 ; i<JH.BuildingDisp.keys.length ; i++) {
		JH.ActionMgr.RemoveAction(JH.BuildingDisp.keys[i]);
	}	
};


