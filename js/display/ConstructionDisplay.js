JH.ConstructDisp = {};
JH.ConstructDisp.panelVisible = false;

JH.ConstructDisp.Init = {
	
};

JH.ConstructDisp.HandleTile = function(tile) {
	if (tile.building == null) {
		JH.ConstructDisp.buildKey = JH.ActionMgr.AddAction("Build", JH.ConstructDisp.HandleBuild, tile);
	} else {
		if (JH.ConstructDisp.buildKey != null) { JH.ActionMgr.RemoveAction(JH.ConstructDisp.buildKey); }
	}
};

JH.ConstructDisp.HandleBuild = function(tile) {
	if (JH.ConstructDisp.panelVisible) {
		JH.ConstructDisp.panelVisible = false;
		$(".popup").hide();
		JH.KeyMgr.EnableKeyboard();
	} else {
		$(".popup").hide();
		$("#construction").show();
		JH.ConstructDisp.panelVisible = true;
		JH.KeyMgr.DisableKeyboard();
	}
};




